import Image from 'next/image';
import largeLogoSvg from '@/public/images/CASAS MONTE ALTO.svg';
import smallLogoSvg from '@/public/images/SmallLogo.svg';

interface LogoSvgProps {
  footer?: boolean;
}

const LogoSvg = ({ footer }: LogoSvgProps) => {
  return (
    <>
      <Image
        src={largeLogoSvg}
        alt="logo"
        className={`${footer ? '' : 'max-lg:hidden'} w-full my-8 2xl:my-14`}
      />
      <Image
        src={smallLogoSvg}
        alt="logo"
        className={`${footer && 'hidden'} lg:hidden w-full my-8 2xl:my-14`}
      />
    </>
  );
};

export default LogoSvg;
