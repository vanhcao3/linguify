'use client';

import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/courses/radio-group';
import { Label } from '@/components/ui/label';
import toast from 'react-hot-toast';

interface QuizData {
  id: string;
  title: string;
  passPercentage: number;
  questions: Array<{
    id: string;
    prompt: string;
    options: Array<{ id: string; text: string }>;
  }>;
}

export function QuizRunner({
  courseId,
  chapterId,
  isLocked,
}: {
  courseId: string;
  chapterId: string;
  isLocked: boolean;
}) {
  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState<QuizData | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ scorePercent: number; passed: boolean } | null>(null);

  useEffect(() => {
    let mounted = true;
    const run = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/courses/${courseId}/chapters/${chapterId}/quiz`);
        if (!mounted) return;
        setQuiz(res.data);
      } catch {
        setQuiz(null);
      } finally {
        setLoading(false);
      }
    };
    run();
    return () => {
      mounted = false;
    };
  }, [courseId, chapterId]);

  const canSubmit = useMemo(() => {
    if (!quiz) return false;
    return quiz.questions.every((q) => !!answers[q.id]);
  }, [quiz, answers]);

  if (isLocked) return null;
  if (loading) return null;
  if (!quiz) return null;

  const onSubmit = async () => {
    if (!quiz) return;
    try {
      setSubmitting(true);
      const res = await axios.post(`/api/courses/${courseId}/chapters/${chapterId}/quiz/attempt`, {
        answers: Object.entries(answers).map(([questionId, optionId]) => ({ questionId, optionId })),
      });
      setResult(res.data);
      if (res.data.passed) {
        toast.success('Quiz passed!');
      } else {
        toast.error('Quiz failed. Try again.');
      }
    } catch {
      toast.error('Failed to submit quiz');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold">Quiz: {quiz.title}</h3>
      <p className="text-sm text-muted-foreground">Pass mark: {quiz.passPercentage}%</p>
      <Separator className="my-3" />
      {quiz.questions.map((q, idx) => (
        <Card key={q.id} className="mb-4">
          <CardContent className="p-4">
            <p className="font-medium mb-2">{idx + 1}. {q.prompt}</p>
            <RadioGroup
              value={answers[q.id] || ''}
              onValueChange={(val) => setAnswers((prev) => ({ ...prev, [q.id]: val }))}
            >
              {q.options.map((opt) => (
                <div className="flex items-center space-x-2" key={opt.id}>
                  <RadioGroupItem value={opt.id} id={`${q.id}-${opt.id}`} />
                  <Label htmlFor={`${q.id}-${opt.id}`}>{opt.text}</Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
      ))}
      <div className="flex items-center gap-2">
        <Button onClick={onSubmit} disabled={!canSubmit || submitting}>
          Submit Quiz
        </Button>
        {result && (
          <span className={result.passed ? 'text-green-600' : 'text-red-600'}>
            Score: {result.scorePercent}% — {result.passed ? 'Passed' : 'Failed'}
          </span>
        )}
      </div>
    </div>
  );
}

