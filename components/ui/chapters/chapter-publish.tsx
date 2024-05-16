'use client';

import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { ConfirmModal } from '@/components/modals/confirm-modal';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface ChapterPublishProps {
  disabled: boolean;
  courseId: string;
  chapterId: string;
  isPublished: boolean;
}

export const ChapterPublish = ({
  disabled,
  courseId,
  chapterId,
  isPublished,
}: ChapterPublishProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(
        `/api/courses/${courseId}/chapters/${chapterId}`,
      );
      toast.success('Chapter deleted successfully');
      router.refresh();
      router.push(`/teacher/courses/${courseId}`);
    } catch {
      toast.error('Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={() => {}}
        disabled={disabled || isLoading}
        variant="outline"
        size="sm"
      >
        {isPublished ? 'Unpublish' : 'Publish'}
      </Button>
      <ConfirmModal
        description="You will delete this chapter forever"
        onConfirm={onDelete}
      >
        <Button size="sm" disabled={isLoading}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </ConfirmModal>
    </div>
  );
};