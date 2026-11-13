/* ==========================================================================
   Project data: single source of truth for the gallery, filters and dialogs.

   HOW TO UPDATE
   - Add or edit an object below; the site renders it automatically.
   - images: [{ src, alt }]  → add files under assets/img/ and list them here.
     Leave `images` empty ([]) to show a type-led placeholder tile (set `icon` to pick its glyph).
   - filters: any of "power-platform", "ai", "bi", "python", "web", "business"
   - featured: true  → shown in the Featured section (appears in the gallery
     only as a compact card when a filter is active)
   - status: optional label such as "Ongoing"
   ========================================================================== */

window.FILTERS = [
  { key: "all", label: "All Projects" },
  { key: "power-platform", label: "Power Platform" },
  { key: "ai", label: "AI & Automation" },
  { key: "bi", label: "Power BI & Analytics" },
  { key: "python", label: "Python" },
  { key: "web", label: "Web Development" },
  { key: "business", label: "Business Solutions" }
];

window.GROUPS = {
  A: "Business Applications & Workflow Automation",
  B: "Business Intelligence & Data Analytics",
  C: "Web Development & UI/UX Design",
  D: "Business Digitalisation & Applied Technology"
};

const CONFIDENTIAL_NOTE = "Enterprise project: internal screenshots and data are not published.";

