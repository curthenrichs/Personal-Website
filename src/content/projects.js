
import AuthrProject from './markdown/AuthrProject.md';
import ITERProject from './markdown/ITERProject.md';
import EvDProject from './markdown/EvDProject.md';
import InternshipProject from './markdown/InternshipProject.md';
import HobbyProject from './markdown/HobbyProject.md';
import ComputerVisionProject from './markdown/VisionMLProject.md';
import EmbeddedProject from './markdown/EmbeddedProject.md';
import HCIProject from './markdown/HCIProject.md';


const GetMarkdownPathFromName = (name) => {
  let retVal = null;

  switch (name) {
    case "authr":
      retVal = AuthrProject;
      break;
    case "iter":
      retVal = ITERProject;
      break;
    case "evd":
      retVal = EvDProject;
      break;
    case "internship":
      retVal = InternshipProject;
      break;
    case "hobby":
      retVal = HobbyProject;
      break;
    case "vision":
      retVal = ComputerVisionProject;
      break;
    case "embedded":
      retVal = EmbeddedProject;
      break;
    case "hci":
      retVal = HCIProject;
      break;
  }

  return retVal;
};

const Projects = [
  "authr",
  "iter",
  "evd",
  "internship",
  "hobby",
  "vision",
  "embedded",
  "hci"
];

const ProjectDigests = [
  {
    "title": "Authr",
    "brief": "Human-robot task development tool based on Therbligs.",
    "img": "/img/teaser-authr.png",
    "type": "Research",
    "project": "authr"
  },
  {
    "title": "Expert View Dashboard",
    "brief": "Training and authoring tool for operators to modify their cobot's programs.",
    "img": "/img/teaser-evd.jpg",
    "type": "Research",
    "project": "evd"
  },
  {
    "title": "Task Interdependence and pRAD",
    "brief": "Experiments to better understand how operators interact with cobots.",
    "img": "/img/teaser-iter.png",
    "type": "Research",
    "project": "iter"
  },
  {
    "title": "Dedicated Computing Internship",
    "brief": "A brief discussion of several projects I worked on during my internship.",
    "img": "/img/teaser-internship.jpg",
    "type": "Internship",
    "project": "internship"
  },
  {
    "title": "Hobby Projects",
    "brief": "Personal robot, embedded systems, and home automation projects.",
    "img": "/img/teaser-hobby.jpg",
    "type": "Personal",
    "project": "hobby"
  },
  {
    "title": "Computer Vision and ML Projects",
    "brief": "Various computer vision and machine learning projects from coursework.",
    "img": "/img/teaser-computer-vision.png",
    "type": "Coursework",
    "project": "vision"
  },
  {
    "title": "Embedded System Projects",
    "brief": "Various embedded systems projects from my undergrad coursework.",
    "img": "/img/teaser-embedded.jpg",
    "type": "Coursework",
    "project": "embedded"
  },
  {
    "title": "HCI and Data Visualization",
    "brief": "A few HCI and data visualization course projects.",
    "img": "/img/teaser-hci.jpg",
    "type": "Coursework",
    "project": "hci"
  }
]

const ProjectImageCarousel = {
  "authr": [
    {
      "img": "/img/authr-setup.png",
      "caption": "Authr setup view allows user to define Agents, Things, and Destinations."
    },
    {
      "img": "/img/authr-task.png",
      "caption": "Authr task view allows user to drag-and-drop Therbligs into tasks."
    },
    {
      "img": "/img/authr-sim.png",
      "caption": "Authr simulation view allows user to inspect the program constructed."
    }
  ],
  "evd": [
    {
      "img": "/img/evd-authoring-ui.jpg",
      "caption": "Expert View Dashboard's authoring interface (still in development)."
    }
  ],
  "iter": [
    {
      "img": "/img/iter-seq-task.png",
      "caption": "Participant constructs wooden block structure with the robot."
    },
    {
      "img": "/img/iter-displays.png",
      "caption": "Evaluated two interface widgets for communicating pRAD."
    },
    {
      "img": "/img/iter-workspace.png",
      "caption": "Sketch of participant's workspace for the two experiments."
    }
  ],
  "internship": [
    {
      "img": "/img/internship-oled-covered.jpg",
      "caption": "Custom OLED node ID display that fits within 3.5\" bay."
    },
    {
      "img": "/img/internship-oled.jpg",
      "caption": "OLED display has two capacitive touch buttons, USB serial interface, and multi-page screen."
    },
    {
      "img": "/img/internship-fan.jpg",
      "caption": "Custom fan controller with a SAMD Atmel microcontroller."
    }
  ],
  "hobby": [
    {
      "img": "/img/hobby-taltosoid.jpg",
      "caption": "First version of Taltosoid - A supernumerary robotic finger."
    },
    {
      "img": "/img/hobby-robots.jpg",
      "caption": "Some of my older robots in a group photo."
    },
    {
      "img": "/img/hobby-leds.jpg",
      "caption": "LEDs being controlled by lighting effects interface, back when I was at MSOE."
    }
  ],
  "vision": [
    {
      "img": "/img/computer-vision-iter.png",
      "caption": "ITER computer vision spinoff detects magnetic blocks in 3D space using AR markers."
    },
    {
      "img": "/img/computer-vision-gan-learning.gif",
      "caption": "Sprite GAN learning body armor."
    },
    {
      "img": "/img/computer-vision-gan-single.gif",
      "caption": "Sprite GAN learning body armor - single example."
    }
  ],
  "embedded": [
    {
      "img": "/img/embedded-networking.jpg",
      "caption": "Networking one project hardware where I am using a Cypress SOC."
    },
    {
      "img": "/img/embedded-treadmill.jpg",
      "caption": "Embedded Systems IV course project. Firmware implementation for a treadmill on a Cypress SOC."
    },
    {
      "img": "/img/embedded-tracking.jpg",
      "caption": "Embedded Systems III course project. Uses camera to track hand on NIOS soft-core processor."
    },
    {
      "img": "/img/embedded-pcb.jpg",
      "caption": "Embedded Systems III homework. I implemented a Atmel microcontroller PCB in Eagle."
    }
  ],
  "hci": [
    {
      "img": "/img/hci-hifi-mockup.jpg",
      "caption": "High fidelity mockup of my Universal Robots teach pendant redesign in Adobe XD."
    },
    {
      "img": "/img/hci-vis-overview.jpg",
      "caption": "Overview interactive visualization of Amazon product categories created by Plotly in Python."
    },
    {
      "img": "/img/hci-vis-detail.jpg",
      "caption": "Detail interactive visualization of Amazon product categories created by Plotly in Python."
    }
  ]
}

export {
  Projects,
  ProjectDigests,
  ProjectImageCarousel,
  GetMarkdownPathFromName
};
