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

const projects = [
    {
        id: 1,
        title: 'Granular Garden',
        src: granularGarden,
        description: `
        Technologies: MVC (Model-View-Controller), JavaScript, Node.js, Express.js, Handlebars.js, CSS, MySQL/Sequelize ORM,
        Authentication, Heroku, Cloudinary
        `,
        deployed: 'https://frozen-tor-00446-d883d20dd32e.herokuapp.com/',
        gitHub: 'https://github.com/codehashira28/granular-garden',
        endPoint: '/granular-garden'
    },
    {
        id: 2,
        title: 'Cozy Corner',
        src: cozyCorner,
        description: `
        Technologies: MongoDB, Express.js, React, Node.js, JavaScript, CSS, JWT Authentication, GraphQL, Google Books API, Heroku
        `,
        deployed: 'https://cozy-corner-9b91c31f9b05.herokuapp.com/',
        gitHub: 'https://github.com/zoeedge16/cozy-corner',
        endPoint: '/cozy-corner'
    },
    {
        id: 3,
        title: 'ESO ClassGuides',
        src: esoClassGuides,
        description: `
        Technologies: JavaScript, HTML, CSS, YouTube API, Reddit API, Bootstrap, GitHub Pages
        `,
        deployed: 'https://brady-billeisen.github.io/eso-class-guide-app/',
        gitHub: 'https://github.com/brady-billeisen/eso-class-guide-app',
        endPoint: '/eso-class-guides'
    },
    {
        id: 4,
        title: 'React Portfolio',
        src: reactPortfolio,
        description: `
        Technologies: React, React-Router-Dom, Bootstrap, CSS, Axios
        `,
        deployed: 'https://bradybilleisenportfolio.netlify.app/',
        gitHub: 'https://github.com/brady-billeisen/react-portfolio',
        endPoint: '/react-portfolio'
    },
    {
        id: 5,
        title: 'Weather Dashboard',
        src: weatherDashboard,
        description: `
        Technologies: JavaScript, HTML, CSS, Open Weather API, Geocoder API, Bootstrap, Local Storage
        `,
        deployed: 'https://brady-billeisen.github.io/weather-dashboard/',
        gitHub: 'https://github.com/brady-billeisen/weather-dashboard',
        endPoint: '/weather-dashboard'
    },
    {
        id: 6,
        title: 'Code Quiz',
        src: codeQuiz,
        description: `
        Technologies: JavaScript, HTML, CSS, Bootstrap, Local Storage
        `,
        deployed: 'https://brady-billeisen.github.io/code-quiz/',
        gitHub: 'https://github.com/brady-billeisen/code-quiz',
        endPoint: '/code-quiz'
    },
    {
        id: 7,
        title: 'Work Day Scheduler',
        src: workDayScheduler,
        description: `
        Technologies: JavaScript, HTML, CSS, Local Storage
        `,
        deployed: 'https://brady-billeisen.github.io/work-day-scheduler/',
        gitHub: 'https://github.com/brady-billeisen/work-day-scheduler',
        endPoint: '/work-day-scheduler'
    },
    {
        id: 8,
        title: 'Password Generator',
        src: passwordGenerator,
        description: `
        Technologies: JavaScript, HTML, CSS, GitHub Pages
        `,
        deployed: 'https://brady-billeisen.github.io/password-generator/',
        gitHub: 'https://github.com/brady-billeisen/password-generator',
        endPoint: '/password-generator'
    },
    {
        id: 9,
        title: 'JATE',
        src: jate,
        description: `
        Technologies: JavaScript, HTML, CSS, Babel, Workbox, Webpack, IndexedDB
        `,
        deployed: 'https://bradybilleisenportfolio.netlify.app/',
        gitHub: 'https://github.com/brady-billeisen/text-editor',
        endPoint: '/jate'
    },
    {
        id: 10,
        title: 'Horiseon Code Refactor',
        src: horiseonRefactor,
        description: `
        Technologies: HTML, CSS
        `,
        deployed: 'https://brady-billeisen.github.io/code-refactor/',
        gitHub: 'https://github.com/brady-billeisen/code-refactor',
        endPoint: '/horiseon-code-refactor'
    },
    {
        id: 11,
        title: 'README Generator',
        src: readmeGenerator,
        description: `
        Technologies: JavaScript, Node.js, Inquirer Package
        `,
        deployed: 'https://bradybilleisenportfolio.netlify.app/',
        gitHub: 'https://github.com/brady-billeisen/readme-generator',
        endPoint: '/readme-generator'
    },
    {
        id: 12,
        title: 'E-Commerce Back End',
        src: eCommerce,
        description: `
        Technologies: JavaScript, MySQL, Express.js, RESTful API's, Sequelize, dotenv Package, Insomnia
        `,
        deployed: 'https://bradybilleisenportfolio.netlify.app/',
        gitHub: 'https://github.com/brady-billeisen/e-commerce-back-end',
        endPoint: '/e-commerce-back-end'
    },
    {
        id: 13,
        title: 'Employee Tracker',
        src: employeeTracker,
        description: `
        Technologies: JavaScript, MySQL, Inquirer Package, console.table Package
        `,
        deployed: 'https://bradybilleisenportfolio.netlify.app/',
        gitHub: 'https://github.com/brady-billeisen/employee-tracker',
        endPoint: '/employee-tracker'
    },
    {
        id: 14,
        title: 'SVG Logo Maker',
        src: svgLogoMaker,
        description: `
        Technologies: JavaScript, Node.js, Jest, Unit Tests, Inquierer Package
        `,
        deployed: 'https://brady-billeisen.github.io/password-generator/',
        gitHub: 'https://github.com/brady-billeisen/svg-logo-maker',
        endPoint: '/svg-logo-maker'
    },
]


export default projects
