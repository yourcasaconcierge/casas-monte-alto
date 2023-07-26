import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const ContactPage = () => {
  return (
    <main className="layout lg:h-screen lg:flex my-32">
      <img
        src="https://images.unsplash.com/photo-1448697138198-9aa6d0d84bf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        className="bg-secondary lg:w-1/2 h-[350px] lg:h-full w-full max-lg:mt-14 object-cover"
      />
      <div className="w-full flex flex-col gap-5 lg:gap-8 justify-center items-center max-lg:mt-14">
        <h1
          className={`${inter.className} text-5xl lg:text-8xl capitalize font-bold`}
        >
          contact us
        </h1>
        <Link href="">help@casamontealto.com</Link>
        <Link href="">Visit our AirBnb page</Link>
      </div>
    </main>
  );
};

export default ContactPage;

{
  /* <main className="lg:h-screen lg:flex">
<img
  src="https://images.unsplash.com/photo-1448697138198-9aa6d0d84bf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  alt="contact us"
  className="bg-secondary h-[350px] lg:h-full w-full max-lg:mt-14 object-cover"
/>
<div className="w-full flex flex-col gap-5 lg:gap-8 justify-center items-center max-lg:mt-14">
  <h1
    className={`
  ${inter.className}
  text-5xl lg:text-8xl capitalize font-bold`}
  >
    contact us
  </h1>
  <Link href="">help@casamontealto.com</Link>
  <Link href="">Visit our AirBnb page</Link>
</div>
</main> */
}
