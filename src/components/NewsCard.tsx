
import React from 'react';

interface NewsCardProps {
  image: string;
  title: string;
  summary: string;
  date: string;
  category?: string;
  link: string;
}

const NewsCard = ({ image, title, summary, date, category, link }: NewsCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow">
      <img 
        src={image} 
        alt={title}
        className="h-48 w-full object-cover"
      />
      <div className="p-6 flex-grow flex flex-col">
        {category && (
          <span className="mb-1 inline-block bg-blue-100 text-primary text-xs font-semibold px-2 py-0.5 rounded">
            {category}
          </span>
        )}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-primary flex-grow">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-3">{summary}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">{date}</span>
          <a 
            href={link} 
            className="text-primary hover:text-blue-700 text-sm font-medium"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
