import { LanguageContext } from '@/context/LanguageContext';
import { useContext } from 'react';

interface HoverOverlayProps {
  type: string;
  className?: string;
}

const HoverOverlay = ({ type, className }: HoverOverlayProps) => {
  const { misc } = useContext(LanguageContext);
  let text;
  switch (type) {
    case 'properties':
      text = misc.previewBtn;
      break;
    default:
      text = misc.exploreBtn;
  }
  return (
    <>
      <div
        className={`${className} max-md:hidden w-0 group-hover:w-full h-full absolute top-0 right-0 bg-secondary opacity-30 transition-all duration-500`}
      />

      <button className="max-md:hidden text-primary absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
        {text}
      </button>
    </>
  );
};

export default HoverOverlay;
