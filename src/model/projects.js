let express = 'Express';
let mongodb = 'MongoDB';
let angular = 'Angular';
let swift = 'Swift';
let node = 'Node.js';
let lodash = 'Lodash';
let jquery = 'jQuery';
let less = 'Less.js';
let sass = 'Sass';
let mithril = 'Mithril.js';
let stripe = 'Stripe';

const projects = [
    {
        title: "HDS Doorways",
        description: 'MEAN stack enterprise application for the Indian housing industry.',
        img: 'https://res.cloudinary.com/dsne543uh/image/upload/v1513897092/doorways.jpg',
        technologies: [angular, less, mongodb, express, node, lodash],
        id: 1,
    },
    {
        title: "Oceanic Preservation Society",
        description: 'Customized CMS template with shop, blog, and customized donation system built with Stripe and Node.js',
        img: 'https://res.cloudinary.com/dsne543uh/image/upload/v1513897092/ops.jpg',
        href: 'https://www.opsociety.org/',
        technologies: [jquery, less, node, express, stripe],
        id: 2,
    },
    {
        title: "Common",
        description: 'Customized CMS template with blog.',
        img: 'https://res.cloudinary.com/dsne543uh/image/upload/v1513897092/common_2.jpg',
        href: 'https://common.is/',
        technologies: [jquery, less],
        id: 3,
    },
    {
        title: "Enli Health Intelligence",
        description: 'Customized CMS template with suite of sites including a blog for health care community',
        img: 'https://res.cloudinary.com/dsne543uh/image/upload/v1513897092/enli.jpg',
        href: 'https://www.enli.net/',
        technologies: [mithril, jquery, less],
        id: 4,
    },
    {
        title: "Camera Goat",
        description: 'Customized CMS template with online shop for Camera Goat, based in Boulder, CO',
        img: 'https://res.cloudinary.com/dsne543uh/image/upload/v1513897092/goat.jpg',
        href: 'https://www.cameragoat.com/',
        technologies: [jquery, less],
        id: 5,
    }
];

export default projects;