"use client";
import { Button } from "../components/ui/button";
import Typed from "typed.js";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  // Create reference to store the DOM element containing the animation
  const el = useRef<HTMLSpanElement | null>(null); // Specify the correct type for `useRef`

  useEffect(() => {
    // Ensure `el.current` is not null before initializing Typed
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [
          "Coding",
          "Web Development",
          "Software Engineering",
          "Data Science",
          "Machine Learning",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });

      // Cleanup function to destroy Typed instance when the component unmounts
      return () => {
        typed.destroy();
      };
    }
  }, []); // Empty dependency array ensures this runs once after the first render

  return (
    <main>
      <section className="container my-20 px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            Discover a{" "}
            <span className="font-semibold">comprehensive library</span> of
            community-built <br className="hidden lg:block" /> components for{" "}
            <span className="font-semibold underline decoration-primary">
              <span ref={el} />
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Access open-source Tailwind UI components and templates <br className="hidden lg:block" /> to
            accelerate your next web app or landing page!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20"></div>
        </div>
        <div className="w-full mt-8 lg:mt-0 lg:w-1/2">
          <img
            src="/images/h.png"
            alt="Library of Tailwind Components"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

<section className="py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Pricing Plans</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Choose the plan that suits you best</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Basic Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Basic</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">$10/month</p>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400"><s>10GB Storage</s></li>
            <li className="text-gray-600 dark:text-gray-400"><s>Basic Support</s></li>
            <li className="text-gray-600 dark:text-gray-400"><s>Single User</s></li>
            <li className="text-gray-600 dark:text-gray-400">Community Access</li>
            <li className="text-gray-600 dark:text-gray-400">Weekly Updates</li>
          </ul>
          <Button className="mx-1" variant="outline">Choose Plan</Button>
        </div>
      </div>
      {/* Standard Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Standard</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">$20/month</p>
          <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">Bestseller</span>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">50GB Storage</li>
            <li className="text-gray-600 dark:text-gray-400">Priority Support</li>
            <li className="text-gray-600 dark:text-gray-400">Up to 5 Users</li>
            <li className="text-gray-600 dark:text-gray-400">Community Access</li>
            <li className="text-gray-600 dark:text-gray-400">Daily Updates</li>
          </ul>
          <Button className="mx-1" variant="outline">Choose Plan</Button>
        </div>
      </div>
      {/* Premium Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Premium</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">$30/month</p>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">200GB Storage</li>
            <li className="text-gray-600 dark:text-gray-400">24/7 Support</li>
            <li className="text-gray-600 dark:text-gray-400">Unlimited Users</li>
            <li className="text-gray-600 dark:text-gray-400">Community Access</li>
            <li className="text-gray-600 dark:text-gray-400">Real-time Updates</li>
          </ul>
          <Button className="mx-1" variant="outline">Choose Plan</Button>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="py-12 bg-white dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">What Our Clients Say</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Hear from our satisfied customers</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Testimonial 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"This service transformed our operations. Outstanding support and performance!"</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Emily Clark</h3>
          <p className="text-gray-500 dark:text-gray-300">COO, Company X</p>
        </div>
      </div>
      {/* Testimonial 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"Professional and reliable. I highly recommend their expertise."</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">David Lee</h3>
          <p className="text-gray-500 dark:text-gray-300">Head of Product, Company Y</p>
        </div>
      </div>
      {/* Testimonial 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"Amazing team with exceptional service. They exceeded all our expectations!"</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Sarah Wong</h3>
          <p className="text-gray-500 dark:text-gray-300">Marketing Director, Company Z</p>
        </div>
      </div>
      {/* Testimonial 4 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"From start to finish, their team provided top-notch support and results."</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Olivia Martinez</h3>
          <p className="text-gray-500 dark:text-gray-300">CEO, Company A</p>
        </div>
      </div>
      {/* Testimonial 5 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"Their approach is client-focused and results-driven. Highly recommended."</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Jake Thompson</h3>
          <p className="text-gray-500 dark:text-gray-300">CTO, Company B</p>
        </div>
      </div>
      {/* Testimonial 6 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"Excellent service that led to an increase in our efficiency and growth."</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Natalie Rivera</h3>
          <p className="text-gray-500 dark:text-gray-300">CFO, Company C</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Top Blogs</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out our most popular blog posts</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Blog 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <Image src="/typescript.webp" alt="Intro to TypeScript" width={400} height={256} className="w-full h-64 object-cover rounded-t-lg" />
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Mastering TypeScript</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Dive into TypeScript basics and learn how it enhances JavaScript with type safety.</p>
            <Button className="m-2" variant="outline"><Link href="/blog-post-6">Read More</Link></Button>
          </div>
        </div>
      </div>
      {/* Blog 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <Image src="/dm.jpeg" alt="Digital Marketing Strategies" width={400} height={256} className="w-full h-64 object-cover rounded-t-lg" />
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Top Digital Marketing Trends</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Explore the latest trends in digital marketing to stay ahead in 2024.</p>
            <Button className="m-2" variant="outline"><Link href="/blog-post-6">Read More</Link></Button>
          </div>
        </div>
      </div>
      {/* Blog 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <Image src="/rm.jpeg" alt="Remote Work Best Practices" width={400} height={256} className="w-full h-64 object-cover rounded-t-lg" />
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Remote Work Success Tips</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Learn strategies for maintaining productivity and balance while working remotely.</p>
            <Button className="m-2" variant="outline"><Link href="/blog-post-6">Read More</Link></Button>
          </div>
        </div>
      </div>
      {/* Blog 4 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <Image src="/cs.jpeg" alt="Guide to Cybersecurity" width={400} height={256} className="w-full h-64 object-cover rounded-t-lg" />
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Cybersecurity Essentials</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Protect your data with these fundamental cybersecurity practices.</p>
            <Button className="m-2" variant="outline"><Link href="/blog-post-6">Read More</Link></Button>
          </div>
        </div>
      </div>
      {/* Blog 5 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <Image src="/web.jpeg" alt="Web Development Best Practices" width={400} height={256} className="w-full h-64 object-cover rounded-t-lg" />
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Web Development Best Practices</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Stay updated with essential practices to improve your web development projects.</p>
            <Button className="m-2" variant="outline"><Link href="/blog-post-6">Read More</Link></Button>
          </div>
        </div>
      </div>
      {/* Blog 6 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <Image src="/seo.jpeg" alt="SEO Optimization Techniques" width={400} height={256} className="w-full h-64 object-cover rounded-t-lg" />
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">SEO Optimization Techniques</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Boost your site&apos;s visibility with these essential SEO strategies.</p>
            <Button className="m-2" variant="outline"><Link href="/blog-post-6">Read More</Link></Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  )
    };