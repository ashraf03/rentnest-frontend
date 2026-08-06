interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-muted/30">

      <div className="container mx-auto flex min-h-screen items-center justify-center px-5">

        {children}

      </div>

    </main>
  );
}