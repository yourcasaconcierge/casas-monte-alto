'use client';

import { FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { useSession } from 'next-auth/react';

interface DeleteButtonProps {
  slug?: string;
}

const DeleteButton = ({ slug }: DeleteButtonProps) => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      console.log('unauth');
    },
  });
  const handleClick = async () => {
    try {
      const response = await axios.delete(`/api/journal/delete`, {
        data: { slug },
      });
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FaTrash
      onClick={handleClick}
      className={`
      ${session ? '' : 'hidden'}
      text-white absolute top-3 right-3 cursor-pointer hover:scale-110 duration-300 ease-in-out`}
    />
  );
};

export default DeleteButton;
