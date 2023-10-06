import type { Metadata } from 'next';
import Image from 'next/image';
import ContactPageContainer from './components/ContactPageContainer';
import img from './images/contact-image.jpg';

export const metadata: Metadata = {
  title: 'Contact Us',
};

const ContactPage = () => {
  return (
    <main className="layout lg:h-screen lg:flex max-lg:mt-32 mb-32">
      <Image
        src={img}
        className="bg-secondary lg:w-1/2 h-[300px] lg:h-full w-full max-lg:mt-14 object-cover"
        alt="contact us"
        width={1470}
        height={800}
      />
      <ContactPageContainer />
    </main>
  );
};

export default ContactPage;
