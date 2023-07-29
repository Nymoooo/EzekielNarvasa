import ProjectCard from "./ProjectCard"
import amazonClone from "../public/img/projects/amazonClone.webp";
import cyberBlog from "../public/img/projects/cyberBlog.webp";
import noorShop from "../public/img/projects/noorShop.webp";
import dynamicPortfolio from "../public/img/projects/dynamicPortfolio.png";
import reactBD from "../public/img/projects/reactBD.png";
import dashboard from "../public/img/projects/dashboard.webp";
import { FaProjectDiagram } from "react-icons/fa";
import Title from './Title'
import UnderConstruction from "@/pages/Under-Construction";

const Projects = () => {
  return (
    <div className="wrapper ">
        <Title text="Projects" icon={<FaProjectDiagram />} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
           <ProjectCard
          img={amazonClone.src}
          title="Lorem Ipsum"
          link="/Under-construction"
        />
        <ProjectCard
          img={reactBD.src}
          title="Lorem Ipsum"
          link="https://reactbd.com/"
        />
        <ProjectCard
          img={cyberBlog.src}
          title="Lorem Ipsum"
          link="https://blog.reactbd.com/"
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
  )
}

export default Projects