window.PROJECTS = [
  /* ---------------------------- FEATURED ---------------------------- */
  {
    id: "novacart",
    featured: true,
    title: "NovaCart Sales & Returns Analytics Dashboard",
    category: "Business Intelligence",
    filters: ["bi"],
    tech: ["Power BI", "Data Modelling", "DAX", "Power Query"],
    summary: "Multi-page Power BI dashboard analysing sales and returns across products, customers, geography, promotions and channels.",
    repo: "https://github.com/ramyauday-12/NovaCart-PowerBI-Analytics",
    images: [
      { src: "assets/img/novacart/executive-overview.webp", alt: "NovaCart Executive Overview page", caption: "Executive Sales & Business Performance", w: 1364, h: 769 },
      { src: "assets/img/novacart/product-profitability.webp", alt: "NovaCart Product and Profitability page", caption: "Product Performance & Profitability", w: 1366, h: 768 },
      { src: "assets/img/novacart/customer-regional.webp", alt: "NovaCart Customer and Regional page", caption: "Customer & Regional Insights", w: 1366, h: 773 },
      { src: "assets/img/novacart/promotions-operations.webp", alt: "NovaCart Promotions and Operations page", caption: "Promotions, Returns & Operations", w: 1365, h: 771 },
      { src: "assets/img/novacart/product-detail.webp", alt: "NovaCart product detail drill-through page", caption: "Product detail (drill-through)", w: 1362, h: 769 }
    ],
    overview: "An end-to-end business intelligence project analysing e-commerce sales and profitability over a two-year period (January 2024 to December 2025). Transactional data is turned into interactive report pages covering business performance, product profitability, customer behaviour, regions, promotions and operations.",
    purpose: "To let a business stakeholder monitor KPIs, understand which products, customers and regions drive results, evaluate promotions and discounts, and investigate returns, delivery performance and cancellations.",
    contribution: "Developed the multi-page Power BI dashboard, built the dimensional data model with sales and returns fact tables and supporting dimensions, and created the interactive KPI reporting and business performance analysis.",
    approach: [
      "Prepared the dataset in Excel and cleaned and transformed it with Power Query.",
      "Modelled the data as a star schema: FactSales and FactReturns with DimDate, DimProduct, DimCustomer, DimGeography, DimPromotion and DimChannel.",
      "Wrote DAX measures for KPIs such as net sales, contribution profit, contribution margin, return rate and repeat customer rate.",
      "Designed four report pages plus a product drill-through page, with slicers for year, quarter, channel, category, region and customer segment."
    ],
    features: [
      "Executive overview: KPI cards, monthly net sales vs contribution profit, channel split, margin by category",
      "Product profitability: category comparison, subcategory scatter plot, top 10 and bottom 10 products",
      "Customer and regional insights: segments, age groups, repeat purchase behaviour, region, state and city views",
      "Promotions and operations: discount impact, promotion performance, return reasons, delivery time, cancellations",
      "Drill-through from product tables to a single-product detail page"
    ],
    note: "KPIs and insights are from the project's own dataset (January 2024 to December 2025)."
  },
  {
    id: "approval-app",
    icon: "workflow",
    featured: true,
    title: "Business Investment & Staffing Request Approval Application",
    category: "Business Application Development",
    filters: ["power-platform", "business"],
    tech: ["Power Apps", "Power Automate", "SharePoint", "Dataverse", "Excel"],
    summary: "Approval workflow system for staffing and business investment requests, with automated notifications and request tracking.",
    images: [],
    overview: "An approval workflow application for staffing and business investment requests, covering request submission, multi-stakeholder approvals, notifications and tracking.",
    purpose: "To provide a structured, trackable approval process for staffing and investment requests involving PMs, DMs, ADH, COD and BFM stakeholders.",
    contribution: "Developed the approval workflow system and automated approvals, notifications and request tracking. Connected Power Apps, SharePoint and Dataverse as data sources, and designed the structured data models and automated data flows that support Power BI reporting and stakeholder KPI dashboards.",
    approach: [
      "Power Apps for the request and tracking interface.",
      "Power Automate for approvals, notifications and status updates.",
      "SharePoint and Dataverse as data sources, with Excel supporting data handling.",
      "Structured data models and automated data flows feeding Power BI reports and KPI dashboards."
    ],
    features: [
      "Staffing and business investment request submission and tracking",
      "Automated approval routing and notifications across stakeholder roles",
      "Structured data model supporting stakeholder KPI dashboards"
    ],
    note: CONFIDENTIAL_NOTE
  },
  {
    id: "workforce-assistant",
    icon: "spark",
    featured: true,
    title: "Agentic AI Workforce Assistant",
    category: "AI & Intelligent Automation",
    filters: ["ai", "power-platform"],
    tech: ["Microsoft Copilot Studio", "Power Automate", "Dataverse", "SharePoint", "Excel"],
    summary: "AI-powered assistant for workforce support, information retrieval and workflow automation across multiple enterprise data sources.",
    images: [],
    overview: "An AI-powered assistant built for workforce support, information retrieval and workflow automation. It connects several structured enterprise data sources so people can ask for information and operational help conversationally.",
    purpose: "To make operational knowledge, candidate information and task status easier to access and act on.",
    contribution: "Built the assistant and integrated SharePoint, Dataverse, Excel and Power Automate workflows, connecting multiple structured enterprise data sources to support information retrieval and operational assistance.",
    approach: [
      "Conversational agent built in Microsoft Copilot Studio.",
      "SharePoint, Dataverse and Excel as structured knowledge and data sources.",
      "Power Automate workflows to carry out actions behind the conversation.",
      "Delivered as three capabilities of the same implementation: operations knowledge, recruitment support and task management."
    ],
    features: [
      "AI Operations Knowledge Assistant: operational guidelines, workflows and business knowledge (Copilot Studio, SharePoint, Dataverse)",
      "AI Recruitment Assistant: candidate information retrieval and hiring support (Copilot Studio, Dataverse)",
      "AI Task Management Assistant: task tracking, reminders and status monitoring (Copilot Studio, Power Automate)"
    ],
    note: CONFIDENTIAL_NOTE
  },
  {
    id: "resume-analyzer",
    featured: true,
    title: "AI Resume Analyzer",
    category: "Python & AI",
    filters: ["python", "ai"],
    tech: ["Python", "Streamlit", "NLP", "scikit-learn"],
    summary: "Self-initiated Streamlit app that compares a resume with a job description, finds missing skills and suggests improvements.",
    repo: "https://github.com/ramyauday-12/AI-Resume-Analyzer",
    images: [
      { src: "assets/img/resume-analyzer/home.webp", alt: "AI Resume Analyzer home screen", caption: "Home", w: 1400, h: 607 },
      { src: "assets/img/resume-analyzer/analysis.webp", alt: "AI Resume Analyzer match percentage, similarity and score chart", caption: "Resume analysis", w: 1400, h: 593 },
      { src: "assets/img/resume-analyzer/skills.webp", alt: "AI Resume Analyzer matched and missing skills", caption: "Matched and missing skills", w: 1400, h: 603 },
      { src: "assets/img/resume-analyzer/suggestions.webp", alt: "AI Resume Analyzer improvement suggestions", caption: "Suggestions", w: 1400, h: 596 }
    ],
    overview: "A self-initiated, proof-of-concept application that analyses a resume against a job description. It reports an ATS-style skill match percentage, a text similarity score, the skills that are missing, and suggestions for improvement.",
    purpose: "To give candidates a quick, transparent view of how well a resume lines up with a job description and what to work on.",
    contribution: "Independently designed and built the application end to end: PDF text extraction, skill detection and comparison, similarity scoring, visualisation and a downloadable report.",
    approach: [
      "Resume text is extracted from an uploaded PDF using PyPDF2.",
      "Skills are detected in both the resume and the job description by matching against a predefined skill list (currently 13 skills; extending it is on the roadmap).",
      "Match percentage = matched skills ÷ skills in the job description.",
      "Resume-to-job-description similarity is calculated with TF-IDF vectors and cosine similarity (scikit-learn).",
      "Results are shown in Streamlit with progress bars and a Matplotlib chart, and can be downloaded as a text report."
    ],
    features: [
      "Resume PDF upload and text extraction",
      "Skill match percentage and NLP-based similarity score",
      "Matched skills, missing skills and improvement suggestions",
      "Score visualisation and downloadable analysis report (.txt)"
    ],
    note: "Proof of concept. Skill detection is keyword-based and intentionally simple."
  },

  /* ------------------ GROUP A: APPLICATIONS & WORKFLOWS ------------------ */
  {
    id: "monday-boards",
    icon: "workflow",
    group: "A",
    title: "Project Management & Workflow Automation Boards",
    category: "Workflow Automation",
    filters: ["business"],
    tech: ["Monday.com"],
    summary: "Project boards for staffing and business investment workflows, with automations for assignments, status updates and reminders.",
    images: [],
    overview: "Project management boards structured around staffing and business investment workflows, with automation to keep work moving.",
    purpose: "To automate project management and task tracking so that assignments, statuses, deadlines and stakeholder updates are handled consistently.",
    contribution: "Created and structured the boards and built the automation flows for task assignments, status updates, deadline reminders and stakeholder notifications.",
    approach: [
      "Structured boards around staffing and business investment workflows.",
      "Configured automations for assignments, status changes, reminders and notifications."
    ],
    features: [
      "Task assignment automation",
      "Status update automation",
      "Deadline reminders",
      "Stakeholder notifications"
    ],
    note: CONFIDENTIAL_NOTE
  },
  {
    id: "leave-app",
    icon: "calendar",
    group: "A",
    title: "Leave Request Approval App",
    category: "Business Application",
    filters: ["power-platform", "business"],
    tech: ["Power Apps", "Power Automate", "SharePoint"],
    summary: "End-to-end automated leave management system streamlining leave requests and approvals.",
    images: [],
    overview: "An automated leave management system that takes a leave request from submission through approval.",
    purpose: "To streamline leave requests and approval workflows.",
    contribution: "Developed the application and its automated approval workflow end to end.",
    approach: [
      "Power Apps for the request interface.",
      "Power Automate for the approval flow.",
      "SharePoint as the data store."
    ],
    features: ["Leave request submission", "Automated approval workflow"],
    note: CONFIDENTIAL_NOTE
  },
  {
    id: "action-tracker",
    icon: "tasks",
    group: "A",
    title: "Action Tracker App",
    category: "Business Application",
    filters: ["power-platform", "business"],
    tech: ["Power Apps", "Power Automate", "SharePoint"],
    summary: "Centralised task monitoring with real-time updates, automated notifications and role-based visibility.",
    images: [],
    overview: "A centralised task monitoring application for managing actions across teams.",
    purpose: "To give cross-team task management one place for updates, notifications and visibility.",
    contribution: "Developed the application, including real-time updates, automated notifications and role-based visibility.",
    approach: [
      "Power Apps for the tracking interface.",
      "Power Automate for notifications.",
      "SharePoint as the data store."
    ],
    features: ["Real-time updates", "Automated notifications", "Role-based visibility for cross-team task management"],
    note: CONFIDENTIAL_NOTE
  },

  /* ------------------ GROUP B: BI & ANALYTICS ------------------ */
  {
    id: "zepto",
    icon: "chart",
    group: "B",
    title: "Zepto Sales & Delivery Dashboard",
    category: "Business Intelligence",
    filters: ["bi"],
    tech: ["Power BI", "DAX", "Power Query"],
    summary: "Self-initiated interactive dashboard analysing sales performance, delivery performance and business KPIs.",
    repo: "https://github.com/ramyauday-12/zepto-sales-delivery-dashboard",
    status: "Self-initiated",
    images: [
      { src: "assets/img/zepto/overview.webp", alt: "Zepto dashboard executive overview page", caption: "Executive overview", w: 1338, h: 758 },
      { src: "assets/img/zepto/home.webp", alt: "Zepto dashboard home and navigation page", caption: "Home page", w: 1352, h: 755 }
    ],
    overview: "A self-initiated interactive Power BI dashboard for a quick-commerce setting, covering sales, delivery performance, customers, products and cities.",
    purpose: "To monitor operational performance and support data-driven decisions in a quick-commerce environment.",
    contribution: "Built the dashboard, including KPI cards, interactive filters, dynamic metric selection and multi-page navigation.",
    approach: [
      "Data prepared in Excel and transformed with Power Query.",
      "DAX measures for KPIs and dynamic metric selection.",
      "Home, Executive Overview and About pages with slicers and navigation."
    ],
    features: [
      "KPI cards for sales, profit, orders and delivery time",
      "Sales trend, customer distribution and delivery status views",
      "Product performance and city performance summaries",
      "Interactive filters, slicers and dynamic metric selection"
    ],
    note: "Self-initiated learning project, not affiliated with Zepto and not company data."
  },
  {
    id: "company-overview",
    icon: "dashboard",
    group: "B",
    title: "Company Overview Dashboard",
    category: "Business Intelligence",
    filters: ["bi"],
    tech: ["Power BI", "DAX", "Data Visualisation"],
    summary: "Interactive Power BI dashboard showing employee, project and cost insights with dynamic filtering.",
    images: [],
    overview: "An interactive Power BI dashboard presenting employee, project and cost insights in one view.",
    purpose: "To support management decision-making with insights that can be filtered dynamically.",
    contribution: "Developed the dashboard and its dynamic filtering.",
    approach: ["Power BI report with DAX measures and visual analysis of employee, project and cost data."],
    features: ["Employee insights", "Project insights", "Cost insights", "Dynamic filtering for management decision support"],
    note: "Carried over from my earlier portfolio."
  },

  /* ------------------ GROUP C: WEB & UI/UX ------------------ */
  {
    id: "event-site",
    icon: "browser",
    group: "C",
    title: "Event Management Website",
    category: "Web Development",
    filters: ["web"],
    tech: ["HTML", "CSS", "Responsive Web Design"],
    summary: "Responsive landing page showcasing event services and registration features.",
    images: [],
    overview: "A responsive landing page for an event management service, showcasing the services offered and registration features.",
    purpose: "To give an event business a clean, modern web presence that works across screen sizes.",
    contribution: "Designed and developed the page with HTML and CSS, focusing on a clean layout and responsive behaviour.",
    approach: ["Hand-written HTML and CSS with a responsive layout."],
    features: ["Event services showcase", "Registration features", "Responsive layout"],
    note: "Carried over from my earlier portfolio."
  },
  {
    id: "smart-silos",
    icon: "mobile",
    group: "C",
    title: "Smart Silos App: UI Design",
    category: "UI/UX Design",
    filters: ["web"],
    tech: ["UX Design", "IoT UI", "Figma"],
    summary: "Interface design for monitoring silo parameters: temperature, humidity and grain volume.",
    images: [],
    overview: "A user interface design for monitoring silo parameters, with a clean, industrial-grade look.",
    purpose: "To make real-time silo conditions (temperature, humidity and grain volume) easy to read at a glance.",
    contribution: "Designed the interface in Figma.",
    approach: ["UI design in Figma focused on legibility and a clean industrial-grade interface."],
    features: ["Temperature monitoring", "Humidity monitoring", "Grain volume monitoring"],
    note: "Carried over from my earlier portfolio."
  },

  /* ------------------ GROUP D: BUSINESS DIGITALISATION ------------------ */
  {
    id: "charger-master",
    icon: "table",
    group: "D",
    title: "RS Power Systems Charger Master & Product Information System",
    category: "Product Data Management",
    filters: ["business"],
    tech: ["Microsoft Excel", "Product Data Management"],
    summary: "Structured master workbook consolidating technical and commercial information about battery chargers.",
    images: [],
    overview: "A structured master workbook that consolidates technical and commercial information about battery chargers.",
    purpose: "To make product information easier to maintain and access, supporting website content, customer enquiries and seller information.",
    contribution: "Consolidated and organised product specifications into the master workbook.",
    approach: ["Consolidated technical and commercial data into a single structured workbook.", "Organised specifications so they can support website content, enquiries and seller information."],
    features: ["Consolidated product specifications", "Structured for website content, customer enquiries and seller information", "Easier to maintain and access"],
    note: "Internal business data is not published."
  },
  {
    id: "rhino-catalogue",
    icon: "book",
    group: "D",
    title: "RHiNO Battery Charger Product Catalogue 2026",
    category: "Technical Documentation",
    filters: ["business"],
    tech: ["Product Information", "Technical Documentation", "Catalogue Design"],
    summary: "Restructured and improved product catalogue for RS Power Systems and its RHiNO battery charger range.",
    images: [],
    overview: "Work on restructuring and improving the product catalogue for RS Power Systems and its RHiNO battery charger range.",
    purpose: "To present product specifications and technical information clearly for B2B communication.",
    contribution: "Worked on the catalogue's structure, product specifications, technical information and product presentation.",
    approach: ["Restructured product information and technical content.", "Improved presentation for B2B audiences."],
    features: ["Product specifications", "Technical information", "Product presentation", "B2B communication"],
    note: "Catalogue visuals will be added once cleared for publication."
  },
  {
    id: "sales-analytics",
    icon: "trend",
    group: "D",
    title: "RS Power Systems Sales Analytics Initiative",
    category: "Business Analytics",
    filters: ["bi", "business"],
    tech: ["Excel", "Power BI", "Business Analytics"],
    status: "Ongoing",
    summary: "Exploring sales data consolidation and reporting across direct sales and online marketplace orders.",
    images: [],
    overview: "An ongoing initiative exploring how sales data from direct sales and online marketplace orders can be consolidated and reported on.",
    purpose: "To structure sales information so that product, channel, revenue and business performance can be analysed.",
    contribution: "Exploring data consolidation and structuring sales information for reporting. The dashboard is not yet complete.",
    approach: ["Consolidating sales data across direct sales and online marketplace orders in Excel.", "Structuring data for product, channel, revenue and performance analysis, with Power BI as the reporting layer."],
    features: ["Sales data consolidation", "Channel, product and revenue analysis (in progress)"],
    note: "In progress. No sales figures are shown, and no practice data is presented as company sales."
  }
];
