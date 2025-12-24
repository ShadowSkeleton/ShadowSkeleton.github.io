import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
    const links = [
        {
            label: "Email Me",
            href: "mailto:jacksonfeng0130@yahoo.com",
            icon: Mail,
            style:
                "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/jingrui-feng/",
            icon: Linkedin,
            style:
                "bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",
        },
        {
            label: "GitHub",
            href: "https://github.com/shadowskeleton",
            icon: Github,
            style:
                "bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",
        },
    ];

    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="relative py-16 md:py-24 px-4 sm:px-6 bg-white dark:bg-slate-950 transition-colors duration-500"
        >
            <div className="max-w-4xl mx-auto text-center">
                {/* Section Header */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        I'm always open to discussing new opportunities, collaborations, or technical projects. 
                        Feel free to reach out!
                    </p>
                </motion.div>

                {/* Contact Links */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    {links.map(({ label, href, icon: Icon, style }, i) => (
                        <motion.a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group flex items-center justify-center gap-3 px-6 py-4 rounded-xl 
                                font-semibold transition-all duration-300 shadow-md hover:shadow-xl
                                ${style}`}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                        >
                            <Icon size={20} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
                            <span>{label}</span>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Footer */}
                <motion.div
                    className="pt-8 border-t border-gray-200 dark:border-gray-800"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        © {new Date().getFullYear()} Jingrui Feng. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
}
