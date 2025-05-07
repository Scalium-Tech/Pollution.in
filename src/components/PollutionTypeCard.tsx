
import React from 'react';
import { Link } from 'react-router-dom';
import { Wind, Droplet, Trash2 } from 'lucide-react';

interface PollutionTypeCardProps {
  type: 'air' | 'water' | 'plastic';
  title: string;
  description: string;
  link: string;
}

const PollutionTypeCard = ({ type, title, description, link }: PollutionTypeCardProps) => {
  const getIcon = () => {
    switch (type) {
      case 'air':
        return <Wind className="w-16 h-16 mx-auto mb-5 text-primary" />;
      case 'water':
        return <Droplet className="w-16 h-16 mx-auto mb-5 text-primary" />;
      case 'plastic':
        return <Trash2 className="w-16 h-16 mx-auto mb-5 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
      {getIcon()}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
      <Link 
        to={link} 
        className="mt-auto inline-block bg-blue-100 text-primary hover:bg-blue-200 font-semibold py-2 px-4 rounded-lg text-sm transition-colors"
      >
        Learn More
      </Link>
    </div>
  );
};

export default PollutionTypeCard;
