
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
import { articles, getFeaturedArticle } from '../data/articles';
import { RssIcon } from 'lucide-react';

const News = () => {
  const featuredArticle = getFeaturedArticle();
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Environmental News</h1>
              <Link 
                to="/rss" 
                title="Subscribe to RSS Feed"
                className="text-orange-500 hover:text-orange-600"
                aria-label="RSS Feed"
              >
                <RssIcon size={24} />
              </Link>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest news, research findings, and policy developments related to pollution and environmental conservation in India.
            </p>
          </div>
          
          {/* Featured News */}
          {featuredArticle && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredArticle.imageUrl} 
                    alt="Featured news" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-primary bg-opacity-10 text-primary text-xs font-medium px-2.5 py-1 rounded">{featuredArticle.category}</span>
                    <span className="text-gray-500 text-sm ml-2">{featuredArticle.date}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{featuredArticle.title}</h2>
                  <p className="text-gray-600 mb-6">
                    {featuredArticle.content[0]}
                  </p>
                  <p className="text-gray-600 mb-6">
                    {featuredArticle.content[1]}
                  </p>
                  <Link 
                    to={`/news/article/${featuredArticle.id}`} 
                    className="bg-primary text-white font-medium px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors inline-block"
                  >
                    Read Full Story
                  </Link>
                </div>
              </div>
            </div>
          )}
          
          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {regularArticles.map((article) => (
              <NewsCard
                key={article.id}
                id={article.id}
                image={article.imageUrl}
                title={article.title}
                summary={article.summary}
                date={article.date}
                category={article.category}
              />
            ))}
          </div>
          
          {/* Newsletter Signup */}
          <div className="bg-primary bg-opacity-10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get the latest environmental news, research findings, and policy updates delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-white font-medium px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default News;
