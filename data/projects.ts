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
      <div class="space-y-10">
        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white font-main mb-4">📊 Telco Customer Churn Prediction Project</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
            This project focuses on analyzing customer data from a telecommunications company to identify key factors contributing to customer churn and build a predictive model to identify at-risk customers.
          </p>
        </div>

        <hr class="border-gray-300 dark:border-gray-700" />

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white font-main mb-4">🧩 Project Process Overview</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
            The project followed a structured approach:
          </p>
          <ol class="list-decimal pl-6 space-y-2 text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
            <li><strong>Data Preparation & Cleaning</strong>: Loading the dataset, handling missing values, and addressing outliers.</li>
            <li><strong>Feature Engineering</strong>: Creating new features to enhance the predictive power of the model.</li>
            <li><strong>Exploratory Data Analysis (EDA)</strong>: Analyzing data patterns, relationships, and key churn drivers with visualizations.</li>
            <li><strong>Predictive Modeling</strong>: Preparing data for modeling, handling class imbalance, training and evaluating machine learning models.</li>
            <li><strong>Business Impact Analysis</strong>: Quantifying the potential revenue savings by reducing churn based on the predictive model.</li>
          </ol>
        </div>

        <hr class="border-gray-300 dark:border-gray-700" />

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white font-main mb-4">1️⃣ Data Preparation & Cleaning</h3>

          <ul class="list-disc pl-6 space-y-3 text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
            <li><strong>Data Loading</strong>: The Telco customer data was loaded from a CSV file into a pandas DataFrame.</li>

            <li><strong>Missing Value Handling</strong>: Missing values were identified in <code>Offer</code>, <code>Internet Type</code>, <code>Churn Category</code>, and <code>Churn Reason</code>.
              <p class="mt-2">These columns contained missing information crucial for understanding customer offers, internet usage, and reasons for churn. Filling them with ‘Unknown’ allowed us to retain these records and treat ‘Unknown’ as a distinct category, avoiding data loss and potential bias from removing rows with missing data.</p>
            </li>

            <li><strong>Duplicate Check</strong>: The dataset was checked for duplicate rows to ensure data integrity. No duplicates were found.</li>

            <li><strong>Outlier Identification & Treatment</strong>: Outliers in numerical columns were identified using the IQR method.
              <ul class="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Columns with outliers</strong>: <em>Number of Dependents, Population, Number of Referrals, Avg Monthly GB Download, Total Refunds, Total Extra Data Charges, Total Long Distance Charges, Total Revenue, and Satisfaction Score</em>.</li>
                <li><strong>Treatment</strong>: Outliers in <em>Total Refunds, Total Extra Data Charges</em>, and <em>Number of Referrals</em> were capped using IQR to mitigate their potential impact.</li>
                <li><strong>Reasoning</strong>: For financial and behavioral metrics, capping reduced distortion from extreme values. Other valid customer segments (like high-revenue users) were retained to avoid bias. Satisfaction Score (1–5) outliers were valid and left unchanged.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white font-main mb-4">2️⃣ Feature Engineering</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
            New features were created to improve model interpretability and predictive performance:
          </p>
          <ul class="list-disc pl-6 space-y-3 text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
            <li><code class="font-bold">isChurn</code> : Binary column derived from ‘Churn Label’ (Yes=1, No=0). Required for model training.</li>
            <li><code class="font-bold">AgeGroup</code> : Categorized ‘Age’ into ‘Youth’, ‘Adult’, and ‘Senior’ to reveal age-related churn trends.</li>
            <li><code class="font-bold">ChargeTier</code> : Categorized ‘Monthly Charge’ into ‘Bronze’, ‘Silver’, and ‘Gold’ tiers to analyze spending patterns.</li>
            <li><code class="font-bold">TenureGroup</code> : Grouped ‘Tenure in Months’ into ‘New’, ‘Established’, and ‘Loyal’ to assess churn over customer lifecycle.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white font-main mb-4">3️⃣ Exploratory Data Analysis (EDA)</h3>
          <ul class="list-disc pl-6 space-y-3 text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
            <li><strong>Churn Distribution</strong>: 26.5% of customers churned, showing class imbalance.</li>
            <li><strong>Demographics</strong>: Senior citizens and older age groups showed higher churn.</li>
            <li><strong>Contract Type</strong>: Month-to-month customers churned significantly more than long-term ones.</li>
            <li><strong>Tenure</strong>: Newer customers with shorter tenure had higher churn rates.</li>
            <li><strong>Monthly Charges</strong>: Higher monthly charges correlated with higher churn.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white font-main mb-4">4️⃣ Predictive Modeling</h3>

          <ul class="list-disc pl-6 space-y-3 text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
            <li><strong>Data Preparation</strong>: Removed leakage-prone columns (e.g., Customer Status, Churn Score). Applied one-hot encoding and split dataset (70/30) with stratification.</li>
            <li><strong>Handling Imbalanced Data</strong>: Used BorderlineSMOTE for oversampling to balance churn vs non-churn records.</li>
            <li><strong>Model Training</strong>: Trained three classifiers — Random Forest, Logistic Regression (with scaling), and XGBoost.</li>
            <li><strong>Evaluation Metrics</strong>: Measured Accuracy, Precision, Recall, and F1-score.
              <ul class="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Accuracy</strong> : Overall correctness.</li>
                <li><strong>Precision</strong> : Minimizes false positives — prevents wrongly flagging loyal customers as churners.</li>
                <li><strong>Recall</strong> : Identifies true churners — crucial for early retention actions.</li>
                <li><strong>F1-score</strong> : Balances precision & recall, essential for imbalanced datasets.</li>
              </ul>
            </li>
            <li><strong>Best Model</strong>: XGBoost achieved the highest overall performance (~94% accuracy).</li>
            <li><strong>Feature Importance</strong>: Key predictors were Satisfaction Score, Contract Type, Tenure, and Internet Service.</li>
          </ul>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white font-main mb-4">5️⃣ Business Impact Analysis</h3>
          <ul class="list-disc pl-6 space-y-3 text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
            <li>Simulated churn reduction to <strong>17%</strong> target and calculated revenue impact.</li>
            <li>Estimated potential revenue savings from retaining churned customers.</li>
            <li>Demonstrated how predictive insights translate into financial value through churn reduction.</li>
          </ul>
        </div>

        <hr class="border-gray-300 dark:border-gray-700" />

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white font-main mb-4">✅ Conclusion & Recommendations</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
            The project successfully identified major churn drivers — contract type, tenure, internet service, and satisfaction score and built an accurate predictive model to guide retention strategies.
          </p>
          <ul class="list-disc pl-6 mt-4 space-y-3 text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
            <li><strong>Target Month-to-Month Customers</strong>: Provide incentives to shift them to long-term contracts.</li>
            <li><strong>Focus on New Customers</strong>: Introduce onboarding and engagement programs early.</li>
            <li><strong>Promote Value-Added Services</strong>: Encourage add-ons like Online Security & Tech Support.</li>
          </ul>
        </div>

        <div class="border-t border-gray-900 dark:border-gray-400"></div>

        <div class="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white font-main mb-3">🎯 Business Outcome</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
            By leveraging the churn prediction model and data-driven insights, IBM Telco can implement focused retention campaigns to reduce churn from <strong>27%</strong> to under <strong>17%</strong>. 
            This reduction is projected to save approximately <strong>$3.6 million in annual revenue</strong> while improving customer satisfaction and long-term loyalty.
          </p>
        </div>

      </div>
    `,

    tools: ["Python", "Pandas", "Scikit-learn", "Machine Learning", "Tableau", "SQL", "Data Cleaning", "Statistical Analysis", "A/B Testing", "Data Visualization"],
    imgs: ["/work/ibm-telco-1.png", "/work/ibm-telco-2.png", "/work/ibm-telco-3.png"]
  },
  {
    id: "revo-steam-gaming-analytics",
    category: "Python, Tableau, Excel, Data Analysis, EDA, Data Visualization",
    project_type: "Data Analytics & Business Intelligence",
    name: "RevoSteam - Strategic Data Analytics",
    img: "/work/revo-steam-1.png",
    linkToPage: "",
    linkToSrc: "",
    linkToSlide: "https://drive.google.com/file/d/1LRWSMD1gOqIeVvxgwVv-5VtBvcbSi1RG/view?usp=sharing",
    linkToDashboard: "https://public.tableau.com/app/profile/billy.surya2726/viz/Revo-SteamDashboard/Dashboard1",
    description: `
      <div class="space-y-10">
        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">🎮 Project Overview</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
            This project focuses on developing a strategic analytics dashboard for the Steam gaming platform. The analysis helps 
            gaming companies make informed decisions in product development, marketing, and player engagement. 
            Using <strong>Python, Tableau, and Excel</strong>, the goal was to uncover trends in genre popularity, global engagement, 
            pricing strategies, and platform coverage to guide business growth and profitability.
          </p>
        </div>

        <div class="border-t border-gray-900 dark:border-gray-400"></div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">🧩 Project Process Overview</h3>
          <ol class="list-decimal pl-6 space-y-3 text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
            <li><strong>Data Preparation & Joining Logic</strong> – Cleaned and validated data, establishing relationships across multiple datasets.</li>
            <li><strong>Exploratory Data Analysis (EDA)</strong> – Discovered insights on platform coverage, genre trends, and review sentiment.</li>
            <li><strong>Visualization Development</strong> – Built an interactive Tableau dashboard to highlight performance metrics.</li>
            <li><strong>Insight Extraction</strong> – Analyzed pricing, discount impact, and regional engagement.</li>
            <li><strong>Business Recommendations</strong> – Proposed data-driven actions for market expansion and improved retention.</li>
          </ol>
        </div>

        <div class="border-t border-gray-900 dark:border-gray-400"></div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">📁 Data Preparation & Joining Logic</h3>
          <ul class="list-disc pl-6 space-y-3 text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
            <li><strong>Data Sources:</strong> <em>User</em>, <em>Games</em>, <em>MetaData</em>, and <em>Recommendation</em> tables.</li>
            <li><strong>Relationships:</strong> 
              <ul class="list-disc pl-6 mt-2">
                <li><class="font-bold">app_id</code> – Links Games, Recommendations, and MetaData to combine reviews with classification.</li>
                <li><class="font-bold">user_id</code> – Connects Recommendations to Users for personalized review analysis.</li>
              </ul>
            </li>
            <li><strong>Join Type :</strong> Logical Relationships – Keeps data modular and prevents duplication.</li>
            <li><strong>Data Type Adjustments :</strong> Converted IDs to strings and <code>positive_ratio</code> to float for decimal precision.</li>
          </ul>
        </div>

        <div class="border-t border-gray-900 dark:border-gray-400"></div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">📊 Exploratory Data Analysis (EDA)</h3>
          <ul class="list-disc pl-6 space-y-3 text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
            <li><strong>Total Games:</strong> 4,983 titles in dataset.</li>
            <li><strong>Average Rating:</strong> Mostly Positive – indicates strong user satisfaction.</li>
            <li><strong>Platform Support:</strong>
              <ul class="list-disc pl-6 mt-2">
                <li>Windows – 98.5%</li>
                <li>Steam Deck – 100%</li>
                <li>Mac – 18.8%</li>
                <li>Linux – 13.2%</li>
              </ul>
              <p class="mt-2">💡 Windows dominates the market, while Mac and Linux have limited coverage.</p>
            </li>

            <li><strong>Genre Distribution:</strong> Action (415), Casual (222), Adventure (212), Simulation (151), Strategy (134).
              <p class="mt-2">💡 The Steam catalog heavily favors Action and Casual genres, aligning with broad player appeal.</p>
            </li>

            <li><strong>Discount Impact:</strong> 
              <p>Moderate discounts (15–30%) correlate with the highest positive reviews (~86%), while deeper discounts 
              (>45%) slightly lower reviews (~77–81%) but still maintain high satisfaction.</p>
              <p>💡 Price reductions enhance engagement without harming perceived quality.</p>
            </li>

            <li><strong>Regional Engagement:</strong> Small markets like <em>Andorra</em> (70 reviews), <em>Angola</em>, and <em>UAE</em> show 
            high activity despite smaller populations, ideal for targeted marketing expansion.</li>

            <li><strong>Price vs. Review Sentiment:</strong> Games under $40 receive high ratings across price levels. 
            💡 Indicates price does not strongly affect user satisfaction.</li>

            <li><strong>Rating vs. Engagement:</strong> Positive and Very Positive games drive the highest engagement, confirming 
            quality as the main retention driver.</li>
          </ul>
        </div>

        <div class="border-t border-gray-900 dark:border-gray-400"></div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">💡 Insights & Recommendations</h3>
          <div class="space-y-4 text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Focus on Top Genres</h4>
              <p>Concentrate development and marketing on <strong>Action</strong> and <strong>Casual</strong> titles to maximize engagement while exploring <strong>Simulation</strong> and <strong>Strategy</strong> for niche growth.</p>
            </div>

            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Strategic Discounting</h4>
              <p>Maintain discounts between <strong>15–30%</strong> to boost sales while retaining player satisfaction and brand integrity.</p>
            </div>

            <div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Regional Targeting</h4>
              <p>Increase marketing efforts in smaller, high-engagement markets such as <strong>Andorra, Angola, and UAE</strong> to capitalize on untapped growth potential.</p>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-900 dark:border-gray-400"></div>

        <div class="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-xl border border-purple-200 dark:border-purple-800">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-main">🎯 Business Impact</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
            The RevoSteam analysis empowers executives and analysts with actionable insights for data-driven decisions in 
            game development and marketing. Implementing these strategies could lead to a <strong>10% increase in market share</strong>, 
            optimized pricing models, and stronger global brand presence across both established and emerging markets.
          </p>
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
        <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
          As part of the Front-End Engineering team at Harian Kompas, this project focused on optimizing the digital subscription funnel to improve conversion rates. 
          The existing landing and checkout pages had high user drop-off, particularly at the payment stage. 
          The initiative centered on implementing redesigned UX layouts and integrating tracking systems to better measure user behavior and funnel performance.
        </p>
        <ul class="list-disc list-inside mt-4 space-y-3 text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
          <li><strong class="font-semibold">Increase User Engagement:</strong> Enhance the landing page with interactive and visually engaging elements to drive stronger initial interest.</li>
          <li><strong class="font-semibold">Streamline the Payment Process:</strong> Reduce friction in the checkout flow to minimize cart abandonment, particularly for new users.</li>
          <li><strong class="font-semibold">Improve Conversion Rates:</strong> Apply A/B testing to validate which design and flow optimizations most effectively increase subscriptions.</li>
          <li><strong class="font-semibold">Enable Data-Driven Decisions:</strong> Establish comprehensive tracking to understand user behavior and accurately measure feature performance.</li>
        </ul>
      </div>

      <div class="border-t border-gray-900 dark:border-gray-400"></div>

      <div>
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">⚙️ Methodology</h3>
        <div class="space-y-6">

          <div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-main">A/B Testing Implementation</h4>
            <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
              Multiple variants of the landing and checkout pages were designed and implemented, featuring more interactive components and simplified user flows. 
              These experiments tested how visual emphasis, promotional elements, and layout changes influenced engagement and conversion.
            </p>
          </div>

          <div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-main">Checkout Page Optimization</h4>
            <ul class="list-disc list-inside space-y-3 text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
              <li><strong class="font-semibold">Promotional Logic:</strong> Developed dynamic front-end logic to surface targeted promotions for non-subscribers, especially when the auto-renewal toggle was activated.</li>
              <li><strong class="font-semibold">Payment Gateway Expansion:</strong> Integrated new third-party payment providers to offer users more flexibility and reduce payment-related drop-offs.</li>
              <li><strong class="font-semibold">Process Streamlining:</strong> Simplified the UI and minimized steps required to complete a subscription, reducing cognitive load and decision friction.</li>
            </ul>
          </div>

          <div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-main">Data Tracking & Instrumentation</h4>
            <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed mb-3">
              Configured and implemented Google Tag Manager (GTM) to monitor key interactions across both the landing and checkout pages. 
              The tracking setup captured essential user actions, including:
            </p>
            <ul class="list-disc list-inside space-y-3 text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
              <li>Clicks on promotional banners and subscription buttons</li>
              <li>Engagement with the auto-renewal toggle</li>
              <li>Selection of payment methods</li>
              <li>Subscription completions and drop-off points</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-900 dark:border-gray-400"></div>

      <div>
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">📈 Results & Key Insights</h3>
        <div class="space-y-4">

          <div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Landing Page Performance</h4>
            <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
              The redesigned, interactive landing page variant demonstrated a <strong class="font-semibold">notable increase in user session duration and click-through rates</strong> 
              to the checkout page, reflecting higher engagement and stronger user intent.
            </p>
          </div>

          <div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Checkout Conversion Lift</h4>
            <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
              The optimized checkout page—with streamlined steps, improved UI, and targeted promotions—contributed to a 
              <strong class="font-semibold">reduction in customer churn from 12.95% to 3.5% between April and September 2025</strong>, 
              representing a substantial improvement in conversion performance.
            </p>
          </div>

          <div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Payment Method Diversity</h4>
            <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
              Expanding payment gateway options captured additional user segments that previously abandoned their transactions 
              due to limited payment choices.
            </p>
          </div>

          <div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Data Quality Improvement</h4>
            <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
              The GTM setup provided high-fidelity behavioral data for product and analytics teams, 
              enabling data-driven decision-making and reducing reliance on assumptions.
            </p>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-900 dark:border-gray-400"></div>

      <div>
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-main">💡 Recommendations & Impact</h3>
        <div class="space-y-4">

          <div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Data Reliability</h4>
            <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
              The instrumentation ensured accurate, actionable data collection from the outset, 
              forming a reliable foundation for subsequent analysis and optimization efforts.
            </p>
          </div>

          <div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Collaborative Ownership</h4>
            <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
              The project established a clear cross-functional workflow between design, engineering, and analytics teams— 
              from UX implementation and A/B testing setup to post-launch data validation—enabling holistic conversion optimization.
            </p>
          </div>

          <div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-main">Culture of Experimentation</h4>
            <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
              The success of this initiative fostered a data-driven culture within the TPD (Tech, Product, and Data) division, 
              encouraging teams to validate hypotheses through experimentation rather than assumption.
            </p>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-900 dark:border-gray-400"></div>

      <div class="p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 rounded-xl border border-green-200 dark:border-green-800">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-main">🚀 Business Impact</h3>
        <p class="text-lg text-gray-700 dark:text-gray-300 font-main leading-relaxed">
          This project demonstrated the tangible benefits of combining UX implementation, experimentation, and analytics instrumentation. 
          It directly contributed to higher subscription conversions and established a sustainable, data-driven decision-making framework 
          within the organization. The <strong class="font-semibold">churn reduction from 17% to 3.5%</strong> represented significant revenue preservation and measurable business growth for Kompas.id.
        </p>
      </div>
    </div>
    `,
    tools: ["Google Tag Manager", "Mixpanel", "Figma", "Git", "Nuxt.js", "HTML", "Javascript", "Jest", "Tailwindcss"],
    imgs: ["/work/subs-1.png", "/work/subs-2.png", "/work/subs-3.png","/work/checkout-1.png", "/work/checkout-2.png", "/work/checkout-3.png"]
  }
];