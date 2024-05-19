'use client';

import { Button } from '@/components/ui/button';
import { useConfettiStore } from '@/hooks/use-confetti-store';
import axios from 'axios';
import { CheckCircle, XCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface CourseProgressButtonProps {
  chapterId: string;
  courseId: string;
  isCompleted?: boolean;
  nextChapterId?: string;
}

export const CourseProgressButton = ({
  chapterId,
  courseId,
  isCompleted,
  nextChapterId,
}: CourseProgressButtonProps) => {
  const router = useRouter();
  const confetti = useConfettiStore();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      await axios.put(
        `/api/courses/${courseId}/chapters/${chapterId}/progress`,
        { isCompleted: !isCompleted },
      );

      if (!isCompleted && !nextChapterId) {
        toast.success(
          'Congratulations on finishing the last chapter!',
        );
        confetti.onOpen();
      }

      if (!isCompleted && nextChapterId) {
        toast.success('Yay! Keep going');
        router.push(`/courses/${courseId}/chapters/${nextChapterId}`);
      }

      router.refresh();
    } catch {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const Icon = isCompleted ? XCircle : CheckCircle;
  return (
    <Button
      type="button"
      variant={isCompleted ? 'outline' : 'success'}
      className="w-full md:w-auto"
      onClick={onClick}
    >
      {isCompleted ? 'Mark not completed' : 'Mark completed'}
      <Icon className="h-4 w-4 ml-2" />
    </Button>
  );
};
