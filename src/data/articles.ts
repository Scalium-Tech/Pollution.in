
export interface Article {
  id: number;
  title: string;
  date: string;
  summary: string;
  content: string[];
  category?: string;
  imageUrl: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "National Pollution Control Strategy 2030 Unveiled by Government",
    date: "May 7, 2025",
    summary: "The Indian government has unveiled an ambitious decade-long strategy to combat all forms of pollution.",
    content: [
      "The Indian government has unveiled an ambitious decade-long strategy to combat all forms of pollution. The comprehensive plan aims to reduce air pollution by 40%, improve water quality in all major rivers to bathing quality, and achieve 100% plastic waste management by 2030.",
      "The strategy outlines specific targets for each state, allocation of ₹75,000 crores over the next five years, and introduces stricter penalties for violations of environmental norms. Environmental experts have welcomed the move while emphasizing the need for strict implementation.",
      "\"This is a watershed moment for environmental protection in India,\" said Dr. Rajendra Kumar, Director of the National Environmental Research Institute. \"The targets are ambitious but achievable if there is proper coordination between central and state authorities.\"",
      "The plan introduces a new 'polluter pays' taxation system that will fund environmental remediation projects. Industries will be categorized based on their pollution footprint, with higher taxes for those with larger environmental impacts.",
      "Additionally, the strategy includes provisions for creating green corridors in urban areas, mandatory rainwater harvesting for all new constructions, and incentives for industries that adopt zero-discharge technologies.",
      "Public participation is a key component of the strategy, with plans to create citizen monitoring committees in every district and integrate environmental education more deeply into school curricula."
    ],
    category: "Breaking News",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "New Air Quality Standards Announced by Environment Ministry",
    date: "May 5, 2025",
    summary: "The Ministry of Environment, Forest and Climate Change has announced revised air quality standards for Indian cities, reducing permissible limits for particulate matter and other pollutants.",
    content: [
      "The Ministry of Environment, Forest and Climate Change has announced revised air quality standards for Indian cities, reducing permissible limits for particulate matter and other pollutants by up to 30% from previous levels.",
      "The new standards, which will come into effect from October 2025, lower the acceptable limits for PM2.5, PM10, sulfur dioxide, and nitrogen dioxide across all urban areas. The standards are particularly stringent for metropolitan cities with populations above 10 million.",
      "\"These revised standards align with WHO guidelines and reflect our commitment to ensuring clean air for all citizens,\" said the Environment Minister at a press conference in New Delhi. The announcement comes after a two-year study that analyzed health impacts of various pollutants across different demographic groups.",
      "City municipalities will now be required to submit quarterly compliance reports, and non-compliant cities could face funding restrictions for urban development projects. The ministry has also announced a ₹5,000 crore fund to help cities transition to the new standards through infrastructure upgrades and monitoring systems.",
      "Health experts have welcomed the move, with the Indian Medical Association noting that the stricter standards could potentially prevent thousands of premature deaths annually from respiratory and cardiovascular diseases linked to air pollution."
    ],
    category: "Policy Update",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Study Shows 30% Reduction in Plastic Waste in Coastal Areas After Ban",
    date: "May 2, 2025",
    summary: "A recent study by the National Institute of Oceanography reveals significant decrease in plastic waste along India's coastline following the single-use plastic ban implementation.",
    content: [
      "A recent study by the National Institute of Oceanography reveals a significant 30% decrease in plastic waste along India's coastline following the nationwide single-use plastic ban implementation last year.",
      "The comprehensive study, which surveyed 43 coastal locations across 9 states, found considerable improvements in beach cleanliness and reduced microplastics in nearshore waters. The most significant reductions were observed in tourist destinations that had implemented strict enforcement measures.",
      "\"This is the first quantitative evidence that policy interventions like plastic bans can have measurable positive impacts on marine ecosystems in a relatively short timeframe,\" said Dr. Meena Sharma, lead author of the study. The research team used both traditional sampling methods and innovative drone surveillance to quantify plastic waste volumes.",
      "The study also highlighted ongoing challenges, noting that certain types of plastic waste, particularly fishing gear and food packaging, remain problematic. Researchers recommend targeted interventions for these specific waste streams, including fishing net recycling programs and alternative packaging incentives.",
      "Local coastal communities have reported improvements in tourism and fishing since the ban took effect. \"Our beaches are cleaner, and we're seeing the return of certain marine species that had become rare in recent years,\" said Rajan Patel, head of a fishing cooperative in Gujarat.",
      "The study's findings will be presented at the upcoming International Marine Conservation Congress and will inform the next phase of India's plastic pollution reduction strategy."
    ],
    category: "Research",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Major Rivers Show Improved Water Quality During Post-Monsoon Assessment",
    date: "April 28, 2025",
    summary: "The Central Pollution Control Board's latest water quality assessment indicates improvement in dissolved oxygen levels and reduction in biological contaminants in several major rivers.",
    content: [
      "The Central Pollution Control Board's latest post-monsoon water quality assessment indicates significant improvement in dissolved oxygen levels and reduction in biological contaminants in several major rivers across India.",
      "The annual assessment, which monitors 351 river stretches, found that 58 previously critically polluted stretches have shown improvements in key water quality parameters. The Yamuna, Ganga, and Godavari rivers all showed better water quality indicators compared to the previous year.",
      "\"The improvement can be attributed to the completion of 126 new sewage treatment plants in the past 18 months and stricter industrial effluent regulations,\" explained CPCB Chairperson Dr. Kavita Nair. The report specifically highlights a 40% increase in dissolved oxygen levels in certain stretches of the Yamuna river passing through Delhi.",
      "Biological oxygen demand (BOD), a key indicator of organic pollution, has decreased by an average of 22% across all monitored rivers. Additionally, fecal coliform counts have reduced significantly in rivers where new sewage infrastructure has been commissioned.",
      "However, the report also identifies 73 river stretches that continue to show deteriorating water quality, primarily due to untreated sewage from smaller cities and agricultural runoff. The CPCB has recommended targeted interventions for these areas, including decentralized waste treatment facilities and stricter enforcement of existing regulations.",
      "Water quality improvements have already had positive impacts on local ecosystems, with increases in fish populations reported in several rehabilitated river stretches."
    ],
    category: "Water Quality",
    imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "New Citizen Science Initiative Launched to Monitor Local Air Quality",
    date: "April 25, 2025",
    summary: "A collaborative project between government agencies and NGOs will distribute low-cost air quality monitors to citizens across 50 cities to enhance pollution data collection.",
    content: [
      "A collaborative project between government agencies and NGOs will distribute 10,000 low-cost air quality monitors to citizens across 50 cities to enhance pollution data collection and create hyperlocal air quality maps.",
      "The 'Clean Air Network' initiative, launched by the Ministry of Environment in partnership with the Indian Institute of Technology Delhi and several environmental NGOs, aims to supplement official monitoring stations with citizen-collected data. Participants will receive calibrated PM2.5 and PM10 sensors that connect to a smartphone app.",
      "\"Traditional monitoring networks have limitations in spatial coverage. With citizen participation, we can identify pollution hotspots at a much finer scale and take targeted actions,\" said Prof. Raman Krishnan of IIT Delhi, the technical advisor for the project.",
      "The initiative will focus particularly on tier-2 and tier-3 cities that currently have limited air quality monitoring infrastructure. Schools and colleges are being encouraged to participate, with educational modules developed to help students understand air pollution science.",
      "Data collected through the network will be publicly available through an online dashboard and will help inform local pollution control measures. The project also includes a public awareness component, with regular community workshops on air pollution causes and mitigation strategies.",
      "Similar citizen science projects in countries like South Korea and Poland have successfully identified previously unknown pollution sources and led to effective local interventions."
    ],
    category: "Citizen Science",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Supreme Court Directs States to Submit Action Plans on Industrial Pollution",
    date: "April 20, 2025",
    summary: "In a landmark judgment, the Supreme Court has directed all state governments to submit comprehensive action plans to curb industrial pollution within 60 days.",
    content: [
      "In a landmark judgment, the Supreme Court has directed all state governments to submit comprehensive action plans to curb industrial pollution within 60 days, setting a new precedent for environmental accountability.",
      "The directive came in response to a public interest litigation filed by environmental groups concerning critically polluted industrial clusters across the country. The court expressed concern over the continued deterioration of air and water quality in these areas despite existing regulations.",
      "\"The right to clean air and water is a fundamental right derived from Article 21 of the Constitution. State governments cannot abdicate their responsibility to protect this right,\" the bench headed by the Chief Justice stated in its ruling.",
      "The court has mandated that action plans must include timelines for implementing clean technologies, strengthening monitoring networks, and establishing health surveillance systems in affected communities. Additionally, states must create special enforcement cells to ensure industrial compliance with environmental norms.",
      "Legal experts consider this judgment significant as it sets clear timelines and accountability mechanisms. \"This ruling moves beyond general directions to specific, time-bound actions with oversight mechanisms,\" explained environmental law specialist Aditya Narayan.",
      "Industries in critically polluted clusters will now face more frequent inspections, with the court directing pollution control boards to increase their monitoring capacity within three months."
    ],
    category: "Legal",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    title: "International Conference on Climate Change Adaptation to be Hosted in New Delhi",
    date: "April 15, 2025",
    summary: "India will host a major international conference focusing on climate change adaptation strategies for developing countries next month.",
    content: [
      "India will host a major international conference focusing on climate change adaptation strategies for developing countries next month, bringing together policymakers, scientists, and practitioners from over 70 nations.",
      "The 'Global South Climate Resilience Summit' will be held in New Delhi from May 20-23, 2025, and will emphasize practical adaptation measures for countries most vulnerable to climate change impacts. The conference is being organized by the Ministry of Environment, Forest and Climate Change in collaboration with the United Nations Environment Programme.",
      "\"As developing countries face disproportionate impacts from climate change, this summit aims to facilitate knowledge exchange and collaborative solutions for building resilience,\" said Environment Minister Prakash Javadekar during the press briefing.",
      "Key themes of the conference include climate-resilient agriculture, coastal zone management, disaster risk reduction, and climate finance for adaptation projects. A special focus will be placed on indigenous knowledge systems that can contribute to sustainable adaptation strategies.",
      "The summit will also feature a ministerial roundtable and is expected to result in the 'Delhi Declaration on Climate Resilience,' which will outline common adaptation priorities and cooperation mechanisms for Global South countries.",
      "In conjunction with the conference, there will be a technology exhibition showcasing innovative adaptation solutions from startups and established technology providers."
    ],
    category: "Event",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
  }
];

export const getArticleById = (id: number): Article | undefined => {
  return articles.find(article => article.id === id);
};

export const getFeaturedArticle = (): Article | undefined => {
  return articles.find(article => article.featured);
};

export const getRelatedArticles = (id: number, count: number = 3): Article[] => {
  return articles
    .filter(article => article.id !== id)
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
};
