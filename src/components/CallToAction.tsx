
import React from 'react';
import { Link } from 'react-router-dom';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CallToAction = ({ title, description, buttonText, buttonLink }: CallToActionProps) => {
  return (
    <div className="py-20 bg-primary text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">{description}</p>
        <Link 
          to={buttonLink} 
          className="py-3 px-8 rounded-lg text-lg font-semibold bg-white text-primary hover:bg-gray-100 shadow-xl transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
