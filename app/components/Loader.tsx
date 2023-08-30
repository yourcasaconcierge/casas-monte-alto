interface LoaderProps {
  className?: string;
}
const Loader = ({ className }: LoaderProps) => {
  return (
    <section
      className={`
      ${className}
      h-[80vh] flex justify-center items-center`}
    >
      <h1 className="text-xl animate-pulse">Loading...</h1>
    </section>
  );
};

export default Loader;
