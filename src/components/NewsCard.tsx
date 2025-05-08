
import React from 'react';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  id: number;
  image: string;
  title: string;
  summary: string;
  date: string;
  category?: string;
}

const NewsCard = ({ id, image, title, summary, date, category }: NewsCardProps) => {
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
          <Link 
            to={`/news/article/${id}`} 
            className="text-primary hover:text-blue-700 text-sm font-medium"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
