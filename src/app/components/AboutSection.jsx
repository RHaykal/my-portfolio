"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import Tab from './Tab'

const AboutSection = () => {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition()

  const tabHandleChange = (id) => {
    startTransition(() => {
        setTab(id)
    })
  }

  const TabContent = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className='grid grid-cols-2'>
                <div className='pl-2'>
                    <ul className='list-disc'>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Next.js</li>
                    </ul>
                </div>
                <div className='pl-2'>
                    <ul className='list-disc'>
                        <li>Python</li>
                        <li>PHP</li>
                        <li>RDBMS and NoSQLDBMS</li>
                    </ul>
                </div>
            </div>

            
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Computer Science Degree, Perbanas Institute Jakarta 2023</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'> 
                <b className='text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-fuchsia-400'>Professional</b>
                <li>Fullstack Developer, PT.Transforme Indoensia</li><br />
                <b className='text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-fuchsia-400'>Internship</b>
                <li>Software Engineer Interm, MSIB Batch 3 By Kampus Merdeka with Hashmicro Solusi Indonesia</li><br />
                {/* <b className='text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-fuchsia-400'>Additional</b>
                <li>Assitant Lecturer, Perbanas Institute Jakarta</li> */}
            </ul>
        )
    }
]

  return (
    <section className='text-white' id='about'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src={'/images/art2.jpg'} alt='about image' height={500} width={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full '>
                <h2 className='text-4xl font-bold text-white mb-4 mt-4'>About Me</h2>
                <p className='text-base text-justify'>
                    {`I am a an adaptable developer with a vision to contribute to our society through code. I have an in depth understanding in Node.js, Express.js, Next.js, Python, PHP, and proficiency in both relational (RDBMS) and NoSQL databases. Recognized as a fast learner, always eager to expand knowledge and collaborate effectively as a team player.  Enthusiastic to make a meaningful contribution to your team's success.`}
                </p>
                <div className='flex flex-row mt-8'>
                    <Tab selectTab={() => tabHandleChange("skills")} active={tab === "skills"}>Skills</Tab>
                    <Tab selectTab={() => tabHandleChange("education")} active={tab === "education"}>Education</Tab>
                    <Tab selectTab={() => tabHandleChange("experience")} active={tab === "experience"}>Experience</Tab>
                </div>
                <div className="mt-8">{TabContent.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection