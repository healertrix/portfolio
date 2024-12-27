"use client";
import ParticleShower from './components/ParticleShower';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CursorArrowRaysIcon, 
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  CommandLineIcon 
} from '@heroicons/react/24/outline';

const technologies = {
  frontend: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind',
    'Redux',
    'Framer Motion',
  ],
  backend: ['Node.js', 'Python', 'REST APIs', 'GraphQL', 'Express', 'FastAPI'],
  data: ['PostgreSQL', 'MongoDB', 'Redis', 'AWS S3', 'Prisma', 'Supabase'],
  devops: ['Docker', 'CI/CD', 'Linux', 'Git', 'AWS', 'Kubernetes'],
};

const serviceDetails = [
  {
    title: 'Full-Stack Development',
    Icon: CommandLineIcon,
    description:
      'Expert in building scalable web applications with modern frameworks, RESTful APIs, and robust backend systems.',
  },
  {
    title: 'Cloud & DevOps',
    Icon: DevicePhoneMobileIcon,
    description:
      'AWS infrastructure setup, CI/CD pipelines, containerization, and automated deployment workflows.',
  },
  {
    title: 'System Architecture',
    Icon: CursorArrowRaysIcon,
    description:
      'Designing secure, scalable systems with authentication, database optimization, and microservices.',
  },
  {
    title: 'UI/UX Solutions',
    Icon: PaintBrushIcon,
    description:
      'Creating responsive, accessible interfaces with modern design patterns and optimal user experience.',
  },
];

const projectDetails = [
  {
    title: 'Wedding Theory',
    description:
      "Developed and designed the complete digital platform for Bangalore's leading wedding photography agency. Built a custom CMS with modern features including gallery management, blog system, and admin dashboard. Implemented full-stack solution with AWS infrastructure for optimal performance.",
    link: 'https://www.weddingtheory.co.in/',
    tech: [
      'Next.js',
      'PostgreSQL',
      'AWS S3',
      'Custom CMS',
      'Admin Dashboard',
      'DevOps',
      'UI/UX Design',
      'Backend API',
    ],
  },
  {
    title: 'WatchYo',
    description:
      'A modern entertainment discovery platform that serves as your ultimate movie and TV guide. Features include universal search across movies, TV shows, and anime, dynamic content discovery, personalized recommendations, and an immersive trailer preview system. Built with performance and user experience at its core.',
    link: 'https://watchyo.vercel.app',
    tech: [
      'Next.js',
      'Tailwind CSS',
      'REST APIs',
      'Content Discovery',
      'Dynamic Search',
      'Responsive Design',
    ],
  },
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
              Hey there, I&apos;m{' '}
              <span className='font-medium'>Abhinav Kumar</span>{' '}
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
                Transforming Ideas into{' '}
                <span className='text-gray-400'>Exceptional Digital</span>{' '}
                Experiences
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className='max-w-xl mx-auto text-gray-400 leading-relaxed text-sm sm:text-base'
              >
                Full-stack developer passionate about crafting elegant solutions
                to complex challenges. Turning vision into reality with clean
                code and innovative thinking.
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
                <Link
                  href='hhttps://www.weddingtheory.co.in/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Latest Works
                </Link>
              </motion.button>
            </div>
          </div>

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
              className='text-3xl sm:text-4xl font-bold mb-8 text-center'
            >
              Featured Projects
            </motion.h3>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {projectDetails.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='group relative h-auto min-h-[320px] border border-gray-800/50 rounded-xl overflow-hidden 
                            backdrop-blur-sm hover:border-gray-700 transition-all duration-300
                            hover:shadow-lg hover:shadow-white/5'
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
                      className='h-full p-6 sm:p-8 flex flex-col justify-between gap-4 
                                hover:bg-white/5 transition-all duration-300'
                    >
                      <div>
                        <motion.h4
                          className='font-bold text-2xl mb-4 text-white/90
                                    group-hover:text-white transition-colors duration-300'
                        >
                          {project.title}
                        </motion.h4>
                        <p className='text-base text-gray-400 leading-relaxed mb-6'>
                          {project.description}
                        </p>
                      </div>

                      <div className='flex flex-wrap gap-2'>
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className='px-4 py-1.5 text-sm bg-white/5 rounded-full 
                                   text-gray-300 group-hover:text-white group-hover:bg-white/10
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
              Areas of <span className='text-gray-400'>Expertise</span>
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
                    <service.Icon className='h-8 w-8 text-white' />
                  </div>
                  <h4 className='font-bold mb-2'>{service.title}</h4>
                  <p className='text-sm text-gray-400 leading-relaxed'>
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Technologies Section */}
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
              className='text-lg sm:text-xl font-semibold mb-12 text-center'
            >
              Tech Stack & <span className='text-gray-400'>Tools</span>
            </motion.h3>

            <div className='space-y-12 max-w-5xl mx-auto px-4'>
              {Object.entries(technologies).map(
                ([category, techs], categoryIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                    className='relative'
                  >
                    <div className='flex items-center gap-4 mb-6'>
                      <h4 className='text-sm font-medium text-gray-400 uppercase tracking-wider min-w-[100px]'>
                        {category}
                      </h4>
                      <div className='h-[1px] bg-gray-800 flex-grow'></div>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3'>
                      {techs.map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          className='group'
                        >
                          <div
                            className='px-4 py-3 bg-white/5 backdrop-blur-sm border border-gray-800/50 
                                    rounded-lg text-sm text-gray-300 hover:bg-white/10 
                                    hover:border-gray-700 transition-all duration-300
                                    hover:scale-105 transform cursor-default
                                    flex items-center justify-center text-center h-full'
                          >
                            {tech}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </main>
      </div>
    </>
  );
}
