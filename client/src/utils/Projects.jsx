import granularGarden from '../assets/images/Granular-Garden.png'
import cozyCorner from '../assets/images/Cozy-Corner.png'
import esoClassGuides from '../assets/images/ESO-Class-Guides.png'
import reactPortfolio from '../assets/images/React-Portfolio.png'
import passwordGenerator from '../assets/images/Password-Generator.png'
import jate from '../assets/images/JATE.png'
import employeeTracker from '../assets/images/Employee-Tracker.png'
import svgLogoMaker from '../assets/images/Svg-Logo-Maker.png'
import eCommerce from '../assets/images/E-Commerce-Back-End.png'
import readmeGenerator from '../assets/images/Readme-Generator.png'
import weatherDashboard from '../assets/images/Weather-Dashboard.png'
import workDayScheduler from '../assets/images/Work-Day-Scheduler.png'
import codeQuiz from '../assets/images/Code-Quiz.png'
import horiseonRefactor from '../assets/images/Horiseon-Refactor.png'

const Projects = [
    {
        id: 1,
        title: 'Granular Garden',
        src: granularGarden,
        technologies: `
        Technologies: MVC (Model-View-Controller), JavaScript, Node.js, Express.js, Handlebars.js, CSS, MySQL/Sequelize ORM,
        Authentication, Heroku, Cloudinary
        `,
        description: `
        Granular Garden, a vibrant and groundbreaking application that embraces the soul of music
        creation and fosters a thriving community of artists, producers, and music enthusiasts. A platform made using the newest
        development technologies to combine the finest elements of SoundCloud, Splice, and Twitter, crafting an immersive experience
        that revolutionizes the way artists collaborate, share, and express themselves.
        `,
        deployed: 'https://frozen-tor-00446-d883d20dd32e.herokuapp.com/',
        gitHub: 'https://github.com/codehashira28/granular-garden',
        endPoint: '/granular-garden'
    },
    {
        id: 2,
        title: 'Cozy Corner',
        src: cozyCorner,
        technologies: `
        Technologies: MongoDB, Express.js, React, Node.js, JavaScript, CSS, JWT Authentication, GraphQL, Google Books API, Heroku
        `,
        description: `
        Cozy Corner is a web application that helps readers connect with the reading world. These connections are made through fellow
        readers on the app and suggest reads based on the current popular books. The reader can also keep up with their own reading
        progress and see their reading history.
        `,
        deployed: 'https://cozy-corner-9b91c31f9b05.herokuapp.com/',
        gitHub: 'https://github.com/zoeedge16/cozy-corner',
        endPoint: '/cozy-corner'
    },
    {
        id: 3,
        title: 'ESO ClassGuides',
        src: esoClassGuides,
        technologies: `
        Technologies: JavaScript, HTML, CSS, YouTube API, Reddit API, Bootstrap, GitHub Pages
        `,
        description: `
        Whether you're a seasoned adventurer or just starting your journey, ESO ClassGuides is your go-to tool for staying
        informed, improving your gameplay, and unlocking the full potential of your character. Let the application guide you
        through the vast universe of Elder Scrolls Online, helping you conquer any challenge that comes your way.
        Elevate your ESO adventure like never before with ESO ClassGuides!
        `,
        deployed: 'https://brady-billeisen.github.io/eso-class-guide-app/',
        gitHub: 'https://github.com/brady-billeisen/eso-class-guide-app',
        endPoint: '/eso-class-guides'
    },
    {
        id: 4,
        title: 'React Portfolio',
        src: reactPortfolio,
        technologies: `
        Technologies: React, React-Router-Dom, Bootstrap, CSS, Axios
        `,
        description: `
        This is a single-page application portfolio for myself (a web developer). It showcases my skills, projects, and contact
        information. The portfolio is built using React and React Bootstrap for a responsive and modern user interface.
        The portfolio is deployed on Netlify.
        `,
        deployed: 'https://bradybilleisenportfolio.netlify.app/',
        gitHub: 'https://github.com/brady-billeisen/react-portfolio',
        endPoint: '/react-portfolio'
    },
    {
        id: 5,
        title: 'Weather Dashboard',
        src: weatherDashboard,
        technologies: `
        Technologies: JavaScript, HTML, CSS, Open Weather API, Geocoder API, Bootstrap, Local Storage
        `,
        description: `
        This Weather Dashboard application provides users with real-time weather information for any city worldwide. Leveraging
        the APIs provided by OpenWeatherMap, users can input a city name into the search bar,
        and the application retrieves and displays current weather data, including temperature, wind speed, and humidity.
        `,
        deployed: 'https://brady-billeisen.github.io/weather-dashboard/',
        gitHub: 'https://github.com/brady-billeisen/weather-dashboard',
        endPoint: '/weather-dashboard'
    },
    {
        id: 6,
        title: 'Code Quiz',
        src: codeQuiz,
        technologies: `
        Technologies: JavaScript, HTML, CSS, Bootstrap, Local Storage
        `,
        description: `
        The Code Quiz application is an interactive quiz designed to test users' knowledge of coding concepts.
        With a user-friendly interface and dynamic functionality, this application provides an engaging way for users to
        challenge themselves and improve their coding skills.
        `,
        deployed: 'https://brady-billeisen.github.io/code-quiz/',
        gitHub: 'https://github.com/brady-billeisen/code-quiz',
        endPoint: '/code-quiz'
    },
    {
        id: 7,
        title: 'Work Day Scheduler',
        src: workDayScheduler,
        technologies: `
        Technologies: JavaScript, HTML, CSS, Local Storage
        `,
        description: `
        The Work Day Scheduler application is a simple and efficient tool designed to help users manage their daily tasks within
        specified work hours. With a clean and intuitive interface, this application allows users to plan and organize their work
        schedule effectively.
        `,
        deployed: 'https://brady-billeisen.github.io/work-day-scheduler/',
        gitHub: 'https://github.com/brady-billeisen/work-day-scheduler',
        endPoint: '/work-day-scheduler'
    },
    {
        id: 8,
        title: 'Password Generator',
        src: passwordGenerator,
        technologies: `
        Technologies: JavaScript, HTML, CSS, GitHub Pages
        `,
        description: `
        The Password Generator is a user-friendly tool designed to create strong and secure passwords according to the user's
        specifications. With customizable options for character types and password length, this application ensures that users can
        generate passwords that meet their security needs.
        `,
        deployed: 'https://brady-billeisen.github.io/password-generator/',
        gitHub: 'https://github.com/brady-billeisen/password-generator',
        endPoint: '/password-generator'
    },
    {
        id: 9,
        title: 'JATE',
        src: jate,
        technologies: `
        Technologies: JavaScript, HTML, CSS, Babel, Workbox, Webpack, IndexedDB
        `,
        description: `
        JATE (Just Another Text Editor) is a progressive web application that provides a simple and efficient text editing experience while
        leveraging modern web technologies.
        `,
        deployed: '',
        gitHub: 'https://github.com/brady-billeisen/text-editor',
        endPoint: '/jate'
    },
    {
        id: 10,
        title: 'Horiseon Code Refactor',
        src: horiseonRefactor,
        technologies: `
        Technologies: HTML, CSS
        `,
        description: `
        Horiseon is an SEO (Search Engine Optimization) company committed to improving the online visibility of businesses.
        This project involves the refactoring of Horiseon's website to enhance its quality and functionality.
        `,
        deployed: 'https://brady-billeisen.github.io/code-refactor/',
        gitHub: 'https://github.com/brady-billeisen/code-refactor',
        endPoint: '/horiseon-code-refactor'
    },
    {
        id: 11,
        title: 'README Generator',
        src: readmeGenerator,
        technologies: `
        Technologies: JavaScript, Node.js, Inquirer Package
        `,
        description: `
        The README Generator is a command line application designed to simplify the process of creating professional README files for
        your projects by prompting users for essential project details and providing a streamlined workflow, allowing you to generate
        well-structured and informative documentation with ease, thus saving time and effort.
        `,
        deployed: '',
        gitHub: 'https://github.com/brady-billeisen/readme-generator',
        endPoint: '/readme-generator'
    },
    {
        id: 12,
        title: 'E-Commerce Back End',
        src: eCommerce,
        technologies: `
        Technologies: JavaScript, MySQL, Express.js, RESTful API's, Sequelize, dotenv Package, Insomnia
        `,
        description: `
        This repository contains the back end for an E-Commerce website. The application is built using the latest technologies,
        allowing your company to compete effectively with other e-commerce companies.
        `,
        deployed: '',
        gitHub: 'https://github.com/brady-billeisen/e-commerce-back-end',
        endPoint: '/e-commerce-back-end'
    },
    {
        id: 13,
        title: 'Employee Tracker',
        src: employeeTracker,
        technologies: `
        Technologies: JavaScript, MySQL, Inquirer Package, console.table Package
        `,
        description: `
        This command-line application allows you to efficiently manage company information by interacting with a MySQL database.
        You can easily view and manipulate data related to departments, roles, and employees of your organization.
        The application presents a user-friendly interface, providing various options for viewing and adding information.
        `,
        deployed: '',
        gitHub: 'https://github.com/brady-billeisen/employee-tracker',
        endPoint: '/employee-tracker'
    },
    {
        id: 14,
        title: 'SVG Logo Maker',
        src: svgLogoMaker,
        technologies: `
        Technologies: JavaScript, Node.js, Jest, Unit Tests, Inquierer Package
        `,
        description: `
        The Employee Tracker backend is a Node.js application designed for seamless employee management, offering features like record
        creation, viewing, updating, and deletion through a straightforward command-line interface, streamlining administrative tasks and
        promoting organizational efficiency.
        `,
        deployed: '',
        gitHub: 'https://github.com/brady-billeisen/svg-logo-maker',
        endPoint: '/svg-logo-maker'
    },
]


export default Projects
