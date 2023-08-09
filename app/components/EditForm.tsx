'use client';

import { EntryContext } from '@/context/EntryContext';
import { useContext, useEffect, useState } from 'react';

interface EditFormProps {
  title: string;
  subtitle: string;
  content: string;
  date: string;
}

const EditForm = ({ title, subtitle, content, date }: EditFormProps) => {
  const [loading, setLoading] = useState(false);
  const {
    title: title2,
    setTitle,
    subtitle: subtitle2,
    setSubtitle,
    content: content2,
    setContent,
    setDate,
  } = useContext(EntryContext);

  useEffect(() => {
    const getContent = async () => {
      setLoading(true);
      setTitle(title);
      setSubtitle(subtitle);
      setContent(content);
      setDate(date);
      setLoading(false);
    };

    getContent();

    return () => {
      setTitle('');
      setSubtitle('');
      setContent('');
      setDate('');
    };
  }, [
    setTitle,
    setSubtitle,
    setContent,
    setDate,
    title,
    subtitle,
    content,
    date,
  ]);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <form className="grid grid-cols-1 gap-4 w-full">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={title2}
            onChange={e => setTitle(e.target.value)}
            className="border-2 border-black p-4 rounded-md block w-full"
          />

          <label htmlFor="subtitle">Subtitle</label>
          <input
            type="text"
            value={subtitle2}
            onChange={e => setSubtitle(e.target.value)}
            className="border-2 border-black p-4 rounded-md block w-full"
          />

          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            id="content"
            cols={30}
            rows={10}
            value={content2}
            onChange={e => setContent(e.target.value)}
            className="border-2 border-black p-4 rounded-md block w-full"
          />

          <label htmlFor="date">Date</label>
          <input
            type="text"
            value={date}
            onChange={e => setDate(e.target.value)}
            className="border-2 border-black p-4 rounded-md block w-full"
          />
        </form>
      )}
    </>
  );
};

export default EditForm;
