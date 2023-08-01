// components/Banner.tsx
import Image from "next/image";
import ProfileImg from "../public/img/profileImg.png";

const Banner = () => {
  return (
    <div className="wrapper container mx-auto px-4 md:px-8 py-12">
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10">
        {/* Image */}
        <div className="w-[11rem] h-[11rem] md:w-[13rem] md:h-[13rem] rounded-full bg-black">
          <Image
            className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
            src={ProfileImg}
            alt="ProfileImg"
          />
        </div>
        {/* Description */}
        <div className="w-full md:w-3/4 flex flex-col items-center md:items-start gap-4 md:gap-6">
          <h1 className="text-[1.75rem] md:text-5xl font-bold text-white">Ezekiel Narvasa</h1>
          <h3 className="text-[1.25rem] md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
            Full Stack Developer
          </h3>
          <p className="text-base md:text-lg tracking-wide text-center md:text-left">
            An incoming fourth-year computer science student looking for an IT internship who
            possesses a solid fundamental foundation in programming, data structures, and
            algorithms, with coursework and independent studies in computer networking, information
            security, and cryptography.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
