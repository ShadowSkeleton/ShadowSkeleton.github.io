import { motion } from "framer-motion";
import { Code, Layers, Database, Brain } from "lucide-react"; // icons

export default function Skills() {
    const skills = [
        {
            category: "Languages",
            items: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript", "SQL", "PHP", "HTML", "CSS"],
            icon: Code,
        },
        {
            category: "Frameworks",
            items: ["React.js", "Node.js", "Express.js", "Flutter"],
            icon: Layers,
        },
        {
            category: "Tools & Databases",
            items: ["PostgreSQL", "MongoDB", "Git", "Docker", "REST API"],
            icon: Database,
        },
        {
            category: "Concepts",
            items: ["Frontend", "Backend", "Fullstack", "API", "Object-Oriented Programming", "Agile Methodology"],
            icon: Brain,
        },
    ];

    return (
        <motion.section
            id="skills"
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
                        Technical Skills
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
                </motion.div>

                {/* Skills Grid */}
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                    {skills.map((skill, idx) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                                transition={{ delay: idx * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -4 }}
                                className="group relative p-6 md:p-8 bg-white dark:bg-slate-900 
                                    border border-gray-200 dark:border-gray-800
                                    rounded-2xl shadow-md hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5
                                    transition-all duration-300 will-change-transform"
                            >
                                {/* Icon + Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <motion.div
                                        className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 
                                            dark:from-blue-950/50 dark:to-purple-950/50
                                            border border-blue-100 dark:border-blue-900/50"
                                        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {skill.category}
                                    </h3>
                                </div>

                                {/* Skill Badges */}
                                <div className="flex flex-wrap gap-2.5">
                                    {skill.items.map((item, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.05 + i * 0.02 }}
                                            whileHover={{ scale: 1.05 }}
                                            className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 
                                                dark:from-blue-950/50 dark:to-purple-950/50
                                                text-blue-700 dark:text-blue-400 text-sm font-medium rounded-lg
                                                border border-blue-200 dark:border-blue-900/50
                                                hover:border-blue-300 dark:hover:border-blue-800
                                                transition-colors cursor-default"
                                        >
                                            {item}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.section>
    );
}
