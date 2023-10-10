import { getLandingImages } from '@/utils/getLanding';
import FooterContent from './FooterContent';

const Footer = async () => {
  const footerImage = await getLandingImages();
  return (
    <footer>
      <FooterContent data={footerImage.footerImage} />
    </footer>
  );
};

export default Footer;
