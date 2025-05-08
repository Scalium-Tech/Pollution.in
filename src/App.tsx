
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AirPollution from "./pages/AirPollution";
import WaterPollution from "./pages/WaterPollution";
import PlasticPollution from "./pages/PlasticPollution";
import OtherPollution from "./pages/OtherPollution";
import DataInsights from "./pages/DataInsights";
import LawsPolicies from "./pages/LawsPolicies";
import News from "./pages/News";
import ArticlePage from "./pages/ArticlePage";
import Resources from "./pages/Resources";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import RssFeed from "./pages/RssFeed";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/air-pollution" element={<AirPollution />} />
          <Route path="/water-pollution" element={<WaterPollution />} />
          <Route path="/plastic-pollution" element={<PlasticPollution />} />
          <Route path="/other-pollution" element={<OtherPollution />} />
          <Route path="/data-insights" element={<DataInsights />} />
          <Route path="/laws-policies" element={<LawsPolicies />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/article/:id" element={<ArticlePage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/rss" element={<RssFeed />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
