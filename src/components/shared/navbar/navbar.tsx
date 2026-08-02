import Logo from "./logo";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import ThemeToggle from "./theme-toggle";
import AuthButtons from "./auth-buttons";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Logo />

        <DesktopNav />

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <AuthButtons />

          <MobileNav />
        </div>
      </div>
    </header>
  );
}