"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-fuchsia-400">
              {" Hello, I'm "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Raafi Haykal',
                2000,
                'Software Developer',
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                // 'Backend Developer',
                // 2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            {"Welcome to my portfolio. I invite you to look through my recent project to get a better understanding of my adeptability and the tech that i'm familiar with."}
          </p>
          <div>
            <button className="bg-gradient-to-br from-teal-500 via-blue-500 to-fuchsia-500 text-white w-full sm:w-fit px-6 py-3 rounded-full mr-4 hover:bg-gradient-to-br hover:from-teal-600 hover:via-blue-600 hover:to-fuchsia-600">Hire Me</button>
            <button className="bg-gradient-to-br from-teal-500 via-blue-500 to-fuchsia-500 text-white w-full sm:w-fit mt-3 px-1 py-1 rounded-full hover:bg-slate-800">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
              </span>
            </button>
        </div>
        </div>

        <div className="col-span-5 mt-4 lg:mt-0 flex items-center justify-center">
          {/* <!-- Content goes here, including the <Image /> component --> */}
          <div className="rounded-full bg-[#181818] w-[220px] h-[220px] lg:w-[260px] lg:h-[260px] relative">
            <Image 
              src="/images/frog-removebg-preview.png" alt="my picture" 
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={200}
              height={200}
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
