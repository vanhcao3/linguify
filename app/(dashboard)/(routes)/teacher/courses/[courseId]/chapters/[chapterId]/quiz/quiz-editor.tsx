'use client';

import { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import toast from 'react-hot-toast';

type QuizEditorProps = {
  courseId: string;
  chapterId: string;
  initialQuiz: any;
};

export function QuizEditor({ courseId, chapterId, initialQuiz }: QuizEditorProps) {
  const [title, setTitle] = useState<string>(initialQuiz?.title || '');
  const [description, setDescription] = useState<string>(initialQuiz?.description || '');
  const [passPercentage, setPassPercentage] = useState<number>(initialQuiz?.passPercentage || 70);
  const [questions, setQuestions] = useState<Array<any>>(
    initialQuiz?.questions || [
      { prompt: '', position: 1, options: [{ text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }] },
    ],
  );
  const [saving, setSaving] = useState(false);

  const addQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      { prompt: '', position: prev.length + 1, options: [{ text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }] },
    ]);
  };

  const updateQuestion = (idx: number, data: any) => {
    setQuestions((prev) => prev.map((q, i) => (i === idx ? { ...q, ...data } : q)));
  };

  const updateOption = (qIdx: number, oIdx: number, data: any) => {
    setQuestions((prev) => prev.map((q, i) => (i === qIdx ? { ...q, options: q.options.map((o: any, j: number) => (j === oIdx ? { ...o, ...data } : o)) } : q)));
  };

  const setCorrectOption = (qIdx: number, oIdx: number) => {
    setQuestions((prev) => prev.map((q, i) => (i === qIdx ? { ...q, options: q.options.map((o: any, j: number) => ({ ...o, isCorrect: j === oIdx })) } : q)));
  };

  const onSave = async () => {
    try {
      setSaving(true);
      await axios.put(`/api/courses/${courseId}/chapters/${chapterId}/quiz`, {
        title,
        description,
        passPercentage,
        questions,
      });
      toast.success('Quiz saved');
    } catch {
      toast.error('Failed to save quiz');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Quiz Editor</h2>
      <div className="grid gap-4">
        <div>
          <Label>Title</Label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Quiz title" />
        </div>
        <div>
          <Label>Description</Label>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description (optional)" />
        </div>
        <div>
          <Label>Pass percentage</Label>
          <Input type="number" value={passPercentage} onChange={(e) => setPassPercentage(parseInt(e.target.value || '0'))} min={0} max={100} />
        </div>
      </div>
      <Separator className="my-4" />
      <div className="space-y-4">
        {questions.map((q, qIdx) => (
          <Card key={qIdx}>
            <CardContent className="p-4 space-y-3">
              <div>
                <Label>Question {qIdx + 1}</Label>
                <Input value={q.prompt} onChange={(e) => updateQuestion(qIdx, { prompt: e.target.value })} placeholder="Question prompt" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {q.options.map((o: any, oIdx: number) => (
                  <div key={oIdx} className="space-y-1">
                    <Label>Option {oIdx + 1}</Label>
                    <Input value={o.text} onChange={(e) => updateOption(qIdx, oIdx, { text: e.target.value })} placeholder={`Answer option ${oIdx + 1}`} />
                    <div className="flex items-center gap-2">
                      <input type="checkbox" checked={o.isCorrect} onChange={() => setCorrectOption(qIdx, oIdx)} id={`q${qIdx}o${oIdx}`} />
                      <Label htmlFor={`q${qIdx}o${oIdx}`}>Correct answer</Label>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Button variant="secondary" onClick={addQuestion}>Add question</Button>
        <Button onClick={onSave} disabled={saving}>Save quiz</Button>
      </div>
    </div>
  );
}

