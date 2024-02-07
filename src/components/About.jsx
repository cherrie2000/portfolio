import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm an undergard with experience in C++ and JavaScript, and expertise in frameworks like React, Node.js. I'm a quick learner and participated in the Smart India Hackathon 2022, I oversaw a winning team that demonstrated creativity and agility. With a strong basis in computer science, I guarantees end-to-end solutions and I am skilled in both front-end and back-end development. As a semi-finalist in the Google Girl Hackathon 2023, which has proved coding prowess in competitive contexts.
        <br/>
        Connect me on: 
        <a href="https://www.linkedin.com/in/cherrie-verma-31b21b207/" target="_blank"> LinkedIn,</a>
        <a href="https://github.com/cherrie2000/"> Github</a>
        
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About,"about");