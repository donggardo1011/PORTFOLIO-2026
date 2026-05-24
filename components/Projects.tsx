"use client";

import { useState } from "react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const projects = [
    {
        id: 1,
        title: "AgriSmart",
        category: "Machine Learning",
        description: "A Rice Leaf Disease Detection That Helps Determine The Disease Of The Rice Leaf And Provides Solutions To Farmers.",
        longDescription: "AgriSmart is an advanced AI-powered system that uses computer vision to analyze rice leaf health and detect diseases in real-time. It provides farmers with actionable insights and solutions to improve crop yield and quality.",
        image: "",
        tech: ["Python", "TensorFlow", "OpenCV", "React", "FastAPI"],
        features: ["Real-time disease detection", "Farmers' guidance system", "Image analysis", "Data-driven recommendations"],
    },
    {
        id: 2,
        title: "Buksu Capstone Repository",
        category: "Education",
        description: "A collection of capstone projects from students at Bukidnon State University, showcasing innovative solutions across various domains.",
        longDescription: "Buksu Capstone Repository is a comprehensive collection of capstone projects from students at Bukidnon State University. It showcases innovative solutions across various domains, highlighting the creativity and technical skills of the students.",
        image: "",
        tech: ["Javascript", "mongoDB", "Express.js", "React", "Node.js"],
        features: ["Project showcase", "Search and filter functionality", "Student profiles", "Project documentation"],
    },
    {
        id: 3,
        title: "Perfumora",
        category: "Web Application",
        description: "A web-based perfume discovery and purchase platform with user authentication, including Google OAuth.",
        longDescription: "Perfumora is a comprehensive perfume discovery and purchase platform that allows users to browse, select, and buy perfumes for special occasions. The system features secure authentication, payment processing, and inventory management.",
        image: "",
        tech: ["PHP", "MySQL", "Google OAuth", "recaptcha."],
        features: ["User authentication", "Google OAuth integration", "PayPal Sandbox payments", "Inventory management"],
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <>
            <Section id="projects" title="Exhibition" subtitle="Portfolio" verticalTitle="Projects" className="py-20 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-px border border-foreground/5 bg-foreground/5 overflow-hidden">
                    {/* Main Project (Big) */}
                    <div className="md:col-span-8 md:row-span-2 overflow-hidden">
                        <ProjectCard
                            project={projects[0]}
                            onClick={() => setSelectedProject(projects[0])}
                            className="h-[320px] sm:h-[380px] md:h-[701px]"
                        />
                    </div>

                    {/* Right Top Column */}
                    <div className="md:col-span-4 overflow-hidden border-b md:border-b-0 border-foreground/5">
                        <ProjectCard
                            project={projects[1]}
                            onClick={() => setSelectedProject(projects[1])}
                            className="h-[220px] sm:h-[260px] md:h-[350px]"
                        />
                    </div>

                    {/* Right Middle Column */}
                    <div className="md:col-span-4 overflow-hidden">
                        <ProjectCard
                            project={projects[2]}
                            onClick={() => setSelectedProject(projects[2])}
                            className="h-[220px] sm:h-[260px] md:h-[350px]"
                        />
                    </div>


                </div>
            </Section>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </>
    );
}
