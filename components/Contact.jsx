// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import Script from 'next/script';
// import { AiOutlineMail } from 'react-icons/ai';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
// import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
// import ContactImg from '../public/assets/contact.svg';
// import { formSubmit } from '../pages/index.js';
// import { handleParam } from '../pages/index.js';

// const Contact = () => {
//   return (
//     <div id="contact" className="w-full lg:h-screen">
//       <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
//         <p className="text-xl tracking-widest uppercase text-[#d43f3f]">
//           Contact
//         </p>
//         <h2 className="py-4">Get In Touch</h2>
//         <div className="grid lg:grid-cols-5 gap-8">
//           {/* left */}
//           <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
//             <div className="lg:p-4 h-full ">
//               <div>
//                 <Image
//                   className="rounded-xl ease-in duration-300"
//                   src={ContactImg}
//                   alt="/"
//                 />
//               </div>
//               <div>
//                 <h2 className="py-2">Brendan Losinski</h2>
//                 <p>Mobile Developer</p>
//                 <p className="py-4">
//                   If you have questions or would like to get in touch feel free
//                   to contact me by filling out the form section or clicking the
//                   links below. I look forward to being in touch!
//                 </p>
//               </div>
//               <div>
//                 <p className="uppercase pt-8">Connect With Me</p>
//                 <div className="flex items-center justify-between py-4">
//                   <a
//                     href="https://www.linkedin.com/in/brendan-losinski-60abb9208/"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
//                       <FaLinkedinIn />
//                     </div>
//                   </a>
//                   <a
//                     href="https://github.com/blosinski?tab=repositories"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
//                       <FaGithub />
//                     </div>
//                   </a>
//                   <a href="mailto:brendan.losinski@yahoo.com">
//                     <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
//                       <AiOutlineMail />
//                     </div>
//                   </a>
//                   <a href="Resume.pdf" target="_blank" download>
//                     <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
//                       <BsFillPersonLinesFill />
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* right */}
//           <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
//             <div className="p-4">
//               <form
//                 action="https://getform.io/f/61bfe690-1106-4332-b214-7a95774dbddd"
//                 onSubmit={formSubmit}
//               >
//                 <div className="grid md:grid-cols-2 gap-4 w-full py-2">
//                   <div className="flex flex-col">
//                     <label htmlFor="name" className="uppercase text-sm py-2">
//                       Name
//                     </label>
//                     <input className="border-2 rounded-lg p-3 flex border-gray-300" />
//                   </div>
//                   <div className="flex flex-col">
//                     <label htmlFor="phone" className="uppercase text-sm py-2">
//                       Phone Number
//                     </label>
//                     <input className="border-2 rounded-lg p-3 flex border-gray-300" />
//                   </div>
//                 </div>
//                 <div className="flex flex-col py-2">
//                   <label className="uppercase text-sm py-2">Email</label>
//                   <input className="border-2 rounded-lg p-3 flex border-gray-300" />
//                 </div>
//                 <div className="flex flex-col py-2">
//                   <label className="uppercase text-sm py-2">Subject</label>
//                   <input className="border-2 rounded-lg p-3 flex border-gray-300" />
//                 </div>
//                 <div className="flex flex-col py-2">
//                   <label className="uppercase text-sm py-2">Message</label>
//                   <textarea className="border-2 rounded-lg p-3 border-gray-300"></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full p-4 bg-[#d43f3f] text-gray-100  mt-4"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center py-12">
//           <Link href="/">
//             <a>
//               <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
//                 <HiOutlineChevronDoubleUp
//                   className="text-[#d43f3f]"
//                   size={30}
//                 />
//               </div>
//             </a>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
