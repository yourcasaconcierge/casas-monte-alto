interface ImageLoaderProps {
  variant: string;
}

interface SizeVariants {
  [key: string]: string;
}

const ImageLoader = ({ variant }: ImageLoaderProps) => {
  const sizeVariants: SizeVariants = {
    banner: 'h-[300px] 2xl:h-[450px]',
    responsive: 'w-full h-full',
    journal: 'w-full h-full min-h-[300px] 2xl:h-[650px]',
  };
  return (
    <div
      className={`bg-neutral-500 w-full ${sizeVariants[variant]} animate-pulse`}
    />
  );
};

export default ImageLoader;
