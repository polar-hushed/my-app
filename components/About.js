export default function About() {
    return (
        <section id="about" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    About <span className="gradient-text">Me</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            I'm a passionate developer with over 5 years of experience building
                            web applications that make a difference. I love turning complex problems
                            into simple, beautiful, and intuitive solutions.
                        </p>

                        <p className="text-lg text-foreground/80 leading-relaxed">
                            When I'm not coding, you'll find me exploring new technologies,
                            contributing to open source, or sharing knowledge with the developer community.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {/* <div className="glass p-6 rounded-2xl">
                                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                                <div className="text-sm text-foreground/60">Projects Completed</div>
                            </div>
                            <div className="glass p-6 rounded-2xl">
                                <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                                <div className="text-sm text-foreground/60">Years Experience</div>
                            </div> */}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="glass p-8 rounded-3xl">
                            <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                                <div className="text-8xl">👨‍💻</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
