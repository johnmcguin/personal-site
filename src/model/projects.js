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
        subTitle: 'doorways description',
        description: 'some classy description',
        img: 'http://via.placeholder.com/350x350',
        // href: 'dev.hdsdoorways.com',
        technologies: [angular, less, mongodb, express, node, lodash],
        id: 1,
    },
    {
        title: "Oceanic Preservation Society",
        subTitle: 'ops description',
        description: 'some classy description',
        img: 'http://via.placeholder.com/350x350',
        technologies: [jquery, less, node, express, stripe],
        id: 2,
    },
    {
        title: "Common",
        subTitle: 'common description',
        description: 'some classy description',
        img: 'http://via.placeholder.com/350x350',
        technologies: [jquery, less],
        id: 3,
    },
    {
        title: "Enli Health Intelligence",
        subTitle: 'enli description',
        description: 'some classy description',
        img: 'http://via.placeholder.com/350x350',
        technologies: [mithril, jquery, less],
        id: 4,
    },
    {
        title: "Camera Goat",
        subTitle: 'Camera Goat description',
        description: 'some classy description',
        img: 'http://via.placeholder.com/350x350',
        technologies: [jquery, less],
        id: 5,
    },
    // {
    //     title: "HDS Inspections iOS",
    //     subTitle: 'inspections description',
    //     description: 'some classy description',
    //     img: 'http://via.placeholder.com/350x350',
    //     technologies: [swift],
    //     id: 5,
    // },
    // {
    //     title: "HDS Work Orders iOS",
    //     subTitle: 'work order description',
    //     description: 'some classy description',
    //     img: 'http://via.placeholder.com/350x350',
    //     technologies: [swift],
    //     id: 6
    // }
];

export default projects;