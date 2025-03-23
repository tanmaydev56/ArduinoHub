import React from "react";

const founders = [
  {
    name: "Tanmay Sharma",
    title: "Full-Stack Developer | AI Enthusiast",
    image: "/Founder.jpg", // Replace with actual path
    about:
      "Hey! I'm Tanmay, a 3rd-year B.Tech Computer Science student at VIT Vellore. I enjoy working on web development, animations, and AI-driven applications.",
    skills: [
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
    ],
    projects: [
      { name: "GreenFuture", desc: "A waste management platform rewarding users for recycling." },
      { name: "ChatSphere", desc: "A modern real-time chat application." },
      { name: "RapidRide", desc: "A React Native Uber clone with live tracking (in-progress)." },
      { name: "AI-Driven Robot Car", desc: "A robot for LPG leakage detection & obstacle avoidance." },
    ],
    contacts: {
      github: "https://github.com/tanmaydev56",
      linkedin: "https://www.linkedin.com/in/tanmay-sharma-09a5b4274/",
      email: "mailto:tanmaysharma763@gmail.com",
    },
  },
  {
    name: "Second Founder",
    title: "Embedded Systems Engineer",
    image: "/SecondFounder.jpg", // Replace with actual path
    about:
      "Passionate about Arduino, IoT, and embedded systems. Love working on innovative hardware-based solutions.",
    skills: ["Arduino", "Raspberry Pi", "Embedded C", "PCB Designing", "IoT"],
    projects: [
      { name: "Smart Home System", desc: "IoT-based home automation system." },
      { name: "Industrial Sensor Network", desc: "Real-time monitoring system for industries." },
    ],
    contacts: {
      github: "https://github.com/secondfounder",
      linkedin: "https://www.linkedin.com/in/secondfounder",
      email: "mailto:secondfounder@email.com",
    },
  },
];

const Founder = () => {
  return (
    <div className="min-h-screen  flex mt-10 flex-col items-center px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Founders</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
        {founders.map((founder, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"
              />
            </div>

            {/* Name & Title */}
            <h2 className="text-2xl font-bold text-gray-800 mt-4">{founder.name}</h2>
            <p className="text-gray-600 text-lg">{founder.title}</p>

            {/* About */}
            <p className="mt-4 text-gray-700 leading-relaxed">{founder.about}</p>

            {/* Skills & Tech Stack */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">Tech Stack</h3>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {founder.skills.map((skill, i) => (
                  <span key={i} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">Projects</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2 text-left">
                {founder.projects.map((project, i) => (
                  <li key={i}>
                    <strong>{project.name}</strong> – {project.desc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">Let's Connect!</h3>
              <div className="flex justify-center gap-4 mt-2">
                <a
                  href={founder.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-medium hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={founder.contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-medium hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href={founder.contacts.email}
                  className="text-blue-500 font-medium hover:underline"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founder;
