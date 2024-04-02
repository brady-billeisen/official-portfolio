import granularGarden from '../assets/images/Granular-Garden.png'
import cozyCorner from '../assets/images/Cozy-Corner.png'
import esoClassGuides from '../assets/images/ESO-Class-Guides.png'
import reactPortfolio from '../assets/images/React-Portfolio.png'

const projects = [
    {
        id: 1,
        title: 'Granular Garden',
        src: granularGarden,
        description: `
        Technologies Used: MVC (Model-View-Controller)
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
        Technologies Used: MERN Stack
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
        Technologies Used: JavaScript
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
        Technologies Used: React
        `,
        deployed: 'https://bradybilleisenportfolio.netlify.app/',
        gitHub: 'https://github.com/brady-billeisen/react-portfolio',
        endPoint: '/react-portfolio'
    },
]


export default projects
