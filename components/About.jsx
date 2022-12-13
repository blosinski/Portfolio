import Image from 'next/image';
import React from 'react';
import Avatar from '../public/assets/Picture.jpeg';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#d43f3f]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">Hey there!</p>
          <p className="py-2 text-gray-600">
            My name is Brendan and I am an iOS Engineer who loves creating
            mobile apps! My interest in Mobile Development started back in 2018
            when I started looking into how apps were created. I have been
            learning ever since and now I have a passion for developing high
            quality mobile applications that provide an excellent user
            experience and incredible functionality!
          </p>
          <p className="py-2 text-gray-600">
            I currently am enrolled at Champlain College in their Software
            Development program, and I will be graduating in May of 2023!
          </p>
          <p className="py-2 text-gray-600">
            Check out some of my latest projects below.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={Avatar} alt="/"></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
