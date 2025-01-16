import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700">
  <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
    <div className="flex flex-col md:flex-row-reverse"> {/* Use md:flex-row-reverse for image on the right on larger screens */}
      <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
        <div className="relative w-300 h-400 rounded-2xl overflow-hidden">
          <Image
            src="/images/zpic.jpeg"
            alt="Profile"
            // layout="fill"
            objectFit="cover"
            className="rounded-full"
            width={300}
            height={400}
          />
        </div>
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-red-900 dark:text-white text-center mb-4">About Me</h1>
        <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
          <span className='text-cyan-600 text-xl'>Assalam-o-Aleikum!</span><br />
          
           I&apos;m <span className='text-cyan-600 text-2xl'>Zakia</span> Bashir,<br />
           Welcome to my portfolio! I&apos;m excited to have you here. As you
            scroll down, you&apos;ll get an in-depth look at my skills, the
            exciting projects I&apos;ve worked on, and how I can collaborate
            with you to bring your creative ideas to life. Whether it&apos;s
            developing responsive, visually appealing websites or crafting
            innovative digital experiences, I take pride in combining creativity
            with technical expertise.      </p>
        <p className="text-gray-600 dark:text-gray-50 text-lg">
Explore my journey, see the impact of my
            work and learn how I can help turn your vision into reality with
            solutions tailored to your unique needs. Let&apos;s build something
            amazing together!           </p>
      </div>
    </div>
  </div>
</div>


<section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white"><span className='text-cyan-300'>Zakia&apos;s</span> Journey as a Coder</h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
        From curious beginner to skilled developer, explore how <span className='text-cyan-300'>Zakia</span> mastered the world of coding.
      </p>
    </div>
    <div className="space-y-12">
      
      {/* Stage 1: The Spark of Curiosity */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3">
          <Image src="/images/m5.png"  width={300}
            height={400} alt="Zakia as a beginner" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">The Spark of Curiosity</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-50">
            Zakia&apos;s journey began with a simple question: &quot;How does technology work?&quot; This spark ignited her passion for learning and led her to her first lines of code, marking the start of a fascinating journey.
          </p>
        </div>
      </div>

      {/* Stage 2: Diving Deeper */}
      <div className="flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-1/3">
          <Image src="/images/food.jpg"  width={300}
            height={400} alt="Zakia learning new skills" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Diving Deeper</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-50">
            As Zakia progressed, she started experimenting with different programming languages, from JavaScript to Nextjs. Her curiosity pushed her to tackle increasingly complex challenges, paving the way for a deeper understanding of software development.
          </p>
        </div>
      </div>

      {/* Stage 3: Taking on Challenges */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3">
          <Image src="/images/p.png"  width={300}
            height={400} alt="Zakia working on a big project" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Taking on Challenges</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-50">
            Zakia embraced challenges head-on, working on collaborative projects, contributing to open-source, and building applications that tested her skills. These experiences transformed her from a learner to a confident coder, ready to take on complex projects.
          </p>
        </div>
      </div>

      {/* Stage 4: Giving Back */}
      <div className="flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-1/3">
          <Image src="/images/p1.png"  width={300}
            height={400} alt="Zakia mentoring others" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Giving Back</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-50">
            Now a skilled developer, Zakia shares her knowledge with others by mentoring, contributing to coding communities, and giving back to those who are just beginning their journey. Her story inspires others to keep learning and growing in the tech world.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}