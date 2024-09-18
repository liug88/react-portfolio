import project3 from "../assets/projects/project-3.jpg";
import CARPI from "../assets/projects/CARPI.png";


export const HERO_CONTENT = 
`Hi I'm Gavin Liu! 
I'm a junior in the class of 2026 majoring in Computer Science at Rensselaer Polytechnic Institute. 
When I'm not LeetCoding, you can catch me playing volleyball, eating ramen, or hanging out with friends across campus.
 I love learning more about computer science and am always looking for new opportunities to grow my skills.`;

export const ABOUT_TEXT = 
`I was born in Pittsburgh, but I currently live in Apple Valley California, which is 1/3 of the way between Los Angeles and Las Vegas. 
I'm half Taiwanese and Hong Kongese, and I'm fluent in English and  conversational in Mandarin.
I have worked with a variety of technologies, including React, Next.js, MongoDB, Python, and Java. 
My CS Journey began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. 
I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. 
Outside of coding, I enjoy playing sports such as volleyball and basketball, playing video games, and listening to a wide variey of music.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - September 2024",
    role: "Summer Digital Intern",
    company: "IssacGroup Healthcare",
    description: `Developed and maintained a database of customers, as well as improving the main company website a combination of React.js, Next.js and MongoDB. Integrated with MongoDB databases, and collaborated with co-workers to define project requirements and timelines.`,
    technologies: ["React.js", "Next.js", "MongoDB"],
  },
  {
    year: "May 2023 - August 2023",
    role: "Summer Intern",
    company: "Rabbit Air",
    description: `Leveraged Google Cloud's VertexAI to drive predictive insights for product performance, optimizing our strategies. Additionally, streamlined operations by utilizing Shopify for tasks ranging from blog updates to customer data management. Maintained product data with continuous updates on Google Merchant, and further enhanced data management by developing a Python program using the Shopify API to gather and store customer information efficiently into a csv file`,
    technologies: ["Python", "Shopify", "VertexAI", "PostmanAPI"],
  },
  {
    year: "July 2021 - August 2021",
    role: "Summer Intern",
    company: "Bytes and Bots",
    description: `Utilized HTML and Heroku to design an administrative console with the existing internal database to incorporate the existing faculty and student information.`,
    technologies: ["HTML", "Heroku"],
  },
];

export const PROJECTS = [
  {
    title: "CARPI Bot",
    image: CARPI,
    description:
      "Developed CARPI Bot (Cool Academic RPI Bot) using the Python Discord Library to create an open source Discord bot to enhance RPI Student QoL through moderation shortcuts, text-based calculators, and quick access to the RPI Academic Calendar. Utilized a stack consisting of Python, discord.py, and Beautiful Soup 4",
    technologies: ["Python", "discord.py", "Beautiful Soup 4"],
  },
  {
    title: "Resume Website",
    image: project3,
    description:
      "A personal resume website showcasing my various projects, skills, work experience, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  }
];

export const CONTACT = {
  address: "2150 12th Street, Troy, NY 12180 ",
  phoneNo: "626-365-3783 ",
  email: "gavinliu368@gmail.com",
};
