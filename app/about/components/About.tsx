'use client';

import { Inter } from 'next/font/google';
import { AboutsContext } from '@/context/AboutContext';
import { LanguageContext } from '@/context/LanguageContext';
import { useContext } from 'react';
import Animation from './Animation';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

const About = () => {
  const { englishAbout, spanishAbout, loading } = useContext(AboutsContext);
  const { about } = useContext(LanguageContext);
  const { section1, section2, section3, section4 } = about;
  return (
    <div className="flex flex-col gap-32">
      <section className="w-full h-screen flex justify-center items-center">
        <h1
          className={`
          ${inter.className}
        text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-extrabold`}
        >
          {section1?.line1}
          <br /> {section1?.line2}
        </h1>
      </section>

      <section className="max-w-7xl mx-auto lg:h-screen flex flex-col justify-center gap-5 lg:pr-96 max-lg:mb-[50vh]">
        <Animation reveal>
          <h2
            className={`
        ${inter.className}
        text-2xl lg:text-5xl font-bold`}
          >
            {section2?.heading}
          </h2>
          <p className="text-lg lg:text-2xl">{section2?.paragraph}</p>
        </Animation>
      </section>

      <section className="w-full lg:h-screen flex max-lg:flex-col lg:justify-between gap-14 lg:gap-32 max-lg:mb-[50vh]">
        <Animation slidingImage left>
          <Image
            src="https://images.unsplash.com/photo-1692401885962-0d29dcdf5fba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80"
            alt="Change this"
            width={2029}
            height={1353}
            className="w-full h-[350px] lg:h-[593px] bg-secondary"
          />
        </Animation>
        <Animation slidingImage>
          <Image
            src="https://images.unsplash.com/photo-1692401885962-0d29dcdf5fba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80"
            alt="Change this"
            width={2029}
            height={1353}
            className="w-full h-[350px] lg:h-[593px] bg-secondary lg:mt-52"
          />
        </Animation>
      </section>

      <section className="max-w-7xl mx-auto w-full lg:h-screen flex items-center lg:pr-96 max-lg:mb-[50vh]">
        <Animation reveal>
          <p className="text-2xl lg:text-3xl">{section3?.paragraph}</p>
        </Animation>
      </section>

      <section className="relative lg:h-screen max-lg:mb-[50vh]">
        <Animation scale>
          <Image
            src="https://images.unsplash.com/photo-1578010908802-cd7e5cd853c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Change this"
            width={2070}
            height={1380}
            className="object-cover w-full h-[500px] lg:h-[1000px]"
          />
        </Animation>
      </section>
      <section>
        {section4?.map((section, index) => (
          <SubSection key={index} section={section} />
        ))}
      </section>
    </div>
  );
};

export default About;

const SubSection = ({
  section,
}: {
  section: { heading: string; paragraph: string };
}) => {
  return (
    <div className="max-w-7xl mx-auto w-full lg:min-h-screen flex justify-center items-center text-2xl lg:pr-96 max-lg:mb-[50vh]">
      <div className="flex flex-col gap-5">
        <Animation reveal>
          <h3
            className={`
            ${inter.className}
            text-3xl lg:text-5xl font-bold`}
          >
            {section.heading}
          </h3>
          <p className="text-lg lg:text-2xl">{section.paragraph}</p>
        </Animation>
      </div>
    </div>
  );
};
