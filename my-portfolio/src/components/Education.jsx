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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-20 px-6 bg-gray-50 dark:bg-[#0f172a] transition-colors duration-500"
        >
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-colors duration-500">
                Education
            </h2>

            <div className="max-w-4xl mx-auto flex flex-col gap-10">
                {education.map((edu, i) => (
                    <motion.div
                        key={i}
                        className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl dark:hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
                    >
                        <h3
                            className={`text-xl font-semibold ${
                                edu.color === 'violet'
                                    ? 'text-purple-700 dark:text-purple-400'
                                    : 'text-red-700 dark:text-red-400'
                            }`}
                        >
                            {edu.school}
                        </h3>

                        <p className="text-gray-700 dark:text-gray-300 italic mt-1">
                            {edu.degree} {edu.gpa && `• ${edu.gpa}`}
                        </p>

                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                            {edu.period}
                        </p>

                        {edu.coursework && (
                            <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                                Relevant Coursework: {edu.coursework}
                            </p>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
