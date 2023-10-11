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
