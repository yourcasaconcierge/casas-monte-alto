const { useEffect, useState } = require('react');

export const GetScreenSize = () => {
  const [screenSize, setScreenSize] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      setScreenSize(body.clientWidth);
      const handleResize = () => {
        setScreenSize(body.clientWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return screenSize;
};
