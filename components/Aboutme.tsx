import { SiInformatica } from "react-icons/si"
import Title from "./Title"


function Aboutme() {
    return (
      <div className="wrapper">
        <Title text="About Me" icon={<SiInformatica />} />
        <div className="text-lg tracking-wide flex flex-col gap-6 ">
          <p>
            My Computer Science journey has led me to optimize AI tools and
            familiarize technologies like NPM, Vite, Xampp, Vercel, and Git.
            Embracing emerging tech fuels my passion, while leading project
            teams hones my communication and leadership skills.
          </p>
          <p>
            I am always looking to improve my skills and stay up-to-date with
            the latest best practices in web development. I am excited to
            continue growing as a developer and making meaningful contributions
            to projects and teams.
          </p>
        </div>
      </div>
    );
}

export default Aboutme
