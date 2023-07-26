import React from 'react';

const Journal = () => {
  return (
    <section>
      <h3 className="text-center text-xl capitalize mb-5">journal</h3>
      <div className="grid max-lg:grid-cols-1 lg:grid-rows-6 lg:grid-flow-col gap-32 lg:gap-32 h-[1000px] lg:h-[650px]">
        <div className="lg:row-start-1 lg:row-span-6">
          <div className="bg-secondary w-full h-full mb-2"></div>
          <p>
            Unveiling the Essence of Casa de Gauchos: A <br /> Journey into
            Garibaldi&apos;s Rich Heritage
          </p>
        </div>
        <div className="lg:row-start-2 lg:row-span-6">
          <div className="bg-secondary w-full h-full mb-2"></div>
          <p>
            Unveiling the Essence of Casa de Gauchos: A <br /> Journey into
            Garibaldi&apos;s Rich Heritage
          </p>
        </div>
      </div>
    </section>
  );
};

export default Journal;
