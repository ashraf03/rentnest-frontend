import Logo from "./logo";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

export default function Navbar() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-5">
        <Logo />

        <DesktopNav />

        <MobileNav />
      </div>
    </header>
  );
}