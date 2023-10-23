import ProjectCard from "./ProjectCard"
import cyberBlog from "../public/img/projects/cyberBlog.webp";
import noorShop from "../public/img/projects/noorShop.webp";
import dynamicPortfolio from "../public/img/projects/dynamicPortfolio.png";
import pizza from "../public/img/projects/pizza.jpeg";
import dashboard from "../public/img/projects/dashboard.webp";
import hrpec from "../public/img/projects/hrpec.jpeg";
import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import TicTacToe from "../public/img/projects/TicTacToe.png";

const Projects = () => {
  return (
    <div className="wrapper ">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={hrpec.src}
          title="Human Rights Org Website"
          link="https://hrpec.org/"
        />
        <ProjectCard
          img={TicTacToe.src}
          title="TicTacToe Game created using ReactJS"
          link="https://nymoooo.github.io/Tic-Tac-ToeByEZ/"
        />

        <ProjectCard
          img={pizza.src}
          title="Simple Menu Page"
          link="https://pizza-menu-flame.vercel.app/"
        />
        <ProjectCard
          img={noorShop.src}
          title="Lorem Ipsum"
          link="https://orebishopping.reactbd.com/"
        />
        <ProjectCard
          img={dynamicPortfolio.src}
          title="Lorem Ipsum"
          link="https://amazonclone.reactbd.com/"
        />

        <ProjectCard
          img={dashboard.src}
          title="Lorem Ipsum"
          link="https://orebishopping.reactbd.com/"
        />
      </div>
    </div>
  );
};

export default Projects