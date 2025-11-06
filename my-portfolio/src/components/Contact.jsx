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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-20 px-6 bg-white dark:bg-[#0f172a] text-center transition-colors duration-500"
        >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Contact
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed">
                I’m always open to discussing new opportunities, collaborations, or
                technical projects. Feel free to reach out!
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                {links.map(({ label, href, icon: Icon, style }, i) => (
                    <motion.a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg shadow-md font-medium transition-all duration-300 ${style}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <Icon size={20} strokeWidth={2.2} />
                        {label}
                    </motion.a>
                ))}
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-sm mt-12">
                © {new Date().getFullYear()} Jingrui Feng. All rights reserved.
            </p>
        </motion.section>
    );
}
