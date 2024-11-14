"use client";

import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsDownload, BsStackOverflow, BsFillMoonStarsFill } from 'react-icons/bs';
import { FaHandPointDown, FaGooglePlay } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const images = {
    deved: "/dev-ed-wave.png",
    code: "/code.png",
    design: "/design.png",
    consulting: "/consulting.png",
    web1: "/web1.png",
    web2: "/web2.png",
    web3: "/web3.png",
    web4: "/web4.png",
  };

  const overlayImages = [
    {
      imageUrl: images.web1,
      icons: [
        { icon: AiFillGithub, link: "https://github.com/R3-da/Insectify" },
        { icon: FaGooglePlay, link: "https://play.google.com/store/apps/details?id=com.reda.insectify" },
      ],
      description: "Insectify : Identify Beetles Using A.I",
    },
    {
      imageUrl: images.web2,
      icons: [
        { icon: AiFillGithub, link: "https://github.com/R3-da/Daytics" },
        { icon: BsDownload, link: "/daytics.apk" },
      ],
      description: "Daytics : Plan & Keep Track Of Your Day",
    },
    {
      imageUrl: images.web3,
      icons: [
        { icon: AiFillGithub, link: "https://github.com/R3-da/S.T.S_v6" },
        { icon: BsDownload, link: "/sts.apk" },
      ],
      description: "ShapeSwipe :  Fidget & Play With Shapes",
    },
    {
      imageUrl: images.web4,
      icons: [
        { icon: AiFillGithub, link: "https://github.com/R3-da/JamsterScanner" },
      ],
      description: "Jamster : A MIDI Scanner/Transposer ",
    },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>H.Reda Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl"></h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {window.open('/resume.pdf', '_blank');}}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Haddan Reda
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Mobile/Web Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Connect with me down below!<FaHandPointDown className="inline-block ml-2 text-teal-600" />
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://www.linkedin.com/in/r-h-7zh"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {window.open('https://www.linkedin.com/in/r-h-7zh', '_blank');}}
              >
                <AiFillLinkedin/>
              </a>
              <a
                href="https://stackoverflow.com/u/18568328"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {window.open('https://stackoverflow.com/u/18568328', '_blank');}}
              >
                <BsStackOverflow/>
              </a>
              <a
                href="https://github.com/R3-da"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {window.open('https://github.com/R3-da', '_blank');}}
              >
                <AiFillGithub/>
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={images.deved} alt="" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Bio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              👨‍💻 Android & Web Developer | Open-Source Enthusiast,
              🚀 Passionate Software Developer with expertise in Android (Kotlin, React Native) and web development (HTML, CSS, JS, SQL, PHP, React.js, Angular).
              Basic knowledge in DevOps (Docker, Kubernetes, AWS, Jenkins, CI/CD).
              🌱 Actively contributing to open-source projects on GitHub.
              🛠️ Eager to make an impact in the tech industry.
              🤝 Let's connect!.
              <span className="text-teal-500">  </span>
              <span className="text-teal-500"> </span>
              With a portfolio featuring successful freelance projects 
              and contributions to open source initiatives, 
              I am dedicated to delivering seamless user experiences.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Beyond coding, my passion extends to designing immersive soundscapes 
            that enhance the overall user engagement. 
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Unlock the full potential of your projects 
            as we work together to bring them to life with expertise and dedication.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={images.code} alt="" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Android/Web Dev
              </h3>
              <p className="py-2">
                Building clean architecture android Apps and Websites, and making ideas come to life.
              </p>
              <h4 className="py-4 text-teal-600">Technologies I Use</h4>
              <p className="text-gray-800 py-1">Native Android Dev</p>
              <p className="text-gray-800 py-1">React Native</p>
              <p className="text-gray-800 py-1">React JS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={images.design} alt="" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                UI/UX
              </h3>
              <p className="py-2">
                Creating elegant designs suited for each use case following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Adobe XD</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={images.consulting} alt="" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Sound Design</h3>
              <p className="py-2">
                Sound design and music production.
              </p>
              <h4 className="py-4 text-teal-600">DAW&apos;s I Use</h4>
              <p className="text-gray-800 py-1">FL Studio</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {overlayImages.map((overlayImage, index) => (
              <div className="basis-1/3 flex-1 relative" key={index}>
                <div className="group rounded-lg overflow-hidden">
                  <Image
                    className="rounded-lg object-cover"
                    width={1000}
                    height={1000}
                    layout="responsive"
                    src={overlayImage.imageUrl}
                    alt={`Image ${index + 1}`}
                  />
                  <div className="overlay-icons absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <div className="flex items-center justify-center flex-wrap">
                      {overlayImage.icons.map((item, iconIndex) => {
                        const IconComponent = item.icon;
                        return (
                          <a
                            key={iconIndex}
                            href={item.link}
                            download={item.link.endsWith(".apk")} // Add the download attribute conditionally for .apk links
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-100 text-4xl m-2 transition-colors duration-300 hover:text-white"
                          >
                            <IconComponent />
                          </a>
                        );
                      })}
                    </div>
                    <p className="text-white text-sm mt-2 text-center font-bold">{overlayImage.description}</p> {/* Added description */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
