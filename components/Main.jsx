import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let&rsquo;s build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hey! I&apos;m <span className="text-[#d43f3f]">Brendan</span>
          </h1>
          <h1 className="py-2 text-gray-400">A Mobile Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            As a dedicated software engineer specializing in iOS Development, I
            am passionate about creating user-friendly applications and staying
            updated on industry trends. If you&apos;re interested in discussing
            potential collaborations or how my expertise can contribute to your
            project, please contact me using the methods below. I look forward
            to connecting with you and working together to create outstanding
            mobile experiences.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/brendan-losinski-60abb9208/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/blosinski"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a href="mailto:brendan.losinski@yahoo.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <a href="SE-Resume.pdf" target="_blank" download>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
