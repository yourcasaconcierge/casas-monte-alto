'use client';

import { useRef, useEffect } from 'react';
import { motion as m, useInView, useAnimation } from 'framer-motion';

interface AnimationProps {
  children: JSX.Element | JSX.Element[];
  reveal?: boolean;
  slidingImage?: boolean;
  left?: boolean;
  bottom?: boolean;
}

const Animation = ({
  children,
  reveal,
  slidingImage,
  bottom,
  left,
}: AnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);
  return (
    <div ref={ref}>
      {reveal && (
        <m.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative overflow-hidden"
        >
          {children}
        </m.div>
      )}

      {slidingImage && left && (
        <m.div
          variants={{
            hidden: { opacity: 0, x: -300 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1 }}
        >
          {children}
        </m.div>
      )}

      {slidingImage && !left && (
        <m.div
          variants={{
            hidden: { opacity: 0, x: 300 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1 }}
        >
          {children}
        </m.div>
      )}

      {bottom && (
        <m.div
          variants={{
            // hidden: { scale: 0 },
            // visible: { scale: 0.7 },
            hidden: { opacity: 0, y: 300 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1.5 }}
          className="relative"
        >
          {children}
        </m.div>
      )}
    </div>
  );
};

export default Animation;
