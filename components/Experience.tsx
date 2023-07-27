import Title from './Title'
import {MdWork} from 'react-icons/md'
import {VscLaw} from 'react-icons/vsc'
import ExperienceCard from './ExperienceCard'
import {SiReactivex, SiToptal, SiFreelancer, SiFiverr} from 'react-icons/si'

const Experience = () => {
  return (
  
        <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ExperienceCard
          title="Human Rights and People Empowerment Center"
          subTitle="Website Developer Present"
          icon={<VscLaw />}
        />
        <ExperienceCard
          title="RTD Computer Center"
          subTitle="Computer Technician Intern"
          icon={<SiToptal />}
        />
        <ExperienceCard
          title="Jokshop Comshop"
          subTitle="Computer Shop Keeper/Attendant"
          icon={<SiFreelancer />}
        />

        <ExperienceCard
          title="Fiverr"
          subTitle="MERN Stack Developer 2019 - 2020"
          icon={<SiFiverr />}
        />
      </div>
      </div>
  );
};

export default Experience;