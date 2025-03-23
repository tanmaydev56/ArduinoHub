import React from "react";

const Founder = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-6 py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl text-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="/Founder.jpg" // Replace with your image path
            alt="Tanmay Sharma"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"
          />
        </div>

        {/* Name & Title */}
        <h1 className="text-3xl font-bold text-gray-800 mt-4">Tanmay Sharma</h1>
        <p className="text-gray-600 text-lg">Full-Stack Developer | AI Enthusiast</p>

        {/* About Me */}
        <p className="mt-4 text-gray-700 leading-relaxed">
          Hey! I'm Tanmay, a 3rd-year B.Tech Computer Science student at VIT Vellore.  
          I enjoy working on web development, animations, and AI-driven applications.  
          My expertise includes React.js, Next.js, Tailwind CSS, Framer Motion, GSAP, and TypeScript.  
          I love building interactive and high-performance web experiences.
        </p>

        {/* Skills & Tech Stack */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-3">
            {[
              "React.js",
              "Next.js",
              "Tailwind CSS",
              "GSAP",
              "Framer Motion",
              "TypeScript",
              "Expo",
              "Appwrite",
              "NeonDB",
              "MySQL",
              "Java",
              "C Programming",
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Projects</h2>
          <ul className="list-disc list-inside text-gray-700 mt-3 text-left">
            <li>
              <strong>GreenFuture</strong> – A waste management platform rewarding users for recycling.
            </li>
            <li>
              <strong>ChatSphere</strong> – A modern real-time chat application.
            </li>
            <li>
              <strong>RapidRide</strong> – A React Native Uber clone with live tracking(in-progress).
            </li>
            <li>
              <strong>AI-Driven Robot Car</strong> – A robot for LPG leakage detection & obstacle avoidance.
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Let's Connect!</h2>
          <p className="text-gray-600 mt-2">Feel free to reach out and collaborate.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/tanmaydev56"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-medium hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tanmay-sharma-09a5b4274/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-medium hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="mailto:tanmaysharma763@gmail.com"
              className="text-blue-500 font-medium hover:underline"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
