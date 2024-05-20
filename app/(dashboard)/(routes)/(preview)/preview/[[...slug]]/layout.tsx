export default function CallPreviewLayout({
                                            children,
                                          }: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main className="flex min-h-screen w-screen items-center">
        {children}
      </main>
    </div>
  );
}
