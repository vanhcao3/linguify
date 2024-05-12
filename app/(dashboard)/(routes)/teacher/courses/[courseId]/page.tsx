import { getCourseById } from '@/data/courses';
import { currentUserId } from '@/lib/auth';
import { getCategories } from '@/data/categories';
import { redirect } from 'next/navigation';
import { IconBadge } from '@/components/icon-badge';
import { BookOpenText, CircleDollarSign, File, ListChecks } from 'lucide-react';
import { TitleForm } from '@/components/ui/courses/title-form';
import { DescriptionForm } from '@/components/ui/courses/description-form';
import { ImageForm } from '@/components/ui/courses/image-form';
import { CategoryForm } from '@/components/ui/courses/category-form';
import { PriceForm } from '@/components/ui/courses/price-form';
import { AttachmentForm } from '@/components/ui/courses/attachment-form';
const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  const userId = await currentUserId();

  if (!userId) {
    return redirect('/');
  }

  const course = await getCourseById(params.courseId);
  const categories = await getCategories();

  if (!course) {
    return redirect('/');
  }

  const requiredFields = [course.title, course.description, course.imageUrl, course.price, course.categoryId];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">Adding a course</h1>
          <span className="text-sm text-slate-700">Complete all fields {completionText}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={BookOpenText} />
            <h2 className="text-2xl">Customize your course</h2>
          </div>
          <TitleForm initialData={course} courseId={course.id} />
          <DescriptionForm initialData={course} courseId={course.id} />
          <ImageForm initialData={course} courseId={course.id} />
          <CategoryForm
            initialData={course}
            courseId={course.id}
            options={categories!.map((category) => ({
              label: category.name,
              value: category.id,
            }))}
          />
        </div>
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={ListChecks} />
              <h2 className="text-xl">Course chapters</h2>
            </div>
            <div>Chapters</div>
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={CircleDollarSign} />
              <h2 className="text-xl">Sell your course</h2>
            </div>
            <PriceForm initialData={course} courseId={course.id} />
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={File} />
              <h2 className="text-xl">Resources</h2>
            </div>
            <AttachmentForm initialData={course} courseId={course.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseIdPage;
