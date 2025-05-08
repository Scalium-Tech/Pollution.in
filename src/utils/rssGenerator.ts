
import { articles } from "../data/articles";

export const generateRssXml = () => {
  const baseUrl = window.location.origin;
  const lastBuildDate = new Date().toUTCString();
  
  // Header information
  let xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>India Pollution Monitor - Latest News</title>
  <link>${baseUrl}</link>
  <description>Latest news and updates about pollution in India</description>
  <language>en-us</language>
  <lastBuildDate>${lastBuildDate}</lastBuildDate>
  <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
`;

  // Add each article as an item
  articles.forEach((article) => {
    const pubDate = new Date(article.date).toUTCString();
    const articleUrl = `${baseUrl}/news/article/${article.id}`;
    
    // Convert article content array to HTML content
    const contentHtml = article.content.map(paragraph => `<p>${paragraph}</p>`).join('');
    
    xml += `
  <item>
    <title>${escapeXml(article.title)}</title>
    <link>${articleUrl}</link>
    <guid>${articleUrl}</guid>
    <pubDate>${pubDate}</pubDate>
    <category>${escapeXml(article.category || "News")}</category>
    <description>${escapeXml(article.summary)}</description>
    <content:encoded><![CDATA[
      <img src="${article.imageUrl}" alt="${escapeXml(article.title)}" />
      ${contentHtml}
    ]]></content:encoded>
  </item>`;
  });

  // Close tags
  xml += `
</channel>
</rss>`;

  return xml;
};

// Helper function to escape XML special characters
const escapeXml = (text: string): string => {
  if (!text) return '';
  
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};
