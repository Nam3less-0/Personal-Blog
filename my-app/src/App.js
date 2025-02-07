import React from "react";
import Card from "./components/ui/Card";
import CardContent from "./components/ui/CardContent";
import Button from "./components/ui/Button";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="flex flex-col items-center justify-center gap-4 py-10">
        <motion.h1
          className="text-4xl font-bold text-center text-cyan-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm [Your Name]
        </motion.h1>
        <motion.p
          className="text-lg text-center max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to my personal blog and portfolio. I'm a [Your Role, e.g., Business Analytics Student at NUS] passionate about technology, data, and creating meaningful solutions.
        </motion.p>
      </header>

      <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-gray-800 rounded-2xl shadow-lg">
          <CardContent>
            <h2 className="text-xl font-semibold text-cyan-300">About Me</h2>
            <p className="mt-2 text-sm text-gray-300">
              I'm a tech enthusiast with experience in [brief skills summary, e.g., React.js, data analytics, and problem-solving]. I enjoy tackling complex problems and learning new things.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 rounded-2xl shadow-lg">
          <CardContent>
            <h2 className="text-xl font-semibold text-cyan-300">Projects</h2>
            <ul className="mt-2 text-sm text-gray-300 list-disc list-inside">
              <li>
                <strong>FitSync</strong>: A fitness app for tracking workouts (React Native).
              </li>
              <li>
                <strong>Loan Analysis</strong>: Probit model exploring disparities in loan denial rates.
              </li>
              <li>
                <strong>Traffic Fatalities Study</strong>: R analysis of alcohol taxes' impact on fatalities.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 rounded-2xl shadow-lg">
          <CardContent>
            <h2 className="text-xl font-semibold text-cyan-300">Skills</h2>
            <p className="mt-2 text-sm text-gray-300">
              - Programming: React.js, R, Python<br />
              - Data Analysis: Regression modeling, visualization<br />
              - Soft Skills: Leadership, problem-solving
            </p>
          </CardContent>
        </Card>
      </main>

      <footer className="flex flex-col items-center gap-4 mt-12">
        <h2 className="text-xl text-cyan-400">Get in Touch</h2>
        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-cyan-400 hover:text-cyan-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
