import {
  ucseal,
  lcs,
  openai,
  unity,
  lego
} from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiDotnet,
  SiOpenai,
  SiMicrosoftazure,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiAssemblyscript,
  SiDiscord,
  SiUnity
} from "react-icons/si";

import {
  TbBrandCSharp,
  TbSql,
  TbLego
} from "react-icons/tb";

import {
  FaAws
} from "react-icons/fa";


import { DiCss3, DiSqllite } from "react-icons/di";

// export const resumeLink = "src/pdfs/EthanSkowronskiResume.pdf";
export const repoLink = "https://github.com/ethanski22/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/ethan-skowronski/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  // {
  //   id: "achievements",
  //   title: "Achievements",
  // },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "openSource",
  //   title: "Open Source",
  // },
  // {
  //   id: "extraCurricular",
  //   title: "Extra Curricular",
  // },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: ucseal,
    title: "University of Cincinnati, Cincinnati, OH",
    degree: "Bachelor of Science",
    duration: "August 2022 - May 2027",
    content1: "Major: Computer Science",
    content2: "Accepted into the ACCEND program, a 5-year program that allows students to earn a Bachelor's and Master's degree in 5 years.",
    content3: "GPA: 3.52"
  }
];

// Add your past achievements here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: SiUnity,
    event: "ETHIndia'24 | India's Largest Ethereum Hackathon",
    position: "Winner",
    content1: "True Network's Winner, Polkadot's 1st Runner Up",
    content2: "Lit Protocol's 2nd Runner Up",
    content3: "Coinbase Pool Prize, Base Top 10",
    article: "",
    project: "",
    youtube: "",
  }
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: TbBrandCSharp,
        name: "C#",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-4",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-5",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-6",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-7",
        icon: TbSql,
        name: "SQL",
      },
      {
        id: "pl-8",
        icon: SiAssemblyscript,
        name: "Assembly",
      }
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiDotnet,
        name: ".NET",
      },
      {
        id: "f-2",
        icon: SiPandas,
        name: "Pandas",
      },
      {
        id: "f-3",
        icon: SiNumpy,
        name: "NumPy",
      },
      {
        id: "f-4",
        icon: SiScikitlearn,
        name: "Scikit-learn",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Matplotlib", // Need a icon for
      },
      {
        id: "f-6",
        icon: SiTensorflow,
        name: "TensorFlow",
      },
      {
        id: "f-7",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-8",
        icon: SiGraphql,
        name: "GraphQL",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMicrosoftazure,
        name: "Azure",
      },
      {
        id: "t-2",
        icon: DiSqllite,
        name: "SQLite",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-8",
        icon: SiOpenai,
        name: "OpenAI API",
      },
      {
        id: "t-9",
        icon: FaAws,
        name: "AWS",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "London Computer Systems, Cincinnati, OH",
    logo: lcs,
    link: "https://www.lcs.com",
    positions: [
      {
        title: "Quality Assurance Co-op",
        duration: "Jan 2025 - Present",
        content: [
          {
            text: "Collaborated with developers to test and validate 5+ new features monthly, ensuring seamless functionality and optimal performance across platforms",
            link: "",
          },
          {
            text: "Identified, documented, and tracked software defects using Jira, reducing critical bugs by 25% and improving overall product stability",
            link: "",
          },
          {
            text: "Executed test cases and analyzed results to enhance software reliability",
            link: "",
          },
          {
            text: "Outperformed team benchmarks by executing 15+ test cases per week, identifying 25% more defects than the average tester, leading to improved software quality",
            link: "",
          },
          {
            text: "Actively contributed to agile development by participating in daily stand-ups, sprint retrospectives, and weekly planning meetings, ensuring stable product deployments",
            link: "",
          },
          {
            text: "Tools: Jira, C#, HTML, CSS, TypeScript, GitLab, Kubernetes, VSCode, Insomnia, Rancher, HeidiSQL",
            link: "",
          }
        ]
      }
    ]
  }
]; 

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "OpenAI API",
    github: "https://github.com/ethanski22/AI-and-Python",
    link: "https://github.com/ethanski22/AI-and-Python",
    image: openai,
    content:
      "Utilize OpenAI's API for various integrations",
    stack: [
      {
        id: "icon-1",
        icon: SiOpenai,
        name: "OpenAI"
      },
      {
        id: "icon-2",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-3",
        icon: TbBrandCSharp,
        name: "C#"
      },
      {
        id: "icon-4",
        icon: SiDiscord,
        name: "Discord"
      },
    ],
  },
  {
    id: "project-2",
    title: "Deck Builder Game",
    github: "https://github.com/ethanski22/firstDeckBuilder",
    link: "https://github.com/ethanski22/firstDeckBuilder",
    image: unity,
    content:
      "My first deck builder using Unity",
    stack: [
      {
        id: "icon-1",
        icon: TbBrandCSharp,
        name: "C#"
      },
      {
        id: "icon-2",
        icon: SiUnity,
        name: "Unity"
      },
    ],
  },
  {
    id: "project-3",
    title: "Engineering Design Project",
    image: lego,
    content:
      "Engineering Design Thinking, project 4, team 028, design a robot to traverse a factory and collect/identify objects",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiVisualstudiocode,
        name: "Visual Studio Code"
      },
      {
        id: "icon-3",
        icon: TbLego,
        name: "Lego EV3 Dev Kit"
      },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  }
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "0",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "0",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "0",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "",
    content: [
      {
        text: "",
        link: "",
      },
      {
        text: "",
        link: "",
      },
    ],
    logo: SiUnity,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/ethan-skowronski/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/ethanski22",
  }
];

// Your professional summary
export const aboutMe = {
    name: "Ethan Skowronski",
    githubUsername: 'ethanski22',
    tagLine: "Third Year Student at UC | Machine Learning | Python | C#",
    intro: "I am a third year student at the University of Cincinnati studying Computer Science. Recently I was accepted into the ACCEND program where I'll be able to complete my masters in Artificial Intelligence at the same time as my undergrad degree."
}

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format. 
export const includedRepos = [];
