import StoryDetails from "@/components/StoryDetails/StoryDetails";
import React from "react";

async function SingleStoryPage({ params }) {
  const { slug } = await params;

  const developerStories = [
    {
      id: 1,
      name: "Arman Hossain",
      designation: "Frontend Developer",
      company: "TechNova Solutions",
      experience: "3 years",
      skills: ["JavaScript", "React", "Next.js", "Tailwind CSS"],
      story:
        "Arman started learning web development during his university days. He struggled at first with JavaScript fundamentals but stayed consistent...",
      about:
        "Arman is a passionate frontend developer from Bangladesh who loves building seamless and interactive user interfaces...",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      designation: "Full Stack Developer",
      company: "BrightByte Labs",
      experience: "4 years",
      skills: ["Node.js", "Express", "MongoDB", "React", "Docker"],
      story:
        "Sara began her journey with basic HTML and CSS tutorials...",
      about:
        "Sara is a dedicated full-stack developer who specializes in creating scalable and maintainable applications...",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      id: 3,
      name: "Rahul Das",
      designation: "Backend Engineer",
      company: "CodeCraft Systems",
      experience: "2 years",
      skills: ["Node.js", "PostgreSQL", "Redis", "REST API", "TypeScript"],
      story:
        "Rahul’s learning story started with solving logic problems...",
      about:
        "Rahul is an early-career backend engineer who loves building reliable systems...",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      id: 4,
      name: "Maya Siddiqui",
      designation: "UI/UX Focused Frontend Developer",
      company: "PixelForge Studio",
      experience: "3.5 years",
      skills: ["Figma", "React", "Tailwind", "GSAP", "TypeScript"],
      story:
        "Maya started her career as a designer but soon realized she wanted her designs to become real...",
      about:
        "Maya is a frontend developer with a strong sense of design...",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 5,
      name: "Zahidul Karim",
      designation: "MERN Stack Developer",
      company: "DevOrbit Labs",
      experience: "5 years",
      skills: ["React", "Next.js", "Node.js", "MongoDB", "Redux"],
      story:
        "Zahidul started as a self-taught developer with a strong interest in JavaScript...",
      about:
        "Zahidul is a highly experienced MERN stack developer...",
      image: "https://randomuser.me/api/portraits/men/56.jpg",
    },
  ];

  const singleStory = developerStories.find(
    (story) => story.id === Number(slug)
  );

  if (!singleStory) {
    return (
      <div className="text-center mt-20 text-red-500">
        Story Not Found
      </div>
    );
  }

  return (
    <div className="py-10">
      <StoryDetails story={singleStory} />
    </div>
  );
}

export default SingleStoryPage;
