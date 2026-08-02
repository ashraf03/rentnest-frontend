export default function HeroBackground() {
  return (
    <>
      <div
        className="
        absolute
        left-0
        top-0
        h-72
        w-72
        rounded-full
        bg-primary/10
        blur-3xl
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        h-80
        w-80
        rounded-full
        bg-blue-500/10
        blur-3xl
        "
      />
    </>
  );
}