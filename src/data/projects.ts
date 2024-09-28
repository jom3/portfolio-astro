import type { Project } from "../interfaces/project";

export const projects: Project[] = [
  {
    title: "rick and morty",
    desc: `Rick and morty's app, it's an example to how to make a web app with angular and tailwind, it can be simple but it's not, this app use the Rick and Morty API, it has different funtionalities like search a character, show all the information about it, etc.`,
    images: ["rickandmorty.webp"],
    techs: ["angular", "tailwind"],
    links: ["https://github.com/jom3/rick-and-morty-app"],
  },
  {
    title: "MovieDB APP",
    images: ["moviedb.webp"],
    desc: `MovieDB's app, this application was made with angular and tailwind, it used themoviedb API, it has different funtionalities show all the information about a movie when it is clicked in the main page, etc.`,
    techs: ["angular", "tailwind"],
    links: ["https://github.com/jom3/moviedbApp"],
  },
  {
    title: "TODO APP",
    images: ["todo.webp"],
    desc: "This is an application to do some activities, and these activities have more internal activities, this app works with an internal database, this database is called json-server.",
    techs: ["angular", "tailwind", "json"],
    links: ["https://github.com/jom3/todo-app"],
  },
  {
    title: "Slow Movies",
    images: ["logo-white.svg"],
    desc: "This is application it's a website where you can see all the movies that are in theater also you can buy some tickets, this app have some features like payment, seat reservation and others, this app has a own server with some endpoints",
    techs: ["angular","nest", "postgres", "prisma", "docker"],
    links: ["https://github.com/jom3/front-end-devathon","https://github.com/jom3/back-end-devathon"],
  },
  {
    title: "Personal Portfolio",
    images: ["portfolio.webp"],
    desc: "My own personal portfolio to show my skills doing a simple example of a portfolio page with astro 5 beta, this describe who am I and I do",
    techs: [ "astro", "html", "css", "tailwind", "javascript"],
    links: ["https://github.com/jom3/portfolio-astro"],
  },
];