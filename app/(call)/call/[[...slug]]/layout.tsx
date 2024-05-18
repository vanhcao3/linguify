import { redirect } from 'next/navigation';
import { cookies } from "next/headers";
import { currentUser } from '@/lib/auth';

export default async function CallLayout({
                                           children,
                                           params
                                         }: {
  children: React.ReactNode
  params: {
    slug: string
  }
}) {
  const user = await currentUser();
  const unAuthorizedUserName = cookies().get("username");
  console.log(unAuthorizedUserName);
  if (!user && !unAuthorizedUserName) {
    redirect(`/preview/${params.slug}`)
  }

  return (
    <div className="flex flex-col">
      <main className="flex-1 w-screen flex items-center">
        {children}
      </main>
    </div>
  );
}