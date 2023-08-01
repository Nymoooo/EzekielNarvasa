import React from 'react';
import SocialLink from './SocialLink';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold">Hire Me!</h2>
        <p className="text-base md:text-lg tracking-wide font-medium text-center">
          I am always open to discussing your project, improving your online presence, or helping
          with your website design and converting challenges.
        </p>
        <a href="mailto:narvasa0326@gmail.com">
          <button className="w-52 md:w-60 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-white font-xl rounded-lg hover:from-indigo-950 hover:to-blue-600">
            Connect With Me!
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center flex-wrap justify-center gap-8">
        <SocialLink title="Github" link="https://github.com/Nymoooo" />
        <SocialLink title="Linkedin" link="https://www.linkedin.com/in/ezekiel-narvasa-/" />
        <SocialLink title="Facebook" link="https://web.facebook.com/TheDestroyer75" />
        <SocialLink title="Instagram" link="https://www.instagram.com/pink.ezborja/?hl=en" />
        <SocialLink title="Nextjs" link="https://vercel.com/nymoooo" />
      </div>
    </div>
  );
};

export default Contact;
