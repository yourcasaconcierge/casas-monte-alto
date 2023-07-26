import Image from 'next/image';
import casamontealto from '../../../public/images/CASAS MONTE ALTO.png';
import mobileLogo from '../../../public/images/Logo.png';

const Header = () => {
  return (
    <section className="border-b-2 border-secondary pb-14 lg:pb-32">
      <Image
        className="max-lg:hidden w-full max-lg:h-[5rem] my-14 lg:py-32"
        src={casamontealto}
        alt="text"
        width={500}
        height={500}
      />
      <Image
        className="lg:hidden w-full my-14 lg:py-32"
        src={mobileLogo}
        alt="text"
        width={500}
        height={500}
      />

      {/* Change to image */}
      <img
        src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="villa"
        className="bg-secondary w-full h-[300px] lg:h-[600px] object-cover"
      />
      <h1 className="mt-5 max-sm:text-sm">
        Short Term Rental Property Management <br /> Hospitality Services In
        Mendoza, Argentina
      </h1>
    </section>
  );
};

export default Header;
