'use client';

import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { ConfirmModal } from '@/components/modals/confirm-modal';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useConfettiStore } from '@/hooks/use-confetti-store';
interface CoursePublishProps {
  disabled: boolean;
  courseId: string;
  isPublished: boolean;
}

export const CoursePublish = ({
  disabled,
  courseId,
  isPublished,
}: CoursePublishProps) => {
  const router = useRouter();
  const confetti = useConfettiStore();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);
      if (isPublished) {
        await axios.patch(`/api/courses/${courseId}/unpublish`);
        toast.success('Course unpublished');
      } else {
        await axios.patch(`/api/courses/${courseId}/publish`);

        toast.success('Course published');
        confetti.onOpen();
      }

      router.refresh();
    } catch {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/api/courses/${courseId}`);
      toast.success('Course deleted successfully');
      router.push(`/teacher/courses`);
    } catch {
      toast.error('Something went wrong!');
    } finally {
      setIsLoading(false);
      router.refresh();
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={onClick}
        disabled={disabled || isLoading}
        variant="outline"
        size="sm"
      >
        {isPublished ? 'Unpublish' : 'Publish'}
      </Button>
      <ConfirmModal
        description="You will delete this course forever"
        onConfirm={onDelete}
      >
        <Button size="sm" disabled={isLoading}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </ConfirmModal>
    </div>
  );
};
