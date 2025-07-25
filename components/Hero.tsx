import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffects';
import MagicButton from './MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='pb-20 pt-36' >
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 
            md:-top-20 h-screen' fill="white"/>
            <Spotlight className='top-10 left-full h-[80vh]
            w-[50vw]' fill="purple"/>
            <Spotlight className='top-28 left-80 h-[80vh]
            w-[50vw]' fill="blue"/>
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.02] bg-grid-black/[0.2]
          flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center
          dark:bg-black-100 bg-white 
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

                <div className='flex justify-center relative my-20 z-10'>
                  <div className='max-w-[89vw] md:max-w-screen-2xl lg:mx-w[60vw]
                   flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center
                     text-blue-100 max-w-80'>
                      Building with The Future in Mind.
                    </h2>
                    <TextGenerateEffect
                      words='Transforming Ideas into Lasting Experiences'
                      className='text-[40px] md:text-5xl text-center lg:text-6xl'
                    />

                    <p>
                      Hi there! I&apos;m Modou Lamin Jagne, a Software developer based in The Gambia.
                    </p>

                    <a href='#about'>
                      <MagicButton 
                        title="Check my work" 
                        icon = {<FaLocationArrow />} // Icon from react-icons library. className='ml-2'
                        position='right'
                      />
                    </a>

                  </div>
                </div>
    </div>
  )
}
export default Hero;