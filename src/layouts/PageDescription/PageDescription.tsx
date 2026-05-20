interface PageDescriptionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}
const PageDescription = ({
  title,
  description,
  children,
}: PageDescriptionProps) => {
  return (
    <div className="p-8">
      <h1 className="text-preset-1 font-bold text-foreground mb-2">{title}</h1>
      <p className="text-preset-3 text-secondary mb-8">{description}</p>
      <section>{children}</section>
    </div>
  );
};

export default PageDescription;
