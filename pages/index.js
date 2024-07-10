//https://youtu.be/qp0-L_M3Ad4

// next image
import Image from "next/image";

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

//framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 
      via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 
        xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1 
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
           className="h1">
            Идеи Трансформации <br /> В {' '}
            <span className="text-accent">Цифровой Реальности</span>
           </motion.h1>
          {/* subtitle */}
          <motion.p 
          variants={fadeIn('down', 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Как опытный профессионал в данной области, могу уверенно заявить, что способен предложить комплексное решение любых задач, связанных с веб-разработкой. Мои навыки включают в себя владение различными языками программирования, опыт работы с базами данных, архитектурой веб-приложений, а также умение глубоко анализировать и оптимизировать код. Я готов внести существенный вклад в развитие вашего проекта и обеспечить его успех и конкурентоспособность. С нетерпением жду возможности обсудить детали с вами и продемонстрировать мои навыки в действии. 
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div 
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden xl:flex"
          >
            <ProjectsBtn />
            </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right
        xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
        </div>
        {/* particles */}
        <ParticlesContainer/>
        {/* avatar img */}
        <motion.div 
           variants={fadeIn('up', 0.5)}
           initial='hidden'
           animate='show'
           exit='hidden'
           transition={{ duration: 1, ease:'easeInOut'}}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[4%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

// 27 min //Build a Portfolio Website With Next JS, Tailwind CSS & Framer Motion
