
import React, { useEffect } from 'react';
import { generateRssXml } from '../utils/rssGenerator';
import { useNavigate } from 'react-router-dom';

const RssFeed = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Generate RSS XML
    const rssXml = generateRssXml();
    
    // Create a blob with the XML content
    const blob = new Blob([rssXml], { type: 'application/rss+xml' });
    const url = URL.createObjectURL(blob);
    
    // Open the XML in a new tab
    window.open(url);
    
    // Navigate back to news page
    navigate('/news');
    
    // Clean up the URL object when the component unmounts
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [navigate]);
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Generating RSS Feed...</h1>
        <p>If your feed doesn't open automatically, please check your popup blocker settings.</p>
      </div>
    </div>
  );
};

export default RssFeed;
