export default async function CallLayout({
                                           children,
                                           params
                                         }: {
  children: React.ReactNode
  params: {
    slug: string
  }
}) {

  return (
    <div className="flex flex-col">
      <main className="flex-1 w-screen max-h-screen flex items-center">
        {children}
      </main>
    </div>
  );
}