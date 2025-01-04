'use client';

import { AboutNode } from '@/types/AboutTypes';
import { LanguageContext } from '@/context/LanguageContext';
import { useContext } from 'react';
import Animation from './Animation';
import Image from 'next/image';
import Loader from '@/app/components/Loader';

interface AboutProps {
  data: AboutNode;
}

const About = ({ data }: AboutProps) => {
  const { language } = useContext(LanguageContext);

  if (!data) return <Loader className="mt-32" />;

  const {
    englishHeaderOne,
    englishHeaderTwo,
    englishHeaderThree,
    englishHeaderFour,
    englishParagraphOne,
    englishParagraphTwo,
  } = data;
  const {
    spanishHeaderOne,
    spanishHeaderTwo,
    spanishHeaderThree,
    spanishHeaderFour,
    spanishParagraphOne,
    spanishParagraphTwo,
  } = data;

  const { imageOne, imageTwo, imageThree } = data;

  if (!englishParagraphOne) return <Loader className="mt-32" />;

  const section = [
    {
      heading:
        data && language === 'english'
          ? englishParagraphOne.text?.split('\\n')[0]
          : spanishParagraphOne.text?.split('\\n')[0],
      paragraph:
        data && language === 'english'
          ? englishParagraphOne.text?.split('\\n')[1]
          : spanishParagraphOne.text?.split('\\n')[1],
    },
    {
      heading:
        data && language === 'english'
          ? englishParagraphTwo.text?.split('\\n')[0]
          : spanishParagraphTwo.text?.split('\\n')[0],
      paragraph:
        data && language === 'english'
          ? englishParagraphTwo.text?.split('\\n')[1]
          : spanishParagraphTwo.text?.split('\\n')[1],
    },
  ];

  return (
    <div className="flex flex-col gap-[45vh]">
      <section className="w-full h-screen flex justify-center items-center">
        <h1
          className={`

        text-3xl md:text-[4.5vw] md:leading-none md:px-10 text-center font-extrabold`}
        >
          {language === 'english' ? englishHeaderOne : spanishHeaderOne}
        </h1>
      </section>

      <section className="max-w-7xl lg:pr-96">
        <Animation reveal>
          <h2
            className={`
        text-2xl lg:text-5xl font-bold`}
          >
            {language === 'english' ? englishHeaderTwo : spanishHeaderTwo}
          </h2>
        </Animation>
      </section>

      <section className="">
        <Animation slidingImage left>
          <Image
            src={imageOne?.url}
            alt="Change this"
            width={2029}
            height={1353}
            className="w-full max-w-3xl h-[350px] lg:h-[593px] bg-secondary object-cover"
          />
        </Animation>
      </section>

      <section className="max-w-7xl flex items-center lg:pr-96">
        <Animation reveal>
          <h3 className={`text-2xl lg:text-5xl font-bold`}>
            {language === 'english' ? englishHeaderThree : spanishHeaderThree}
          </h3>
        </Animation>
      </section>

      <section>
        <Animation slidingImage>
          <Image
            src={imageTwo?.url}
            alt="Change this"
            width={2029}
            height={1353}
            className="w-full max-w-3xl h-[350px] lg:h-[593px] object-cover float-right"
          />
        </Animation>
      </section>

      <section className="relative lg:h-screen lg:flex flex-col items-center justify-center">
        <Animation bottom>
          <h4
            className={`text-3xl md:text-[4.5vw] md:leading-none font-bold text-center mb-32`}
          >
            {language === 'english' ? englishHeaderFour : spanishHeaderFour}
          </h4>
        </Animation>
        <Animation bottom>
          <Image
            src={imageThree?.url}
            alt="Change this"
            width={1148}
            height={700}
            className="object-cover w-full max-w-5xl h-[350px] lg:h-[700px]"
          />
        </Animation>
      </section>
      <section>
        {section?.map((section, index) => (
          <SubSection key={index} data={section} />
        ))}
      </section>
    </div>
  );
};

export default About;

const SubSection = ({
  data,
}: {
  data: { heading: string; paragraph: string };
}) => {
  return (
    <Animation reveal>
      <div className="max-w-7xl pt-[20vmin] pb-[30vmin] justify-center items-center xl:pr-96 max-lg:mb-[50vh]">
        <div className="flex flex-col gap-5 text-3xl lg:text-7xl">
          <h3 className="font-bold">{data.heading}</h3>
          <p className="text-[55%] lg:text-[35%] leading-normal lg:pr-56">
            {data.paragraph}
          </p>
        </div>
      </div>
    </Animation>
  );
};
