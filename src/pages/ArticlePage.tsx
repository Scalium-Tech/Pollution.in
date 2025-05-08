
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getArticleById, getRelatedArticles } from '../data/articles';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
import { ArrowLeft } from 'lucide-react';

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const articleId = parseInt(id || '0');
  const article = getArticleById(articleId);
  const relatedArticles = getRelatedArticles(articleId, 3);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/news" 
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Return to News
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-primary hover:text-blue-700 mb-6"
          >
            <ArrowLeft size={16} className="mr-1" />
            <span>Back to News</span>
          </button>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center mb-3">
              {article.category && (
                <span className="bg-blue-100 text-primary text-xs font-semibold px-2 py-1 rounded">
                  {article.category}
                </span>
              )}
              <span className="text-gray-500 text-sm ml-2">{article.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
          </div>

          {/* Feature Image */}
          <div className="mb-8">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-80 md:h-96 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {article.content.map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>
            ))}
          </div>

          {/* Share and Tags */}
          <div className="flex justify-between items-center border-t border-gray-200 pt-6 mb-12">
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 font-medium">Share:</span>
              <button className="text-gray-500 hover:text-primary">Twitter</button>
              <button className="text-gray-500 hover:text-primary">Facebook</button>
              <button className="text-gray-500 hover:text-primary">LinkedIn</button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map(relatedArticle => (
                <NewsCard
                  key={relatedArticle.id}
                  id={relatedArticle.id}
                  image={relatedArticle.imageUrl}
                  title={relatedArticle.title}
                  summary={relatedArticle.summary}
                  date={relatedArticle.date}
                  category={relatedArticle.category}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ArticlePage;
