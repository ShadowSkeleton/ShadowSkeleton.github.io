import { motion } from "framer-motion";
import experience from "../data/experience.json";

function parseDate(dateString) {
    const months = {
        Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
        Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
    };
    const match = dateString.match(/([A-Za-z]{3}) (\d{4})/);
    if (!match) return new Date(0);
    const [, month, year] = match;
    return new Date(parseInt(year), months[month]);
}

export default function Experience() {
    const sortedExperience = [...experience].sort(
        (a, b) => parseDate(b.date) - parseDate(a.date)
    );

    return (
        <motion.section
            id="experience"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative py-20 px-6 bg-gray-50 dark:bg-[#0f172a] transition-colors duration-500"
        >
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-colors duration-500">
                Experience
            </h2>

            <div className="max-w-5xl mx-auto relative">
                {/* Timeline vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600 dark:from-blue-700 dark:to-blue-400 rounded-full" />

                <div className="flex flex-col gap-12 pl-12">
                    {sortedExperience.map((exp, i) => (
                        <motion.div
                            key={i}
                            className="relative p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                        >
                            {/* Timeline Dot */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + i * 0.1, type: "spring", stiffness: 200 }}
                                className="absolute -left-[2.35rem] top-8 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-800 shadow-md"
                            />

                            {/* Header */}
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                                <div>
                                    <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">
                                        {exp.title}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                                        {exp.organization}
                                    </p>
                                </div>
                                <div className="text-right text-gray-500 dark:text-gray-400 text-sm mt-2 sm:mt-0">
                                    <p>{exp.location}</p>
                                    <p>{exp.date}</p>
                                </div>
                            </div>

                            {/* Details */}
                            <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2 mt-3 leading-relaxed text-base text-left">
                                {exp.details.map((line, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -15 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        {line}
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mt-5">
                                {exp.tech.map((t, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                                    >
                    {t}
                  </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
