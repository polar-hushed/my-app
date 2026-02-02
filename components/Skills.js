export default function Skills() {
    const skillCategories = [
        {
            icon: "⚛️",
            title: "Frontend Development",
            skills: [
                "React & Next.js",
                "TypeScript",
                "Tailwind CSS",
                "HTML5 & CSS3",
                "Responsive Design"
            ]
        },
        {
            icon: "⚙️",
            title: "Backend Development",
            skills: [
                "Node.js & Express",
                "Python & Django",
                "PostgreSQL & MongoDB",
                "REST APIs",
                "GraphQL"
            ]
        },
        {
            icon: "🛠️",
            title: "Tools & Others",
            skills: [
                "Git & GitHub",
                "Docker",
                "AWS & Vercel",
                "Figma & Design",
                "Agile/Scrum"
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 px-6 bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    Skills & <span className="gradient-text">Expertise</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="glass p-8 rounded-2xl hover:scale-105">
                            <div className="text-4xl mb-4">{category.icon}</div>
                            <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                            <ul className="space-y-2 text-foreground/70">
                                {category.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex}>• {skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
