'use client';

import { EntryContext } from '@/context/EntryContext';
import { useContext } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import axios from 'axios';

const EditButton = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      console.log('unauth');
    },
  });
  const { slug, title, subtitle, date, content } = useContext(EntryContext);
  const router = useRouter();
  const edit = usePathname().endsWith(slug);
  const save = usePathname().endsWith('edit');

  const handleClick = async () => {
    if (edit) {
      router.push(`/journal/entry/${slug}/edit`);
    } else if (save) {
      try {
        const response = await axios.post('/api/journal/edit', {
          slug,
          title,
          subtitle,
          date,
          content,
        });
        await router.push(`/journal/entry/${slug}`);
        await router.refresh();
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.post('/api/journal/add');
        await router.push(`/journal/entry/${response.data.slug}`);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`
      ${session ? '' : 'hidden'}
      fixed bottom-10 right-6 bg-violet-600 text-white text-sm font-bold p-2 rounded-md`}
    >
      {edit ? 'Edit Entry' : save ? 'Save' : 'New Entry'}
    </button>
  );
};

export default EditButton;
