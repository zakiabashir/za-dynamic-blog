"use client"
import React, { useEffect, useState } from 'react';

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Parse the HTML content and extract h2 headings
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const h2Elements = tempDiv.querySelectorAll('h2');
    const h2Data = Array.from(h2Elements).map(h2 => ({
      text: h2.textContent,
      id: h2.id
    }));
    setHeadings(h2Data);
  }, [htmlContent]);

  return (
    <div className="on-this-page absolute top-24 md:right-48 lg:right-0/4 hidden lg:block">
      <h2 className="text-md font-bold my-2">On This Page</h2>
      <ul className="text-sm space-y-1 dark:text-green-300 text-green-900">
        {headings.map((heading, index) => (
          <li
            key={index}
            className="transition duration-300 ease-in-out hover:bg-gray-200 hover:text-red-900 rounded-md p-1"
          >
            <a  href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;