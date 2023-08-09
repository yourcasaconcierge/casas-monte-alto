import EditForm from '@/app/components/EditForm';
import EditButton from '@/app/components/button/EditButton';
import getEntryContent from '@/utils/getEntryContent';

const page = (props: any) => {
  const entryContent = getEntryContent(props.params.slug);
  const { data, content } = entryContent;
  const { title, subtitle, date } = data;

  return (
    <main className="my-32 layout ">
      <EditForm
        title={title}
        subtitle={subtitle}
        content={content}
        date={date}
      />
      <EditButton />
    </main>
  );
};

export default page;
