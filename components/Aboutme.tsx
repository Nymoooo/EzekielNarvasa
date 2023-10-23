import { SiInformatica } from "react-icons/si"
import Title from "./Title"


function Aboutme() {
    return (
        <div className="wrapper">
            <Title text="About Me" icon={ <SiInformatica />} />
            <div className="text-lg tracking-wide flex flex-col gap-6 " >
                
                <p>
                
          I'm a graduating Bachelor of Science in Computer Science student at the University of Caloocan City, Philippines, with solid grasp in programming, website development, and website content writing. My CS journey involves optimizing AI tools and techs like NPM, Vercel, and Git. Embracing new tech fuels my passion, while leading teams using different project development approaches sharpens my confidence and communication strengths.
                </p>
                <p> 
                I am always looking to improve my skills and stay up-to-date with the latest best practices in web development. I am excited to continue growing as a developer and making meaningful contributions to projects and teams.
                </p>
            </div>
        </div>
    )
}

export default Aboutme
