import {
    mobile,
    _intern_img,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    cplus,
    python,
    bootstrap,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
 
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    github,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Coding Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "C++",
      icon: cplus,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "BootStrap",
      icon: bootstrap,
    },
    {
      name: "Python",
      icon: python,
    },
    
  ];
  
  const experiences = [
    {
      title: "Software Development Engineer Intern",
      company_name: " Central Ground Water Board",
      icon: _intern_img,
      iconBg: "#383E56",
      date: "July 2023 - December 2023",
      points: [
        "Designed a website to showcase isotopic data points, bolstering the company’s platform with a visualization tool.",
        "Conducted research to decipher the meaning behind the data, aiming for more informed data visualization.",
        "Employed a secure, searchable database with PHP and SQL for authenticated organization members.",
        " Developed a user-friendly interface with ReactJS and BootStrap for comprehension of isotopic data analysis.",
        "Utilized Leaflet.js and JavaScript Plotly for precise data plotting, aiding CGWB scientists to understanding diverse data across India."
      ],
    },
    {
      title: "Software Development Engineer Intern",
      company_name: "Blu Oceans",
      icon: _intern_img,
      iconBg: "#E6DEDD",
      date: "June 2023- July 2023",
      points: [
        "Developed and deployed the ”Glameura” website on AWS and implemented a search feature based on the product.",
        "Implemented a secure payment feature, allowing users to save payment information for future use.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Enabled recurring payments, and seamless integration with other payment processing systems for user flexibility.",
      ],
    },
    
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "FrensMedia",
      description:
        " Devised a backend of a web app offering user connections, and follow/unfollow functionality for a dynamic user experience.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "RestApi",
          color: "pink-text-gradient",
        },
      ],
      image: github,
      source_code_link: "https://github.com/",
    },
    {
      name: "Movie Recommendor",
      description:
        "Created a movie recommendation system with Scikit-learn’s Cosine similarity and Count Vectorization.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Scikit-learn",
          color: "green-text-gradient",
        },
        
      ],
      image: github,
      source_code_link: "https://github.com/",
    },
    {
      name: "AquaInsight",
      description:
        " Led a winning team in the national-level Smart India Hackathon 2022.Engineered a dynamic and searchable database using MySQL and PHP technologies. Seamlessly integrated Tableau into the interface for dynamic data representation.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "BootStrap",
          color: "green-text-gradient",
        },
        {
          name: "PHP",
          color: "pink-text-gradient",
        },
      ],
      image: github,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };