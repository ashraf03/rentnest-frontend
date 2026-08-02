import Logo from "./logo";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-5">
        <Logo />

        <DesktopNav />

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}