import Image from "next/image";
import React from "react";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src="/documents.png"
            fill
            className="object-contain"
            alt="documents dark:hidden"
          />
          <Image
            src="/documents-dark.png"
            fill
            className="object-contain  hidden dark:block"
            alt="documents"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            className="object-contain dark:hidden"
            alt="reading"
            fill
            src="/reading.png"
          />
          <Image
            className="object-contain hidden dark:block"
            alt="reading"
            fill
            src="/reading-dark.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
