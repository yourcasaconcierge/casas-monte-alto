import Image from 'next/image';
import LogoSvg from '../LogoSvg';
import SmallLogoSvg from '../SmallLogoSvg';

const Header = () => {
  return (
    <section className="border-b-2 border-secondary pb-14 lg:pb-32">
      <LogoSvg hidden />
      <SmallLogoSvg />
      <Image
        src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="villa"
        className="bg-secondary w-full h-[300px] lg:h-[600px] object-cover"
        width={1170}
        height={600}
      />
      <h2 className="mt-5 max-sm:text-sm lg:text-lg">
        Short Term Rental Property Management <br /> Hospitality Services In
        Mendoza, Argentina
      </h2>
    </section>
  );
};

export default Header;
