"use client";
import ParticleShower from './components/ParticleShower';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CursorArrowRaysIcon, 
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  CommandLineIcon 
} from '@heroicons/react/24/outline';

const technologies = [
  'Node.js',
  'Next.js',
  'React.js',
  'TypeScript',
  'Tailwind CSS',
  'Python',
  'C++',
  'Java',
  'PHP',
  'MySQL',
  'MongoDB',
  'PostgreSQL',
  'Linux',
  'Docker',
  'Redis',
  'Git',
];

const serviceDetails = [
  {
    title: 'UX & UI',
    Icon: CursorArrowRaysIcon,
    description: 'Designing interfaces that are intuitive and enjoyable to use.'
  },
  {
    title: 'Web & Mobile App',
    Icon: DevicePhoneMobileIcon,
    description: 'Transforming ideas into exceptional web and mobile app experiences.'
  },
  {
    title: 'Design & Creative',
    Icon: PaintBrushIcon,
    description: 'Crafting visually stunning designs that connect with your audience.'
  },
  {
    title: 'Development',
    Icon: CommandLineIcon,
    description: 'Bringing your vision to life with the latest technology and design trends.'
  }
];

const projectDetails = [
  {
    title: 'WatchYo',
    description: 'Your ultimate entertainment hub for movies, TV shows, and anime.',
    link: 'https://watchyo.vercel.app',
    tech: ['Next.js', 'Tailwind CSS']
  },
  {
    title: 'Wedding Theory',
    description: 'Wedding photography agency website showcasing premium photography, print, music and video services. Leaders in the market for wedding photography in India.',
    link: 'https://wedding-theory.vercel.app/',
    tech: ['Next.js', 'Tailwind CSS', 'Sanity CMS']
  }
];

export default function Home() {
  return (
    <>
      <ParticleShower />
      <div className='min-h-screen text-white'>
        {/* Header/Nav with fade-in animation */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='p-6 flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto gap-6'
        >
          <div>
            <a
              href='mailto:abhinav.webdj@gmail.com'
              className='text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300'
              target='_blank'
              rel='noopener noreferrer'
            >
              abhinav.webdj@gmail.com
            </a>
          </div>
          <nav className='flex gap-6'>
            <Link
              href='https://www.linkedin.com/in/abhinav-kumar-95849a214/'
              className='text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </Link>
            <Link
              href='https://github.com/healertrix'
              className='text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </Link>
          </nav>
        </motion.header>

        <main className='max-w-6xl mx-auto px-6 pt-10 sm:pt-24'>
          <div className='flex flex-col items-center text-center gap-8 sm:gap-12'>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-2xl sm:text-3xl font-light'
            >
              Hi, I'm{' '}
              <span className="font-medium">Abhinav Kumar</span>{' '}
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 2,
                  duration: 2.5,
                }}
                style={{ display: 'inline-block', originX: 0.7, originY: 0.7 }}
              >
                👋
              </motion.span>
            </motion.h1>

            <div className='space-y-6'>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='text-2xl sm:text-5xl font-bold leading-tight'
              >
                Building{' '}
                <span className='text-gray-400'>digital solutions</span> that
                matter.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className='max-w-xl mx-auto text-gray-400 leading-relaxed text-sm sm:text-base'
              >
                I craft precise and effective code to solve complex problems
                with simple solutions.
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className='mt-4 px-6 py-2.5 border border-gray-600 rounded-full 
                          hover:bg-white/10 transition-colors duration-300 text-sm'
              >
                Latest Work
              </motion.button>
            </div>
          </div>

          {/* Services Section with stagger animation */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='mt-24 sm:mt-32'
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='text-center mb-12 text-xl sm:text-2xl font-medium'
            >
              Collaborate with{' '}
              <span className='text-gray-400'>brands and agencies</span>
            </motion.h3>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              {serviceDetails.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  viewport={{ once: true }}
                  className='p-6 border border-gray-800/50 rounded-lg 
                            backdrop-blur-sm hover:border-gray-700 transition-colors duration-300'
                >
                  <div className='mb-3'>
                    <service.Icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className='font-bold mb-2'>{service.title}</h4>
                  <p className='text-sm text-gray-400 leading-relaxed'>
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Projects Section with fade-in animation */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='mt-24 sm:mt-32'
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='text-xl sm:text-2xl font-bold mb-8'
            >
              Featured Projects
            </motion.h3>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {projectDetails.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='group relative h-[280px] border border-gray-800/50 rounded-lg overflow-hidden 
                            backdrop-blur-sm hover:border-gray-700 transition-all duration-300'
                >
                  <Link
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block h-full'
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className='h-full p-6 sm:p-8 flex flex-col justify-between 
                                hover:bg-white/5 transition-all duration-300'
                    >
                      <div>
                        <motion.h4 
                          className='font-bold text-xl mb-4 text-white/90
                                    group-hover:text-white transition-colors duration-300'
                        >
                          {project.title}
                        </motion.h4>
                        <p className='text-sm text-gray-400 leading-relaxed mb-6'>
                          {project.description}
                        </p>
                      </div>
                      
                      <div className='flex flex-wrap gap-2'>
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className='px-3 py-1 text-xs bg-white/5 rounded-full 
                                   text-gray-400 group-hover:text-gray-300
                                   transition-colors duration-300'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Technologies Section with stagger animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='mt-24 sm:mt-32 pb-16'
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='text-lg sm:text-xl font-semibold mb-8 text-center'
            >
              Technologies I Work With
            </motion.h3>
            <div className='flex flex-wrap justify-center gap-3'>
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  viewport={{ once: true }}
                  className='px-4 py-2 bg-white/5 rounded-full text-xs 
                             text-gray-300 hover:bg-white/10 transition-colors duration-300'
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </main>
      </div>
    </>
  );
}
