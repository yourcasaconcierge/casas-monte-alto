interface ImageLoaderProps {
  variant?: string;
  className?: string;
}

interface SizeVariants {
  [key: string]: string;
}

const ImageLoader = ({ variant, className }: ImageLoaderProps) => {
  const sizeVariants: SizeVariants = {
    banner: 'h-[300px] 2xl:h-[450px]',
    responsive: 'w-full h-full',
    journal: 'w-full h-full min-h-[300px] 2xl:h-[650px]',
    contact: 'lg:w-1/2 h-[300px] lg:h-full w-full max-lg:mt-14',
  };
  return (
    <div
      className={`
      ${variant && sizeVariants[variant]} 
      ${className} 
      bg-neutral-500 animate-pulse
      `}
    />
  );
};

export default ImageLoader;
