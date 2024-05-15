'use client';

import * as z from 'zod';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { priceFormSchema } from '@/schemas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Pencil, ClipboardX } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Course } from '@prisma/client';
import { formatPrice } from '@/lib/format';

interface PriceFormProps {
  initialData: Course;
  courseId: string;
}

export const PriceForm = ({ initialData, courseId }: PriceFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => setIsEditing((current) => !current);
  const router = useRouter();

  const form = useForm<z.infer<typeof priceFormSchema>>({
    resolver: zodResolver(priceFormSchema),
    defaultValues: {
      price: initialData?.price || undefined,
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof priceFormSchema>) => {
    try {
      const { price } = values;
      const { price: existingPrice } = initialData;

      if (price < 0) {
        toast.error('Please enter a valid price');
        toggleEdit();
        return;
      }

      if (price === existingPrice) {
        toast.error('Please make a change');
        toggleEdit();
        return;
      }

      await axios.patch(`/api/courses/${courseId}`, values);
      toast.success('Updated changes');
      toggleEdit();
      router.refresh();
    } catch {
      toast.error('Something went wrong!');
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course Price
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>
              <ClipboardX className="h-4 w-4 mr-2" />
              Cancel
            </>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit price
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p className={cn('text-sm mt-2', !initialData.price && 'text-slate-500 italic')}>
          {initialData.price ? formatPrice(initialData.price) : 'Free'}
        </p>
      )}
      {isEditing && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="number" step="10000" disabled={isSubmitting} placeholder="Set a price" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button type="submit" disabled={!isValid || isSubmitting}>
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};
