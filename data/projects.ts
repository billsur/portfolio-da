export const projects = [
  {
    id: "ibm-telco-churn-2025",
    category: "Python, Machine Learning, Tableau, Pandas, SQL, Data Analysis",
    project_type: "Data Analytics & Machine Learning",
    name: "IBM Telco Customer Churn Analysis",
    img: "/work/ibm-telco-1.png",
    linkToPage: "",
    linkToSrc: "",
    linkToSlide: "https://drive.google.com/file/d/1I6uq3MnXfg0bUMzThtnL8R0ytKFMyo35/view?usp=sharing",
    linkToDashboard: "https://public.tableau.com/app/profile/billy.surya2726/viz/IBM-TelcoCustomerChurn/Dashboard1",
    description: `
      <div class="space-y-8">
        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">📊 Business Overview</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">This project is in the telecommunications industry, focusing on IBM Telco. This industry has a lot of competition, and keeping customers is very important. High customer turnover, or churn, is a big issue that affects our business and profits.</p>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">🎯 Business Problem</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">IBM Telco has a churn rate of <strong class="font-semibold">27%</strong>, which means a lot of customers are leaving. This is costing the company about <strong class="font-semibold">$3.6 million</strong>. We need to solve this problem by reducing the churn rate to below <strong class="font-semibold">17% by the second quarter of 2026</strong>.</p>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">📊 Analysis Objectives</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">The goals of this analysis are to find out why customers are leaving, study their behavior, and come up with practical ideas to keep them. This means looking closely at what makes customers unhappy and creating solutions that help them stay with us.</p>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">📁 Dataset & Scope</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">We used the IBM Telco customer dataset, which has <strong class="font-semibold">over 7,000 customer records</strong>. This dataset includes information about customers' ages, contracts, and billing details. Our main focus is to identify what predicts customer churn and create helpful recommendations to retain them.</p>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">🔍 Root Cause Analysis – Chosen Metrics</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">We identified key metrics, such as <strong class="font-semibold">Churn Rate and Contract Type</strong>, that help us understand the churn problem. These metrics are important because they show us which groups are most likely to leave. For example, we found that most customers who left had no-commitment contracts, which means they are more likely to switch to other providers.</p>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">⚙️ Methodology</h3>
          <div class="space-y-6">
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-main">Problem Analysis</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">We found the churn problem by analyzing customer data, which showed that 27% are at risk of leaving. We looked at key metrics like Churn Rate and Contract Type to figure out why this is happening.</p>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-main">Data Cleaning</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">To prepare the data for analysis, we cleaned it by removing duplicates and fixing missing information. We used Python, along with its libraries, like Pandas, to make this process easier and more efficient.</p>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-main">Data Analysis</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">We used a machine learning method to forecast which customers are likely to leave, achieving a good accuracy rate of <strong class="font-semibold">94%</strong>. Python was the main tool for this analysis, allowing us to find valuable insights from the dataset.</p>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-main">Data Visualization</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">We created different visualizations, like scatter plots and bar charts, to display our findings. We used Tableau to make these visuals clear and easy to understand, helping us communicate our findings better.</p>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-main">Insights & Presentation</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">We discovered that customers without long-term contracts were the most likely to leave, which indicates a need for better offers. We shared these insights in a presentation, outlining strategies to help retain customers and improve their satisfaction.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">📈 Results & Key Insights</h3>
          <div class="space-y-4">
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Churn Rate Analysis</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">We found that <strong class="font-semibold">27% of customers were likely to leave</strong> our service. A significant reason, about <strong class="font-semibold">45%</strong>, was because they were attracted to offers from competitors. This shows we need to improve our service packages to keep customers.</p>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Customer Segmentation</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">Customers were grouped by their contract types and how long they have been with us. We discovered that <strong class="font-semibold">nearly 89% of customers who left had month-to-month contracts</strong>, meaning they are more likely to switch if they find a better deal.</p>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Service Quality Assessments</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">Customer feedback showed that <strong class="font-semibold">18% of people left because they were unhappy with the service attitude</strong>. This highlights the need for better customer service training.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">💡 Insights & Recommendations</h3>
          <div class="space-y-4">
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Improve Offers</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">We should create better service packages that provide more value to customers. This could help keep them from switching to competitors.</p>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Engagement Programs</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">Implementing loyalty programs and personalized communications can strengthen our relationship with customers, especially those with flexible contracts.</p>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Enhance Service Quality</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">Introducing training programs for our staff will help improve customer service, addressing the concerns about service attitude.</p>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Continuous Monitoring</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">We should regularly check churn rates to quickly adapt our customer retention strategies based on feedback and market changes.</p>
            </div>
          </div>
        </div>

        <div class="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-main">🎯 Business Impact</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">This analysis provides a clear roadmap to reduce customer churn from <strong class="font-semibold">27% to below 17%</strong>, potentially saving the company <strong class="font-semibold">$3.6 million in revenue</strong> and improving long-term customer retention through data-driven strategies.</p>
        </div>
      </div>
    `,
    tools: ["Python", "Pandas", "Scikit-learn", "Machine Learning", "Tableau", "SQL", "Data Cleaning", "Statistical Analysis", "A/B Testing", "Data Visualization"],
    imgs: ["/work/ibm-telco-1.png", "/work/ibm-telco-2.png", "/work/ibm-telco-3.png"]
  },
  {
    id: "revo-steam-gaming-analytics",
    category: "Python, Tableau, Excel, Data Analysis, EDA, Data Visualization",
    project_type: "Data Analytics & Machine Learning",
    name: "RevoSteam - Strategic Data Analytics",
    img: "/work/revo-steam-1.png",
    linkToPage: "",
    linkToSrc: "",
    linkToSlide: "https://drive.google.com/file/d/1LRWSMD1gOqIeVvxgwVv-5VtBvcbSi1RG/view?usp=sharing",
    linkToDashboard: "https://public.tableau.com/app/profile/billy.surya2726/viz/Revo-SteamDashboard/Dashboard1",
    description: `
      <div class="space-y-8">
        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">🎮 Business Overview</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">The project is set within the gaming industry, where the company aims to enhance its market share and profitability through strategic decisions in product development, marketing strategies, and customer engagement. The gaming sector is characterized by rapid growth and evolving consumer preferences, making data-driven insights crucial for strategic planning.</p>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">🎯 Business Problem</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">The core business problem is: <strong class="font-semibold">"How can the company utilize data analytics to improve decision-making in product development and marketing strategies to increase market share by 10% in the next year?"</strong></p>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">📊 Analysis Objectives</h3>
          <ul class="list-disc list-inside space-y-3 text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
            <li>Identify patterns and trends in user engagement and game preferences</li>
            <li>Assess the impact of discounts on sales and reviews</li>
            <li>Explore opportunities in emerging markets for targeted marketing efforts</li>
          </ul>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">📁 Dataset & Scope</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">The primary dataset utilized is called <strong class="font-semibold">"User Reviews and Game Metadata."</strong> It includes data related to user interactions, game classifications, and metadata such as ratings and sales figures. The scope of the analysis encompasses exploring user reviews, game release trends, pricing strategies, and regional engagement metrics to inform strategic decisions.</p>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">🔍 Root Cause Analysis – Chosen Metrics</h3>
          <ul class="list-disc list-inside space-y-3 text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
            <li><strong class="font-semibold">Positive Review Ratio:</strong> Measures user satisfaction and the quality of games</li>
            <li><strong class="font-semibold">Sales Growth:</strong> Reflects the effectiveness of marketing strategies and product attractiveness</li>
            <li><strong class="font-semibold">User Engagement Levels:</strong> Indicates how well games cater to user preferences</li>
          </ul>
          <p class="mt-4 text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">These metrics are important as they provide insights into customer satisfaction, potential areas for improvement, and the effectiveness of pricing and marketing initiatives.</p>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">⚙️ Methodology</h3>
          <div class="space-y-6">
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-main">Problem Analysis</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">The problem was identified through an initial exploration of sales and user engagement data, revealing inconsistent growth trends. Root cause analysis highlighted key metrics such as positive review ratios and sales growth, which guided the focus on understanding customer preferences and the effectiveness of current marketing efforts.</p>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-main">Data Cleaning</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">The cleaning process involved removing duplicates and correcting inconsistencies within the dataset. Techniques such as data validation checks were applied, and tools like Excel and Python were used to ensure data accuracy and completeness before analysis.</p>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-main">Data Analysis</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">The analytical method employed was <strong class="font-semibold">exploratory data analysis (EDA)</strong>, using Tableau to extract insights from the cleaned dataset. Techniques included regression analysis to understand the relationship between pricing strategies and user engagement.</p>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-main">Data Visualization</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">Various types of visualizations were created, including scatter plots to analyze price versus ratings and bar charts to depict genre popularity. Tableau was used for crafting these interactive visualizations, allowing stakeholders to easily interpret the findings.</p>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-main">Insights & Presentation</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">Key insights were summarized and presented in a comprehensive report, accompanied by a presentation to stakeholders. The presentation highlighted actionable recommendations based on analysis findings and facilitated discussions on strategic directions.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">📈 Results & Key Insights</h3>
          <div class="space-y-4">
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Game Genre Distribution</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">Analysis revealed that <strong class="font-semibold">Action and Casual genres dominated the market, accounting for 70% of user engagement</strong>. This indicates a strong preference among players for fast-paced games.</p>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Impact of Discounts</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">Findings showed that <strong class="font-semibold">strategic discounting (15%-30%) boosted sales significantly</strong> while maintaining high user satisfaction rates, evidenced by a stable positive review ratio during promotional periods.</p>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Regional Engagement</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">User engagement varied significantly by region, with <strong class="font-semibold">strong activity noted in smaller markets such as Andorra and Angola</strong>, highlighting areas for potential growth.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">💡 Insights & Recommendations</h3>
          <div class="space-y-4">
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Focus on Popular Genres</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">The company should prioritize development and marketing efforts on Action and Casual games to align with user preferences and enhance engagement.</p>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Implement Strategic Discounting</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">Utilize targeted discount strategies to drive sales while ensuring product quality is not compromised. This approach can attract new users while retaining existing ones.</p>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Target Emerging Markets</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">Increased marketing efforts should be focused on emerging markets identified in the analysis, such as Andorra and Angola, to leverage growing user bases and enhance overall market share.</p>
            </div>
          </div>
        </div>

        <div class="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-xl border border-purple-200 dark:border-purple-800">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-main">🎯 Business Impact</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">This analysis provides a clear strategic roadmap to <strong class="font-semibold">increase market share by 10%</strong> through data-driven decisions in game development, targeted marketing, and pricing strategies. The insights enable the company to better align with user preferences and capitalize on emerging market opportunities.</p>
        </div>
      </div>
    `,
    tools: ["Python", "Tableau", "Excel", "Exploratory Data Analysis", "Data Visualization", "Statistical Analysis"],
    imgs: ["/work/revo-steam-1.png", "/work/revo-steam-2.png", "/work/revo-steam-3.png"]
  },
  {
    id: "kompas-subscription-funnel-optimization",
    category: "Nuxt.js 2, A/B Testing, GTM, Analytics, Conversion Optimization",
    project_type: "Data-Driven Product Optimization",
    name: "Kompas.id Subscription A/B Testing",
    img: "/work/checkout-1.png",
    linkToPage: "https://www.kompas.id/berlangganan",
    linkToSrc: "",
    linkToSlide: "",
    linkToDashboard: "",
    description: `
      <div class="space-y-8">
        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">🎯 Background & Objectives</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">As a Front-End Engineer at Harian Kompas, I was tasked with tackling a critical business challenge: optimizing the digital subscription funnel to increase conversion rates. The existing landing and checkout pages were underperforming, with user drop-off at the payment stage being a significant bottleneck.</p>
          <ul class="list-disc list-inside mt-4 space-y-3 text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
            <li><strong class="font-semibold">Increase User Engagement:</strong> Make the subscription landing page more interactive and compelling to drive initial interest</li>
            <li><strong class="font-semibold">Streamline the Payment Process:</strong> Reduce friction in the checkout flow, especially for new users, to decrease cart abandonment</li>
            <li><strong class="font-semibold">Improve Conversion Rates:</strong> Use data-driven experiments (A/B testing) to validate which design and flow changes positively impacted subscription rates</li>
            <li><strong class="font-semibold">Enable Data-Driven Decisions:</strong> Implement robust tracking to understand user behavior and measure the performance of new features accurately</li>
          </ul>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">⚙️ Methodology</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed mb-4">My approach combined technical implementation with an experimental, data-focused mindset:</p>
          <div class="space-y-6">
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-main">A/B Testing Implementation</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">Designed and developed variant versions of both the landing page and the checkout page. This involved creating more interactive elements on the landing page and a simplified, promotion-driven flow on the checkout page for new users.</p>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-main">Checkout Page Optimization</h4>
              <ul class="list-disc list-inside space-y-3 text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
                <li><strong class="font-semibold">Promotional Logic:</strong> Implemented front-end logic to display targeted promotions for users without an existing subscription, particularly when the auto-renewal toggle was activated</li>
                <li><strong class="font-semibold">Payment Gateway Expansion:</strong> Integrated additional third-party payment methods provided by the back-end team, giving users more choice and reducing payment friction</li>
                <li><strong class="font-semibold">Process Streamlining:</strong> Redesigned the UI to reduce the number of steps and cognitive load required to complete a subscription</li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-main">Data Tracking & Instrumentation</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed mb-3">Strategically implemented and configured Google Tag Manager (GTM) across both pages. This tracked key user interactions, including:</p>
              <ul class="list-disc list-inside space-y-3 text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
                <li>Clicks on promotional banners and subscription buttons</li>
                <li>Engagement with the auto-renewal toggle</li>
                <li>Selection of different payment methods</li>
                <li>Successful subscription completions and fall-off points</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">📈 Results & Key Insights</h3>
          <div class="space-y-4">
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Landing Page Performance</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">The new interactive variant showed a <strong class="font-semibold">significant increase in user session duration and click-through rates</strong> to the checkout page, indicating higher engagement.</p>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Checkout Conversion Lift</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">The optimized checkout page, with its streamlined process and targeted promotions, led to a <strong class="font-semibold">substantial reduction in customer churn from 12.95% to 3.5% between April and September 2025.</strong>.</p>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Payment Method Diversity</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">The addition of new payment options captured a segment of users who previously abandoned their purchase due to a lack of their preferred method.</p>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Data Quality</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">The GTM implementation provided the product and analytics teams with high-quality, reliable data on user behavior, moving decisions from assumption-based to evidence-based.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">💡 Recommendations & Impact</h3>
          <div class="space-y-4">
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Bridging the Gap</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">My role ensured that the data collected was accurate and meaningful from the start, preventing the "garbage in, garbage out" problem and building a foundation of trust in the analytics.</p>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">End-to-End Ownership</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">I took ownership from the UI implementation and A/B test setup through to the data instrumentation, providing a unique, full-stack perspective on the conversion funnel.</p>
            </div>
            
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Cultural Shift</h4>
              <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">The success of this data-driven approach helped foster a culture of experimentation within the TPD (Tech, Product, and Data) team, where hypotheses are validated with live user data rather than intuition alone.</p>
            </div>
          </div>
        </div>

        <div class="p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 rounded-xl border border-green-200 dark:border-green-800">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-main">🚀 Business Impact</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">This project demonstrated the power of combining technical skill with analytical thinking, directly contributing to improved subscription rates and establishing a data-driven decision-making culture within the organization. The <strong class="font-semibold">reduction in customer churn from 17% to 3.5%</strong> represented significant revenue preservation and growth for Kompas.id.</p>
        </div>
      </div>
    `,
    tools: ["Google Tag Manager", "Front-End Engineering", "Nuxt.js", "Vuex", "Jest", "Tailwindcss"],
    imgs: ["/work/subs-1.png", "/work/subs-2.png", "/work/subs-3.png","/work/checkout-1.png", "/work/checkout-2.png", "/work/checkout-3.png"]
  }
];