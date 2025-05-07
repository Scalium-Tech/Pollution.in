
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-12">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
          <p className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</p>
          <p className="text-gray-600 mb-8">
            We couldn't find the page you were looking for. The page may have been moved, deleted, or never existed.
          </p>
          <div className="space-y-4">
            <Link 
              to="/" 
              className="block w-full sm:w-auto sm:inline-block bg-primary text-white hover:bg-blue-700 font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Return to Home
            </Link>
            <Link 
              to="/about" 
              className="block w-full sm:w-auto sm:inline-block bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-colors sm:ml-4 mt-3 sm:mt-0"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
