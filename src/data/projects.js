//Fitzonw
import fitzoneImg1 from '../assets/Fitzone/home page.png';
import fitzoneImg2 from '../assets/Fitzone/fitzone 2.png';
import fitzoneImg3 from '../assets/Fitzone/fitzone 3.png';
import fitzoneImg4 from '../assets/Fitzone/fitzone 4.png';
import fitzoneImg5 from '../assets/Fitzone/fitzone 5.png';

//AIMS
import aimsImg1 from '../assets/AIMS/home page.png';
import aimsImg2 from '../assets/AIMS/about us.png';
import aimsImg3 from '../assets/AIMS/aims database.png';
import aimsImg4 from '../assets/AIMS/dasbord.png';
import aimsImg5 from '../assets/AIMS/faqs.png';

//SPC
import spcImg1 from '../assets/SPC/dashbord.png';
import spcImg2 from '../assets/SPC/new drug.png';
import spcImg3 from '../assets/SPC/order.png';
import spcImg4 from '../assets/SPC/register new supplies.png';
import spcImg5 from '../assets/SPC/srearch.png';

const projects =[
  {
    id:1,
    images:[
      fitzoneImg1,
      fitzoneImg2,
      fitzoneImg3,
      fitzoneImg4,
      fitzoneImg5,
    ],
    title: "Fitzone Fitness Center",
    overview : "The Fitzone Fitness Center website is a modern, fully functional, and visually engaging online platform designed to promote the fitness center’s services, engage visitors, and streamline membership management. With its sleek purple-and-black color scheme, the site delivers a professional and energetic brand image. The user-friendly interface ensures easy navigation, enabling users to explore services, membership packages, class schedules, diet plans, and other resources without confusion. The Home Page serves as the first touchpoint, offering a welcoming design, highlighting key offerings, and guiding visitors to important sections such as services, classes, and contact details.",
    overview_Fontend:["HTML – Establishes the semantic structure and ensures content accessibility.",
      "CSS – Enhances visual design through precise control over layouts, colors, fonts, and animations.",
      "JavaScript – Adds dynamic interactivity, including form validation, dropdown menus, sliders, and pop-up components, improving engagement and usability.",
    ],
    overview_backend:["PHP – Handles server-side logic for processing user actions and managing sessions.",
      "MySQL (fitzonedb) – Serves as the central database to store and organize all data, including user accounts, membership details, and class schedules.",
      "Secure integration of authentication, data validation, and role-based access control (for admin features).",
    ],
    overview_Key_Features:[
      "User Authentication – Secure registration and login system with session management.",
      "Membership Plans – Detailed package descriptions, trainer info, and integrated payment functionality.",
      "Class Schedule – Interactive timetable displaying trainers, times, and studio locations.",
      "Healthy Food Section – Diet tips, meal plans, and healthy recipes.",
      "Profile Management – Displays user registration and account details.",
      "Admin Panel – Restricted to admin/super admin roles for managing and deleting user accounts.",
      "Blog Section – Fitness-related articles with full-view and external redirect options.",
      "Contact & Map – Multiple contact methods with live location integration.",
    ],
    description:"The Fitzone Fitness Center website is a modern, user-friendly platform offering services, membership plans, schedules, diet tips, and secure user management with a sleek design.",
    short_Description:"Fitzone website offers fitness services, memberships, schedules, and healthy tips.",
    tech: ["React", "Tailwind CSS", "Laravel", "MySQL"],
    github_Link: "https://github.com/Sahan-A-2003/Fitzone-Fitness-Center.git"
  },
  {
    id: 2,
    images: [
      aimsImg1,
      aimsImg2,
      aimsImg3,
      aimsImg4,
      aimsImg5,
    ],
    title: "Automated Issue Management System (AIMS)",
    overview: "The Automated Issue Management System (AIMS) is a centralized web-based platform developed to enhance the efficiency of complaint handling within multi-branch organizations. Traditional methods such as verbal communication, email threads, and handwritten logbooks often lead to delays, miscommunication, and lack of accountability, resulting in employee dissatisfaction and operational inefficiencies. AIMS addresses these challenges by providing a structured workflow that allows users to submit complaints, agents to resolve issues, and managers to oversee and approve escalations. With real-time status tracking, automated notifications, and role-based access, the system ensures transparency, accountability, and timely resolution of issues.\n\nDesigned with scalability, security, and usability in mind, AIMS integrates modern technologies to deliver a reliable solution for complaint management. The platform features user-friendly dashboards, complaint lifecycle tracking, and detailed reporting to support data-driven decision-making. By streamlining communication and automating repetitive tasks, AIMS not only reduces the time taken to resolve issues but also improves organizational productivity and employee satisfaction. This makes it a robust and future-ready system for organizations aiming to optimize internal processes and enhance overall efficiency.",
    overview_Fontend: [
      "React (Vite) – Builds a responsive and interactive user interface.",
      "Tailwind CSS – Provides modern, mobile-friendly and clean styling.",
      "JavaScript – Adds dynamic client-side functionalities.",
      "Figma – Used for intuitive UI/UX design and prototyping."
    ],
    overview_backend: [
      "Laravel (Breeze) – Manages server-side logic, APIs, and authentication.",
      "MySQL – Securely stores user data, complaints, and logs.",
      "XAMPP – Used for local server hosting during development.",
      "Cloud Hosting (planned) – Ensures scalability and availability for deployment."
    ],
    overview_Key_Features: [
      "Centralized Complaint Management – Eliminates manual and fragmented processes.",
      "Multi-Level Workflow – Structured support system with L1, L2 agents, and manager approvals.",
      "Real-Time Tracking – Provides unique ticket IDs and live complaint status.",
      "Automated Notifications – Keeps users updated via email/SMS.",
      "Role-Based Access Control – Ensures secure authorization and accountability.",
      "Dashboards & Analytics – Tracks complaint trends and staff performance.",
      "Logging & Auditing – Maintains complete records for transparency.",
      "Scalability & Flexibility – Designed for future expansion and industry adaptation."
    ],
    description: "AIMS is a web-based complaint management platform that streamlines reporting, tracking, and resolution with role-based access, real-time updates, and automated workflows for transparency and efficiency.",
    short_Description: "AIMS manages complaints with structured workflows, real-time updates, and secure role-based access.",
    tech: ["React", "Tailwind CSS", "Laravel", "MySQL"],
    github_Link: "https://github.com/Sahan-A-2003/AIMS-System.git"
  },
  {
    id: 3,
    images: [
      spcImg1,
      spcImg2,
      spcImg3,
      spcImg4,
      spcImg5,
    ],
    title: "State Pharmaceutical Corporation (SPC)",
    overview: "The State Pharmaceutical Corporation (SPC) is modernizing its pharmaceutical manufacturing, distribution, and procurement processes through a digital transformation. Traditional monolithic systems are limited by tight coupling, difficult scaling, high downtime risks, and integration challenges. By adopting a Service-Oriented Architecture (SOA), SPC divides its operations into independent, reusable services with APIs that communicate seamlessly. This approach enhances maintainability, scalability, and reliability while enabling integration with branch systems, production facilities, and external pharmacies. The system also supports future growth with modular, cloud-ready services.",
    overview_Fontend: [
      "HTML & SCSS – Build responsive, clean, and accessible user interfaces.",
      "TypeScript – Adds type safety and modern client-side functionality.",
      "Figma – Used for intuitive UI/UX design and prototyping."
    ],
    overview_backend: [
      "C# & .NET – Handles backend logic, service orchestration, and API endpoints.",
      "RESTful APIs – Facilitate communication between modular services and external systems.",
      "SQL Server – Stores data securely for inventory, orders, suppliers, and users.",
      "Docker Containers – Provides consistent deployment, scalability, and service isolation."
    ],
    overview_Key_Features: [
      "Modular Service Design – Independent services for stock management, ordering, and supplier registration.",
      "API-Driven Integration – Allows seamless connection with branch systems and external pharmacies.",
      "Scalable Architecture – Services can be scaled individually to handle high demand.",
      "Fault Isolation – Failures in one service do not affect others.",
      "Future Expansion Ready – Easily add new services such as real-time drug tracking.",
      "Secure Data Handling – Each service maintains its own secure database.",
      "Cross-System Compatibility – Works with production systems, branches, and web platforms.",
      "Efficient Deployment – Docker containers allow quick deployment and consistent environments."
    ],
    description: "SPC's SOA system modernizes pharmaceutical operations by splitting workflows into independent, API-driven services. It ensures scalability, reliability, secure data handling, and easy integration with internal and external systems.",
    short_Description: "SPC SOA system modularizes pharma operations with scalable, API-driven services.",
    tech: ["C#", ".NET", "HTML", "SCSS", "TypeScript", "SQL Server"],
    github_Link: "https://github.com/Sahan-A-2003/SPC-State-Pharmaceutical-Corporation-.git"
  }


];

export default projects;

