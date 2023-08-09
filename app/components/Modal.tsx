import { IoIosClose } from 'react-icons/io';

interface ModalProps {
  src: string;
  setModal: (value: boolean) => void;
}

const Modal = ({ src, setModal }: ModalProps) => {
  return (
    <>
      <div
        className="fixed top-14 left-0 w-full h-full bg-opacity-60 bg-black cursor-pointer"
        onClick={() => setModal(false)}
      />

      <div className="layout bg-white w-full h-1/3 flex items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <IoIosClose
          className="absolute top-3 right-2 text-3xl cursor-pointer"
          onClick={() => setModal(false)}
        />

        <img src={src} alt="" className="w-full h-full object-cover p-10" />
      </div>
    </>
  );
};

export default Modal;
