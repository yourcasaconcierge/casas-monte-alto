import { Inter } from 'next/font/google';
import { LanguageContext } from '@/context/LanguageContext';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import HoverOverlay from './HoverOverlay';

const inter = Inter({ subsets: ['latin'] });

interface ArticleHeroProps {
  componentType?: string;
  preview?: boolean;
  index: number;
  slug: string;
  imagerURL: string;
  englishTitle: string;
  spanishTitle: string;
  englishSubtitle: string;
  spanishSubtitle: string;
  excerpt: string;
}

const ArticleHero = ({
  componentType,
  index,
  preview,
  slug,
  imagerURL,
  englishTitle,
  spanishTitle,
  englishSubtitle,
  spanishSubtitle,
  excerpt,
}: ArticleHeroProps) => {
  const { language } = useContext(LanguageContext);
  const router = useRouter();

  switch (componentType) {
    case 'preview':
      return (
        <div
          onClick={() => preview && router.push(`/journal/entry/${slug}`)}
          className={`flex flex-col lg:flex-row-reverse lg:justify-between 
        ${index >= 0 && 'border-t-[1px]'}     
        ${preview && 'cursor-pointer lg:h-[50vh] '}
        border-secondary group relative`}
        >
          <div className="lg:w-1/2 h-full w-full lg:border-l-[1px] border-secondary max-lg:py-10 lg:p-10">
            <div className="relative w-full h-full">
              <Image
                src={imagerURL}
                className="w-full h-full object-cover"
                alt="contact us"
                width={1470}
                height={800}
              />
              <HoverOverlay type="entry" />
            </div>
          </div>
          <HeadingsContainer
            componentType={componentType}
            {...{ language, englishTitle, spanishTitle, excerpt }}
          />
        </div>
      );
    case 'entry':
      return (
        <section className="flex flex-col max-lg:gap-5 lg:flex-row-reverse lg:justify-between lg:h-screen border-secondary border-b-[1px]">
          <div className="w-full lg:w-1/2 h-full lg:border-l-[1px] border-secondary lg:p-10 lg:pt-32 ">
            <Image
              src={imagerURL}
              className="w-full h-full object-cover"
              alt="contact us"
              width={1470}
              height={800}
            />
          </div>
          <HeadingsContainer
            componentType={componentType}
            {...{
              language,
              englishTitle,
              spanishTitle,
              englishSubtitle,
              spanishSubtitle,
            }}
          />
        </section>
      );

    default:
      return 'Please specify a component type.';
  }
};

export default ArticleHero;

interface HeadingsContainerProps {
  componentType: string;
  language: string;
  englishTitle: string;
  spanishTitle: string;
  englishSubtitle?: string;
  spanishSubtitle?: string;
  excerpt?: string;
}

const HeadingsContainer = ({
  componentType,
  language,
  englishTitle,
  spanishTitle,
  englishSubtitle,
  spanishSubtitle,
  excerpt,
}: HeadingsContainerProps) => {
  const { misc } = useContext(LanguageContext);
  const headerFontSize = componentType === 'preview' ? 'subheading' : 'heading';

  return (
    <div className="flex flex-col gap-3 lg:gap-5 lg:justify-end lg:mb-14 lg:w-1/2 lg:pr-5 max-lg:pb-10">
      <h2 className="subheading font-semibold">{misc.entry}</h2>
      <h1 className={`${inter.className} ${headerFontSize} font-bold`}>
        {language === 'english' ? englishTitle : spanishTitle}
      </h1>

      {englishSubtitle && spanishSubtitle && (
        <h3 className="subheading ">
          {language === 'english' ? englishSubtitle : spanishSubtitle}
        </h3>
      )}
      {excerpt && (
        <article className="paragraph line-clamp-1">{excerpt}</article>
      )}
    </div>
  );
};
