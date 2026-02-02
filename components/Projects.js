import Image from "next/image";

export default function Projects() {
    const projects = [
        {
            title: "Analytics Dashboard",
            description: "A comprehensive analytics platform with real-time data visualization and insights.",
            image: "/project-dashboard.png",
            tags: [
                { name: "React", color: "primary" },
                { name: "Chart.js", color: "secondary" },
                { name: "Node.js", color: "accent" }
            ],
            demoLink: "#",
            codeLink: "#"
        },
        {
            title: "ShopNow E-commerce",
            description: "Modern e-commerce platform with seamless checkout and inventory management.",
            image: "/project-ecommerce.png",
            tags: [
                { name: "Next.js", color: "primary" },
                { name: "Stripe", color: "secondary" },
                { name: "MongoDB", color: "accent" }
            ],
            demoLink: "#",
            codeLink: "#"
        },
        {
            title: "Synapse Social",
            description: "A social networking platform connecting creative professionals worldwide.",
            image: "/project-social.png",
            tags: [
                { name: "React", color: "primary" },
                { name: "GraphQL", color: "secondary" },
                { name: "PostgreSQL", color: "accent" }
            ],
            demoLink: "#",
            codeLink: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    Featured <span className="gradient-text">Projects</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="glass rounded-2xl overflow-hidden hover:scale-105 group">
                            <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-foreground/70 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className={`px-3 py-1 bg-${tag.color}/20 text-${tag.color} rounded-full text-xs`}
                                        >
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <a href={project.demoLink} className="text-primary hover:underline text-sm font-medium">
                                        Live Demo →
                                    </a>
                                    <a href={project.codeLink} className="text-foreground/60 hover:underline text-sm font-medium">
                                        Code →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
