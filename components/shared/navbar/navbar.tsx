import Logo from "./logo";
import DesktopNav from "./desktop-nav";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-5">
        <Logo />

        <DesktopNav />
      </div>
    </header>
  );
}