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
          title: '**Smart Security System**',
          description:
            'Developed and deployed a large-scale, real-time AI traffic monitoring system for 6 major industrial zones. Managed the full project lifecycle, from model development and production optimization to on-site hardware calibration.',
          imageUrl:
            '',
          link: '',
          details: {
            overview: 'Developed and deployed a large-scale, real-time AI traffic monitoring system for 6 major industrial zones. Managed the full project lifecycle, from model development and production optimization to on-site hardware calibration.',
            contributions: [
              '• Scaled System Performance: Optimized the end-to-end inference pipeline (CPU/GPU) to successfully process and analyze **130 concurrent camera** streams in real-time.',
              '• Developed & Deployed C++ Models: Built models for vehicle classification, counting, and real-time violation detection (wrong-way, lane-violation). Quantized models and deployed them using TensorRT for high-throughput, low-latency inference on edge devices.',
              '• Built ML Ops Pipelines: Implemented a self-labeling pipeline to autonomously gather new data, enabling continuous model improvement and accuracy in a production environment.',
              '• Full-Stack Integration: Handled on-site camera installation and calibration to ensure high LPR (License Plate Recognition) accuracy, and integrated AI overlays (vehicle type, plate) into low-latency HLS live streams.',
            ],
            techStack: [
              'Python', 'PyTorch', 'TensorRT', 'YOLO11', 'OpenCV', 'HLS', 'FFmpeg', 'Docker', 'Kafka', 'PostgreSQL', 'MQTT', 'FastAPI', 'MongoDB'
            ],
            images: [
              'media/1746963344280.jpg',
              'media/1746963375450.jpg',
              'media/1746965499972.jpg',
              'media/Screenshot_20251110_203103.png',
              'media/Screenshot_20251110_203148.png'
            ],
            videos: ['https://youtu.be/7JN0knxwZK0?si=A4cLcnYUpg9Cs4Q5'],
          },
        },
        {
          title: 'Task Management System',
          description:
            'A collaborative task management tool with real-time updates and team collaboration features.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
          details: {
            overview: 'Developed a modern task management system that enables teams to collaborate effectively. Features include task assignment, progress tracking, deadline management, and real-time notifications.',
            contributions: [
              'Implemented drag-and-drop kanban board interface',
              'Built real-time collaboration features',
              'Created notification system for task updates',
              'Developed user role and permission management',
              'Integrated calendar view for deadline tracking',
            ],
            techStack: [
              'React',
              'TypeScript',
              'Firebase',
              'Material-UI',
              'React DnD',
              'Socket.io',
              'JWT',
            ],
            lessonsLearned: [
              'Real-time data synchronization best practices',
              'Effective UI/UX design for productivity tools',
              'Managing complex state with React Context',
              'Authentication and authorization patterns',
            ],
            difficulties: [
              'Handling conflicts in real-time collaborative editing - Implemented CRDT-like conflict resolution',
              'Complex drag-and-drop functionality - Used React DnD library with custom hooks',
              'Managing offline functionality - Implemented service workers and local storage sync',
            ],
            images: [
              'https://via.placeholder.com/600x400?text=Kanban+Board',
              'https://via.placeholder.com/600x400?text=Task+Details',
              'https://via.placeholder.com/600x400?text=Calendar+View',
            ],
            videos: [],
          },
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Trần Quang Anh Kiệt', description: '', imageURL: '' },
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
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
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
      from: 'July 2019',
      to: 'August 2021',
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
