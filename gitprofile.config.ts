// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'kietran', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Experience',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: '**Smart Security System - VNTT**',
          description:
            'Developed and deployed a large-scale, real-time AI traffic monitoring system for 6 major industrial zones. Managed the full project lifecycle, from model development and production optimization to on-site hardware calibration.',
          imageUrl:
            '',
          link: '',
          details: {
            overview: 'Developed and deployed a large-scale, real-time AI traffic monitoring system for 6 major industrial zones. Managed the full project lifecycle, from model development and production optimization to on-site hardware calibration.',
            contributions: [
              '**Scaled System Performance:** Optimized the end-to-end inference pipeline (CPU/GPU) to successfully process and analyze **130 concurrent camera** streams in real-time.',
              '**Developed & Deployed Models:** Built models for vehicle classification, counting, and real-time violation detection (wrong-way, lane-violation). Quantized models and deployed them using TensorRT for high-throughput, low-latency inference on edge devices.',
              '**Built ML Ops Pipelines:** Implemented a self-labeling pipeline to autonomously gather new data, enabling continuous model improvement and accuracy in a production environment.',
              '**Full-Stack Integration:** Handled on-site camera installation and calibration to ensure high LPR (License Plate Recognition) accuracy, and integrated AI overlays (vehicle type, plate) into low-latency HLS live streams.',
            ],
            techStack: [
              'Python', 'PyTorch', 'TensorRT', 'YOLO11', 'OpenCV', 'HLS', 'FFmpeg', 'Docker', 'Kafka', 'PostgreSQL', 'MQTT', 'FastAPI', 'MongoDB'
            ],
            images: [
              'https://media.licdn.com/dms/image/v2/D562DAQHyuJPBaJ4eWg/profile-treasury-image-shrink_1280_1280/B56Za_QgZTGkAQ-/0/1746965499972?e=1765015200&v=beta&t=_NBuBCc0BQEYlDJ29BmMHaTNKh0EIA9U0OyNoY31mfw',
              'https://media.licdn.com/dms/image/v2/D562DAQHODfDYmi4RQA/profile-treasury-image-shrink_1280_1280/B56Za_ISbaHUAQ-/0/1746963344280?e=1765015200&v=beta&t=BL6OiCUT3cvguzaTQ-wlTWLp72CtnSjpX8cS3drs5Fk',
              'https://media.licdn.com/dms/image/v2/D562DAQG35RMvRZP35g/profile-treasury-image-shrink_1280_1280/B56Za_IaC0GkAQ-/0/1746963375450?e=1765015200&v=beta&t=XnpilHG-2ZhnmBu7oMYbnAPq0C5piKFd1R5VOC1cBjo',
              'https://media.licdn.com/dms/image/v2/D562DAQEi6GO-KT5gfA/profile-treasury-image-shrink_1280_1280/B56Zpt_ue6JkAU-/0/1762782014401?e=1765015200&v=beta&t=aU8Ty-PKv4hC3gOulVmWn1AdkXiousUciFdQ5FuZvJ0',
              'https://media.licdn.com/dms/image/v2/D562DAQFJq_DH7VwxBw/profile-treasury-image-shrink_8192_8192/B56Zpt_ue7KEAg-/0/1762782014257?e=1765015200&v=beta&t=9X5xprLF8xjQingAPsZStn80955bKOHVf6E6vVFr5JY'
            ],
            videos: ['https://youtu.be/7JN0knxwZK0?si=A4cLcnYUpg9Cs4Q5'],
          },
        },
        {
          title: '**Smart Environment System - VNTT**',
          description:
            'Engineered an AI-powered security and access control system to monitor vehicle activity at critical pump stations. The system fully automated vehicle identification (LPR), activity logging, and real-time security alerting.',
          imageUrl:
            '',
          link: '',
          details: {
            overview: 'Engineered an AI-powered security and access control system to monitor vehicle activity at critical pump stations. The system fully automated vehicle identification (LPR), activity logging, and real-time security alerting.',
            contributions: [
              '**Achieved >97% detection accuracy** across diverse lighting and weather conditions, ensuring high system reliability.',
              '**Engineered a concurrent processing pipeline** using multiprocessing and multithreading to reliably analyze 10 simultaneous camera streams.',
              '**Implemented a real-time alerting system** that flagged unauthorized vehicle access (based on a predefined whitelist), significantly enhancing operational security.',
              '**Automated event tracking and reporting** (vehicle logs, LPR, timestamps), which reduced manual workload and improved operational oversight.',
            ],
            techStack: [
              'Python', 'OpenCV', 'YOLO11', 'PaddleOCR', 'Multiprocessing', 'Multithreading', 'MongoDB', 'Docker', 'Redis'
            ],
            images: [
              'https://media.licdn.com/dms/image/v2/D562DAQFQQT7LwjmbPQ/profile-treasury-image-shrink_1280_1280/B56ZpuDdcIG0AU-/0/1762782993399?e=1765015200&v=beta&t=cpGXsaOo-Lc_g5GQGnaVYWkSsD4SFrnQCUmu-TVyxjY',
              'https://media.licdn.com/dms/image/v2/D562DAQFwuSLASbSZpw/profile-treasury-image-shrink_1280_1280/B56ZpuDdcKI8AQ-/0/1762782993638?e=1765015200&v=beta&t=uz0SMazABMMICD6CxlyOSS0XiH_afSbZhVP5k_L1xS0',
            ],
            videos: [],
          },
        },
        {
          title: '**Smart Industrial Park Assistant - VNTT**',
          description:
            'Developed an integrated AI assistant (chatbot) to support a complex Smart Industrial Park ecosystem (comprising 3 subsystems). The assistant is designed to provide real-time operational insights and answer complex system-related queries.',
          imageUrl:
            '',
          link: '',
          details: {
            overview: 'Developed an integrated AI assistant (chatbot) to support a complex Smart Industrial Park ecosystem (comprising 3 subsystems). The assistant is designed to provide real-time operational insights and answer complex system-related queries.',
            contributions: [
              '**Developed a Tool-Using Agent:** Built a chatbot capable of querying internal APIs to provide users with real-time event status, summarize incidents, and generate on-demand reports.',
              '**Implemented Retrieval-Augmented Generation (RAG) Pipeline:** Engineered a Retrieval-Augmented Generation (RAG) pipeline, enabling the chatbot to accurately answer complex questions based on system documentation and user guides.',
              '**Optimized LLM Serving:** Utilized **vLLM** for high-throughput, memory-efficient serving of the language models in a production environment.',
            ],
            techStack: [
              'Python', 'LangGraph', 'Qwen', 'vLLM', 'Qdrant', 'RAG', 'FastAPI', 'Docker', 'SQL'
            ],
            videos: ['https://www.youtube.com/watch?v=89E7y7-upjs'],
          },
        },
        {
          title: '**BecaVMS (Core VMS System) - VNTT**',
          description:
            'Developed the core platform, a comprehensive and reusable Video Management System (VMS). This platform bundles standard VMS functionalities (live view, stream management, recording) with a suite of core AI features, designed as a foundational product to be customized for specific client deployments.',
          imageUrl:
            '',
          link: '',
          details: {
            overview: 'Developed the core platform, a comprehensive and reusable Video Management System (VMS). This platform bundles standard VMS functionalities (live view, stream management, recording) with a suite of core AI features, designed as a foundational product to be customized for specific client deployments.',
            contributions: [
              'Engineered a **dual-line counting algorithm** to significantly reduce false positives (e.g., lingering vehicles) compared to traditional single-line methods.',
              'Developed reusable core AI modules, including **Fall Detection** and **Dwell-Time Heatmaps**, for diverse spatial analytics (e.g., retail behavior, traffic density).',
              'Packaged and served all AI features as microservices via **REST APIs** for seamless platform integration.',
            ],
            techStack: [
              'Python', 'PyTorch', 'TensorRT', 'YOLO11', 'OpenCV', 'HLS', 'Docker', 'Kafka', 'PostgreSQL', 'MQTT', 'FastAPI'
            ],
            images: [
              'https://media.licdn.com/dms/image/v2/D562DAQHZG7HvFKaoxA/profile-treasury-image-shrink_1280_1280/B56ZpuIVzJJQAQ-/0/1762784272212?e=1765015200&v=beta&t=938aqTWCm5SsfxztflJv3FfCHnxckEtw8sEPi1325Q8',
              'https://media.licdn.com/dms/image/v2/D562DAQHjTQK1q9Q2Mw/profile-treasury-image-shrink_1280_1280/B56Za_K41pGkAQ-/0/1746964026085?e=1765015200&v=beta&t=ifce5hhw4YkGDIbSj7A57XcEgGBBvedjslrrKHxc9bY',
              'https://media.licdn.com/dms/image/v2/D562DAQE64AZLnMAEDg/profile-treasury-image-shrink_1280_1280/B56Za_K0jVH4AQ-/0/1746964008992?e=1765015200&v=beta&t=ma4Y52LJne5Q47s6FWfLYtkyenkDNYKHa1MWbaMNnqE'
            ],
          },
        },
        {
          title: '**AI Resume Processing System - Aniday**',
          description:
            'Engineered an end-to-end CV + NLP system to automate the company\'s recruitment pipeline by automatically preprocessing, classifying job roles, and extracting key information from candidate resumes.',
          imageUrl:
            '',
          link: '',
          details: {
            overview: 'Engineered an end-to-end CV + NLP system to automate the company\'s recruitment pipeline by automatically preprocessing, classifying job roles, and extracting key information from candidate resumes.',
            contributions: [
              'Developed a system combining **Computer Vision** (for layout analysis) and **NLP** (for text understanding) to accurately extract personal information from diverse resume formats.',
              'Built and trained an NLP classification model to automatically categorize candidate profiles based on job roles and experience.',
              '**Deployed AI models into a production microservices environment** using **Docker** (containerization), **RabbitMQ** (message queue), and **NestJS** (backend integration).',
              'Managed the complete AI model lifecycle, including data collection, data labeling, preprocessing, training, and evaluation.',
            ],
            techStack: [
              'Python', 'PyTorch', 'Scikit-learn', 'NLP', 'OpenCV', 'Docker', 'RabbitMQ', 'NestJS', 'Microservices', 'REST APIs'
            ],
            images: [
              'https://media.licdn.com/dms/image/v2/D562DAQFySBhK9jW9ug/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1737862972672?e=1765015200&v=beta&t=DoGIW9P1_7_6psgoqxSC4IYJVG09bCjTdmornNf7nvM',
              'https://media.licdn.com/dms/image/v2/D562DAQE7OPFQYnZDnw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1737863314005?e=1765015200&v=beta&t=jygi_IFhuKH00v3TM7h1l6P6WjBgs2sjgF64L2cb8y4',
            ],
          },
        },
      ],
    },
  },
  seo: { title: 'Trần Quang Anh Kiệt | AI Engineer', description: '', imageURL: '' },
  social: {
    linkedin: 'https://www.linkedin.com/in/kitkit/',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '(+84) 971721683',
    email: 'kiettran8102004@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resource/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Computer Vision',
    'LLM',
    'RAG',
    'PyTorch',
    'Edge Computing',
    'HLS Streaming',
    'TensorRT',
    'vLLM',
    'FFmpeg',
    'Multiprocessing',
    'Docker',
    'Git',
    'REST APIs',
    'Kafka',
    'MQTT',
  ],
  experiences: [
    {
      company: 'VNTT',
      position: 'AI Engineer',
      from: 'November 2024',
      to: 'Present',
      companyLink: 'https://vntt.com.vn/',
    },
    {
      company: 'Aniday',
      position: 'AI Engineer Intern',
      from: 'April 2024',
      to: 'August 2024',
      companyLink: 'https://aniday.com/vi',
    },
  ],
  certifications: [
    {
      name: 'IELTS',
      body: '7.0 Overall',
      year: 'April 2022',
      link: '',
    },
    {
      name: "Advanced Learning Algorithms",
      body: "Certificate of Completion",
      year: "April 2024",
      link: "https://www.coursera.org/account/accomplishments/records/WWS5PEG6GRQN",
    }
  ],
  educations: [
    {
      institution: 'University of Information Technology (UIT)',
      degree: 'Bachelor of Software Engineering',
      from: '2022',
      to: '2025',
    }
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
