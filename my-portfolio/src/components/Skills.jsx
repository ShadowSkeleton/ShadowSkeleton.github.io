import { motion } from "framer-motion";
import { Code, Layers, Database, Wrench } from "lucide-react"; // icons

export default function Skills() {
    const skills = [
        {
            category: "Languages",
            items: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript", "SQL", "PHP"],
            icon: Code,
        },
        {
            category: "Frameworks",
            items: ["React", "Node.js", "Express.js", "Flutter"],
            icon: Layers,
        },
        {
            category: "Databases",
            items: ["PostgreSQL", "MongoDB", "MySQL"],
            icon: Database,
        },
        {
            category: "Tools",
            items: ["Git", "Docker", "REST APIs", "Agile", "Excel"],
            icon: Wrench,
        },
    ];

    return (
        <motion.section
            id="skills"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-20 px-6 bg-white dark:bg-[#0f172a] text-center transition-colors duration-500"
        >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Technical Skills
            </h2>

            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-2 gap-8">
                {skills.map((skill, idx) => {
                    const Icon = skill.icon;
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0 6px 20px rgba(37, 99, 235, 0.1)",
                            }}
                            className="p-6 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700
                         rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            {/* Animated Icon + Header */}
                            <div className="flex items-center justify-center mb-4 gap-2">
                                <motion.div
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 4,
                                        ease: "easeInOut",
                                        delay: idx * 0.3,
                                    }}
                                    whileHover={{ rotate: [0, 5, -5, 0], transition: { duration: 0.6 } }}
                                >
                                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </motion.div>
                                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400">
                                    {skill.category}
                                </h3>
                            </div>

                            {/* Skill Badges */}
                            <div className="flex flex-wrap justify-center gap-2">
                                {skill.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30
                               text-blue-700 dark:text-blue-300 text-sm rounded-full"
                                    >
                    {item}
                  </span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.section>
    );
}
