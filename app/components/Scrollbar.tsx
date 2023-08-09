'use client';

import { animate } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import useMobile from '../../hooks/useMobile';

const Scrollbars: React.FC = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [visibility, setVisibility] = useState(0);
  const isMobile = useMobile();
  const scrollbar = useRef<HTMLDivElement>(null);
  const thumb = useRef<HTMLDivElement>(null);

  const handleMouseOver = () => {
    setVisibility(1);
  };

  const handleMouseOut = () => {
    setVisibility(0);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const startY = e.clientY;
    const thumbEl = thumb.current;
    const scrollbarEl = scrollbar.current;
    if (!thumbEl || !scrollbarEl) return;
    const thumbStartY = thumbEl.getBoundingClientRect().top;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!thumbEl || !scrollbarEl) return;
      const deltaY = e.clientY - startY;
      const thumbY = Math.min(
        scrollbarEl.offsetHeight - thumbEl.offsetHeight,
        Math.max(
          0,
          thumbStartY + deltaY - scrollbarEl.getBoundingClientRect().top
        )
      );
      const scrollPercent =
        thumbY / (scrollbarEl.offsetHeight - thumbEl.offsetHeight);
      const scrollY =
        scrollPercent * (document.body.scrollHeight - window.innerHeight);

      window.scrollTo(0, scrollY);
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove as any);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove as any);
    window.addEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    const thumbEl = thumb.current;
    const bodyHeight = document.body.offsetHeight;
    const scrollbarEl = scrollbar.current;
    if (!thumbEl || !scrollbarEl) return;
    const scrollbarHeight = scrollbarEl.offsetHeight;
    const thumbHeight = (scrollbarHeight / bodyHeight) * scrollbarHeight;
    thumbEl.addEventListener('mousedown', handleMouseDown as any);

    const updateScroll = () => {
      const scrollPercent = window.scrollY / document.body.scrollHeight;
      const scrollY = scrollPercent * scrollbarHeight;
      thumbEl.style.transform = `translateY(${scrollY}px)`;
      if (scrollPercent > 0.1) {
        thumbEl.style.opacity = '1';
      }
    };
    window.addEventListener('scroll', updateScroll);
    thumbEl.style.height = `${thumbHeight}px`;

    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, [isScrolling]);

  useEffect(() => {
    const scrollbarEl = scrollbar.current;
    if (!scrollbarEl) return;
    animate(
      scrollbarEl,
      { opacity: visibility },
      {
        duration: 0.5,
        ease: 'easeInOut',
      }
    );
  }, [visibility]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    function handleScroll() {
      setIsScrolling(true);
      setVisibility(1);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
        setVisibility(0);
      }, 1000); // Change this value to adjust the delay time
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolling, setIsScrolling, setVisibility]);

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      ref={scrollbar}
      className={`${
        isMobile ? 'hidden' : ''
      } flex justify-center fixed top-0 right-0 w-3 h-screen z-[1001] bg-transparent opacity-0`}
    >
      <div ref={thumb} className="w-2 bg-black rounded-2xl cursor-grab"></div>
    </div>
  );
};

export default Scrollbars;
