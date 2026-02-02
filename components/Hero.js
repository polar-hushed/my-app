import { personalInfo, socialLinks } from "@/data/contactData";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />

            <div className="relative max-w-5xl mx-auto text-center">
                <div className="mb-6 inline-block">
                    <span className="px-4 py-2 rounded-full glass text-sm font-medium">
                        👋 Welcome to my portfolio
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
                </h1>

                <p className="text-xl md:text-2xl text-foreground/70 mb-4 max-w-3xl mx-auto">
                    {personalInfo.title}
                </p>

                <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto">
                    {personalInfo.bio}
                </p>

                {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#projects"
                        className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        View My Work
                    </a>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="px-8 py-4 glass rounded-full font-medium hover:scale-105"
                    >
                        Email Me
                    </a>
                </div> */}

                {/* Social Media Icons */}
                <div className="flex gap-4 justify-center mt-8">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            className="w-12 h-12 glass rounded-full flex items-center justify-center hover:scale-110 text-xl"
                            aria-label={social.label}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
