import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Smart Data Sync",
    description: "A distributed sync system for syncing sensitive data across vendors using Kafka, Spark, Hadoop.",
    link: "https://github.com/D3xt3rh/smart-data-sync"
  },
  {
    title: "Resume Parser API",
    description: "Built an NLP-based resume parsing REST API with FastAPI and Spacy.",
    link: "https://github.com/D3xt3rh/resume-parser-api"
  }
];

const blogs = [
  {
    title: "How to Build a Resume Parser with Python",
    description: "Step-by-step guide for developers to build their own resume parser using NLP.",
    link: "https://medium.com/@msaalim1998/how-to-build-a-resume-parser"
  },
  {
    title: "Getting Started with Distributed Systems",
    description: "Exploring Kafka, Spark, and Hadoop with real-life use cases.",
    link: "https://dev.to/d3xt3rh/distributed-systems-basics"
  }
];

export default function Portfolio() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Mohammad Saalim</h1>
        <p className="text-sm text-gray-500">Backend Engineer | Distributed Systems | AI Enthusiast</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="mailto:msaalim1998@gmail.com" className="text-blue-500 underline">Email</a>
          <a href="https://www.linkedin.com/in/mohammad-saalim" className="text-blue-500 underline">LinkedIn</a>
          <a href="https://github.com/D3xt3rh" className="text-blue-500 underline">GitHub</a>
          <a href="https://d3xt3rh.github.io" className="text-blue-500 underline">Portfolio</a>
        </div>
        <Button className="mt-4" variant="outline">
          <a href="/Mohammad_Saalim_Resume.pdf" download className="flex items-center gap-2">
            <Download size={16} /> Download Resume
          </a>
        </Button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, idx) => (
            <Card key={idx} className="hover:shadow-lg transition">
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  View on GitHub
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Blog</h2>
        <div className="space-y-4">
          {blogs.map((blog, idx) => (
            <div key={idx} className="p-4 border rounded-xl hover:shadow-md">
              <h3 className="font-bold text-lg">{blog.title}</h3>
              <p className="text-gray-500 text-sm">{blog.description}</p>
              <a
                href={blog.link}
                target="_blank"
                className="text-blue-500 underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
