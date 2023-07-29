import React from 'react'
import SocialLink from './SocialLink'


const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center" >
      <h2 className="text-2xl font-bold"> Hire Me! </h2>
        <p className="text-lg tracking-wide font-medium text-center"> I am always open to discussing your project, improving your online presence, or helping with Your website design and converting challenges. </p>
      <a href="mailto:narvasa0326@gmail.com"> 
      <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 font-xl text-white rounded-lg hover:from-indigo-950 hover:to-blue-600"> Connect With Me! </button>
      </a>
      </div>
      <div className="mt-8 flex items-center flex-wrap justify-center gap-8">
        <SocialLink title="Github" link="https://github.com/Nymoooo" />

        <SocialLink
          title="Linkedin"
          link="https://www.linkedin.com/in/ezekiel-narvasa-/"
        />
        <SocialLink
          title="Facebook"
          link="https://web.facebook.com/TheDestroyer75"
        />
        <SocialLink title="Instagram" link="https://www.instagram.com/pink.ezborja/?hl=en" />
        <SocialLink title="Nextjs" link="https://vercel.com/nymoooo" />
      </div>
    </div>
  )
}

export default Contact