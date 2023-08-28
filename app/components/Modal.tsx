'use client';

import { IoIosClose } from 'react-icons/io';
import { useEffect } from 'react';
import Image from 'next/image';

interface ModalProps {
  src: string;
  setModal: (value: boolean) => void;
}

const Modal = ({ src, setModal }: ModalProps) => {
  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'hidden';
    }
    return () => {
      body && (body.style.overflow = 'auto');
    };
  }, []);
  return (
    <>
      <div
        className="fixed top-14 left-0 w-full h-full bg-opacity-60 bg-black cursor-pointer"
        onClick={() => setModal(false)}
      />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-5/6 lg:max-w-3xl lg:h-full lg:max-h-[35rem] lg:mx-auto">
        <IoIosClose
          className="absolute top-3 right-2 text-3xl cursor-pointer"
          onClick={() => setModal(false)}
        />

        <Image
          src={src}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full p-10 object-contain"
        />
      </div>
    </>
  );
};

export default Modal;
