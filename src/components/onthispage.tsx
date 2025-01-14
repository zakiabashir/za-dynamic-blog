'use client';

import React, { useEffect, useState } from 'react';

type OnThisPageProps = {
  htmlContent: string;
};

const OnThisPage: React.FC<OnThisPageProps> = ({ htmlContent }) => {
  const [headings, setHeadings] = useState<{ text: string | null; id: string }[]>([]);

  useEffect(() => {
    // Parse the HTML content and extract h2 headings
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;

    const h2Elements = tempDiv.querySelectorAll('h2');
    const h2Data = Array.from(h2Elements).map(h2 => ({
      text: h2.textContent,
      id: h2.id,
    }));

    setHeadings(h2Data);
  }, [htmlContent]);

  return (
    <div className="on-this-page bg-gray-200 dark:bg-gradient-to-br from-red-100 via-gray-500 to-teal-100 absolute top-36 md:right-28 lg:right-0/4 hidden lg:block p-4">
      <h2 className="text-md font-bold my-2">On This Page</h2>
      <ul className="text-sm space-y-1 dark:text-green-800 text-green-500">
        {headings.map((heading, index) => (
          <li
            key={index}
            className="transition duration-300 ease-in-out hover:bg-gray-200 dark:text-white hover:text-red-900 rounded-md p-1"
          >
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;
