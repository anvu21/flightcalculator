import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
  mountain,

  efficiency,
    DART,

    movie,
    geolocation,
    calculator,
    threejs,
    PostgreSQL,
    Aws,
    Firebase,
    Numpy,
    Cimage,
    python,
    heroku,


  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Result",
    },
    {
      id: "work",
      title: "Solution",
    },
    {
      id: "contact",
      title: "Feedback",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },

  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "PostgreSQL",
      icon: PostgreSQL,
    },
    {
      name: "C",
      icon: Cimage,
    },
    {
      name: "Numpy",
      icon: Numpy,
    },
    {
      name: "Firebase",
      icon: Firebase,
    },
    {
      name: "Aws",
      icon: Aws,
    },
    {
      name: "heroku",
      icon: heroku,
    },
  ];
  
  const experiences = [
    {
      title: "Fly with carbon offset programs",
      company_name: "",
      icon:   mountain,
      iconBg: "#ffffff",
      date: "",
      points: [
        "Some airlines donate to carbon offset efforts for an extra fee. Airlines with carbon offset programs estimate the cost of offsetting your flight’s CO2 emissions, add the cost to your ticket, and donate that fee to carbon offset efforts.",
        "Some airlines that currently offer carbon offset programs include JetBlue, United Airlines, Delta, Lufthansa, and Air Canada",
        "Carbon offsets might include planting trees as well as broader social efforts, such as rolling out renewable and fuel-efficient energy resources for those who might not have easy access to them.",
      ],
    },{
      title: "Fly less often",
      company_name: "",
      icon: DART,
      iconBg: "#ffffff",
      date: "",
      points: [
        "Avoiding unnecessary flights can significantly reduce your carbon footprint. While it's important to maintain connections with distant family and friends, and occasional vacations are understandable, it's essential to avoid flying when it's not necessary. To minimize air travel, you can:",
        "Conduct business meetings over phone or video call",
        "Stay longer at your destination.",
        "Take vacations closer to home, so you don’t need to fly.",

      ],
    },{
      title: "Take ground transit for shorter trips.",
      company_name: "",
      icon: efficiency,
      iconBg: "#ffffff",
      date: "",
      points: [
        "For shorter distances, trains and cars generally produce fewer carbon emissions than air travel. Although flying is quicker, the environmental impact is often not justified for short trips. Instead, consider driving or taking a train for relatively short journeys.",
        "-In many nations, trains are the most eco-friendly choice compared to planes or cars, making them a preferred option. When driving, opt for a smaller, fuel-efficient vehicle, or even an electric car. Traveling long distances in a large, fuel-consuming car can be more harmful to the environment than flying, particularly if you're traveling alone.",
        "Determining the most environmentally friendly option between a short flight or a long drive depends on the distance and your car's fuel efficiency. To make an informed decision, you'll need to compare the carbon emissions of both alternatives.",

      ],
    },
    
    
  ];
  
  const testimonials = [

  ];
  
  const projects = [
    
    {
      name: "GEO LOCATION RECOMMENDER",
      description:
        "A React Native app using Google Geolocation API to recommend nearby restaurant or location of interested based on user input keyword",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "expo",
          color: "green-text-gradient",
        },
        {
          name: "googleMap-API",
          color: "pink-text-gradient",
        },
      ],
      image: geolocation,
      source_code_link: "https://github.com/anvu21/geolocation/tree/main/hw1",
    },
    {
      name: "Movie API",
      description:
        "Web application that enables users to look up movie links. A sign-in system that allow user to stay in session with JWT token via cookies",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "JWT Token",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "AWS Amplify",
          color: "blue-text-gradient",
        },
      ],
      image: movie,
      source_code_link: "https://github.com/anvu21/movie-api-amazon",
    },
    {
      name: "Carbon Calculator",
      description:
        "A React app that calculates recipe carbon emissions based on ingredients and weight",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "Heroku",
          color: "pink-text-gradient",
        },
      ],
      image: calculator,
      source_code_link: "https://github.com/anvu21/carbonFootprintCalculator",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };