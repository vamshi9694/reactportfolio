import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleProjectToggle = (index) => {
    setActiveProject(activeProject === index ? null : index);
  };

  const projects = [
    {
      title: 'Gesture-Controlled Robotic Hand',
      description: 'A 3D-printed robotic hand controlled using hand gestures with MediaPipe, OpenCV, and Arduino.',
      link: 'https://github.com/your-github/gesture-controlled-robotic-hand',
    },
    {
      title: 'Patient History Tracker',
      description: 'A Python + Firebase app for tracking medical history records for patients.',
      link: 'https://github.com/your-github/patient-tracker',
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200">
        <div className="scene w-20 h-20">
          <div className="cube animate-spin-slow">
            <div className="cube-face cube-front"></div>
            <div className="cube-face cube-back"></div>
            <div className="cube-face cube-top"></div>
            <div className="cube-face cube-bottom"></div>
            <div className="cube-face cube-left"></div>
            <div className="cube-face cube-right"></div>
          </div>
        </div>
        <style>{`
          .scene { perspective: 600px; }
          .cube {
            position: relative;
            transform-style: preserve-3d;
            width: 100%;
            height: 100%;
            animation: spin 3s linear infinite;
          }
          .cube-face {
            position: absolute;
            width: 100%;
            height: 100%;
            background: #6366f1;
            opacity: 0.9;
            border: 2px solid white;
          }
          .cube-front { transform: rotateY(0deg) translateZ(40px); }
          .cube-back { transform: rotateY(180deg) translateZ(40px); }
          .cube-top { transform: rotateX(90deg) translateZ(40px); }
          .cube-bottom { transform: rotateX(-90deg) translateZ(40px); }
          .cube-left { transform: rotateY(-90deg) translateZ(40px); }
          .cube-right { transform: rotateY(90deg) translateZ(40px); }
          @keyframes spin {
            0% { transform: rotateX(0) rotateY(0); }
            100% { transform: rotateX(360deg) rotateY(360deg); }
        }`}</style>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden font-sans">
      <div className="absolute inset-0 z-0 animate-gradient-x bg-[length:200%_200%] bg-gradient-to-r from-gray-100 via-indigo-50 to-blue-100"></div>
      <motion.div
        className="relative z-10 max-w-5xl mx-auto p-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-3">N. Vamshi Krishna Reddy</h1>
          <p className="text-xl text-gray-600 mb-4">Software Developer | DevOps Enthusiast | AI Explorer</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-black transition-colors" />
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-blue-600 transition-colors" />
            </a>
            <a href="mailto:vamshireddy2469@gmail.com">
              <Mail className="w-6 h-6 hover:text-red-600 transition-colors" />
            </a>
          </div>
        </header>

        <motion.section className="mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-semibold text-indigo-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a Master's student in Computer Science with hands-on experience in DevOps, full-stack development, and computer vision. I love building intelligent systems and solving real-world problems.
          </p>
        </motion.section>

        <motion.section className="mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-semibold text-indigo-800 mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-xl bg-white p-6 shadow-md hover:shadow-xl transition-all ${
                  activeProject === index ? 'border border-indigo-300' : ''
                }`}
                onClick={() => handleProjectToggle(index)}
              >
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
                {activeProject === index && <p className="text-gray-700 mb-4">{project.description}</p>}
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                    {activeProject === index ? 'View Code' : 'Learn More'}
                  </button>
                </a>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-semibold text-indigo-800 mb-4">Skills</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li><strong>Languages:</strong> Java, Python, JavaScript, C</li>
            <li><strong>Frameworks:</strong> Angular, React, Selenium</li>
            <li><strong>DevOps:</strong> Git, Docker, Jenkins (basic)</li>
            <li><strong>Databases:</strong> SQL Server, Firebase</li>
            <li><strong>Tools:</strong> OpenCV, MediaPipe, Arduino</li>
          </ul>
        </motion.section>
      

{/* Extended About Me */}
<section className="mb-16 text-center">
  <h2 className="text-3xl font-semibold text-indigo-800 mb-4">Career Goals</h2>
  <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
    My passion lies in building robust, scalable software systems that leverage AI and automation to make people's lives easier.
    I'm particularly interested in cloud-native architectures, microservices, and computer vision.
    I aspire to contribute to innovative companies where technology drives impactful change.
  </p>
</section>

{/* Tech Stack */}
<section className="mb-16">
  <h2 className="text-3xl font-semibold text-indigo-800 mb-6 text-center">Tech Stack</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-700 text-lg">
    <div>Java</div>
    <div>Python</div>
    <div>JavaScript</div>
    <div>React</div>
    <div>Angular</div>
    <div>Node.js</div>
    <div>Docker</div>
    <div>AWS</div>
  </div>
</section>

{/* Experience */}
<section className="mb-16">
  <h2 className="text-3xl font-semibold text-indigo-800 mb-6 text-center">Experience</h2>
  <div className="space-y-4 text-gray-700">
    <div>
      <h3 className="text-xl font-bold">Trainee Consultant - DevOps</h3>
      <p>Invenio Solutions | Feb 2022 - Aug 2022</p>
      <p>Worked on CI/CD automation, containerization, and scripting tools to improve deployment efficiency.</p>
    </div>
    <div>
      <h3 className="text-xl font-bold">Software Intern</h3>
      <p>Ridhan Technology | Oct 2019 - Apr 2020</p>
      <p>Built internal tools and contributed to backend APIs using Java and Firebase.</p>
    </div>
  </div>
</section>

{/* Certifications */}
<section className="mb-16">
  <h2 className="text-3xl font-semibold text-indigo-800 mb-4 text-center">Certifications</h2>
  <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 max-w-2xl mx-auto">
    <li>AWS Cloud Practitioner</li>
    <li>Coursera: AI For Everyone</li>
    <li>Google Data Analytics</li>
  </ul>
</section>

{/* Contact Form */}
<section className="mb-16">
  <h2 className="text-3xl font-semibold text-indigo-800 mb-4 text-center">Contact Me</h2>
  <form className="max-w-lg mx-auto space-y-4">
    <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
    <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
    <textarea placeholder="Your Message" className="w-full border p-2 rounded h-32"></textarea>
    <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
      Send Message
    </button>
  </form>
</section>

{/* Footer */}
<footer className="text-center text-sm text-gray-500 mt-20 mb-10">
  © {new Date().getFullYear()} N. Vamshi Krishna Reddy. Built with React & Tailwind CSS.
</footer>

</motion.div>
      <style>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradientBG 8s ease infinite;
        }
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
