import { motion } from "framer-motion";

export default function Education() {
    const education = [
        {
            school: "New York University (NYU)",
            degree: "M.S. in Information Systems",
            period: "Expected May 2027",
            color: "violet",
        },
        {
            school: "Rensselaer Polytechnic Institute (RPI)",
            degree: "B.S. in Information Technology and Web Science",
            gpa: "GPA: 3.61 / 4.00",
            period: "Aug 2021 – May 2025",
            coursework:
                "Data Structures, Algorithms, Operating Systems, Database Systems, Network Programming, Parallel Programming, Artificial Intelligence, and Web Systems Development",
            color: "red",
        },
    ];

    return (
        <motion.section
            id="education"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="relative py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 transition-colors duration-500"
        >
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Education
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
                </motion.div>

                {/* Education Cards */}
                <div className="grid gap-6 md:gap-8">
                    {education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ y: -4 }}
                            className="group relative p-6 md:p-8 lg:p-10 rounded-2xl bg-white dark:bg-slate-900
                                border border-gray-200 dark:border-gray-800
                                shadow-lg hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5
                                transition-all duration-300"
                        >
                            {/* School Name and Degree */}
                            <div className="mb-4">
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white 
                                    group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                                    {edu.school}
                                </h3>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                    <p className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-300">
                                        {edu.degree}
                                        {edu.gpa && <span className="text-gray-500 dark:text-gray-400"> · {edu.gpa}</span>}
                                    </p>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        {edu.period}
                                    </p>
                                </div>
                            </div>

                            {/* Coursework */}
                            {edu.coursework && (
                                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">
                                        Relevant Coursework
                                    </p>
                                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {edu.coursework}
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
