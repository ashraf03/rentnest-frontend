interface Props {
  description: string;
}

export default function PropertyDescription({
  description,
}: Props) {
  return (
    <section>

      <h2 className="mb-4 text-2xl font-semibold">
        Description
      </h2>

      <p className="leading-8 text-muted-foreground">
        {description}
      </p>

    </section>
  );
}