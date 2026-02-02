import { contactInfo, socialLinks } from "@/data/contactData";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 bg-muted/30">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    Get In <span className="gradient-text">Touch</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <p className="text-lg text-foreground/80">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>

                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-xl">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <div className="font-medium">{info.label}</div>
                                        <div className="text-foreground/60">{info.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4 pt-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-12 h-12 glass rounded-full flex items-center justify-center hover:scale-110 text-xl"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-transparent"
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-transparent"
                            />
                        </div>

                        <div>
                            <textarea
                                placeholder="Your Message"
                                rows={5}
                                className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-transparent resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
