import { motion } from "framer-motion";
import projects from "../data/projects.json";

export default function Projects() {

    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.05, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.4 }}
            className="relative py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-500"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
                </motion.div>

                {/* Projects Grid */}
                <div className="grid gap-8">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            className="group relative p-6 md:p-8 lg:p-10 rounded-2xl bg-white dark:bg-slate-900 
                                border border-gray-200 dark:border-gray-800
                                shadow-md hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5
                                transition-all duration-300 overflow-hidden will-change-transform"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                            transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ y: -4 }}
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 
                                group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 
                                transition-all duration-500 pointer-events-none" />

                            <div className="relative z-10">
                                {/* Header */}
                                <div className="mb-6">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 
                                        group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {p.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 font-medium">{p.role}</p>
                                </div>

                                {/* Details */}
                                <ul className="space-y-3 mb-6">
                                    {p.details.map((line, idx) => (
                                        <li
                                            key={idx}
                                            className="text-gray-700 dark:text-gray-300 leading-relaxed 
                                                flex items-start gap-3 before:content-['▹'] before:text-blue-600 dark:before:text-blue-400 
                                                before:font-bold before:flex-shrink-0"
                                        >
                                            <span>{line}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-800">
                                    {p.tech.map((t, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1.5 bg-blue-50 dark:bg-blue-950/50
                                                text-blue-700 dark:text-blue-400 text-sm font-medium rounded-lg
                                                border border-blue-200 dark:border-blue-900/50
                                                hover:bg-blue-100 dark:hover:bg-blue-900/70 transition-colors"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
