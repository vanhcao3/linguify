'use client';
import React from 'react';
import * as z from 'zod';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { chapterAccessFormSchema } from '@/schemas';
import { Button } from '@/components/ui/button';
import { Editor } from '@/components/editor';
import { Preview } from '@/components/preview';
import { Checkbox } from '@/components/ui/checkbox';
import { Pencil, ClipboardX, Loader2 } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Chapter } from '@prisma/client';

interface ChapterAccessFormProps {
  initialData: Chapter;
  courseId: string;
  chapterId: string;
}

export const ChapterAccessForm = ({
  initialData,
  courseId,
  chapterId,
}: ChapterAccessFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const toggleEdit = () => setIsEditing((current) => !current);
  const router = useRouter();

  const form = useForm<z.infer<typeof chapterAccessFormSchema>>({
    resolver: zodResolver(chapterAccessFormSchema),
    defaultValues: {
      isFree: !!initialData?.isFree,
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (
    values: z.infer<typeof chapterAccessFormSchema>,
  ) => {
    try {
      setIsUpdating(true);
      await axios.patch(
        `/api/courses/${courseId}/chapters/${chapterId}`,
        values,
      );
      toast.success('Updated changes');
      toggleEdit();
      router.refresh();
    } catch {
      toast.error('Something went wrong!');
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="relative mt-6 border bg-slate-100 rounded-md p-4">
      {isUpdating && (
        <div className="absolute h-full w-full bg-slate-500/20 top-0 right-0 rounded-m flex items-center justify-center">
          <Loader2 className="animate-spin h-6 w-6" />
        </div>
      )}
      <div className="font-medium flex items-center justify-between">
        Access control
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>
              <ClipboardX className="h-4 w-4 mr-2" />
              Cancel
            </>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit access
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <div className="text-sm mt-2">
          {initialData.isFree ? (
            <>This chapter is public</>
          ) : (
            <>This chapter is private</>
          )}
        </div>
      )}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="isFree"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormDescription>
                      Is this chapter public?
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button
                type="submit"
                disabled={!isValid || isSubmitting}
              >
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};
