import { useMemo } from "react";
import { motion } from "framer-motion";
import experience from "../data/experience.json";

function parseEndDate(dateString) {
    const months = {
        Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
        Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
    };
    // Match the end date (second date after the "–" or "-" separator)
    // Format: "MMM YYYY – MMM YYYY" or "MMM YYYY - MMM YYYY" or "MMM YYYY – Present"
    const match = dateString.match(/[–-]\s*([A-Za-z]{3})\s*(\d{4})/);
    if (!match) {
        // If no end date found (e.g., "Present"), return a far future date to sort it first
        if (dateString.includes("Present")) {
            return new Date(9999, 11);
        }
        return new Date(0);
    }
    const [, month, year] = match;
    return new Date(parseInt(year), months[month]);
}

export default function Experience() {
    const sortedExperience = useMemo(
        () => [...experience].sort((a, b) => parseEndDate(b.date) - parseEndDate(a.date)),
        []
    );

    return (
        <motion.section
            id="experience"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.05, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.4 }}
            className="relative py-16 md:py-24 px-4 sm:px-6 bg-white dark:bg-slate-950 transition-colors duration-500"
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
                        Professional Experience
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline vertical line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 
                        bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 
                        dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 
                        transform md:-translate-x-1/2" />

                    <div className="flex flex-col gap-12">
                        {sortedExperience.map((exp, i) => (
                            <motion.div
                                key={i}
                                className="relative pl-16 md:pl-0 md:flex md:items-center md:gap-8"
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full 
                                    bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400
                                    border-4 border-white dark:border-slate-950 shadow-lg
                                    transform md:-translate-x-1/2 z-10" />

                                {/* Content Card */}
                                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto md:flex md:flex-row-reverse'}`}>
                                    <motion.div
                                        className="group relative p-6 md:p-8 rounded-2xl bg-gray-50 dark:bg-slate-900 
                                            border border-gray-200 dark:border-gray-800
                                            shadow-lg hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5
                                            transition-all duration-300 will-change-transform"
                                        whileHover={{ y: -4 }}
                                    >
                                        {/* Date (for mobile) */}
                                        <div className="md:hidden text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                                            {exp.date} · {exp.location}
                                        </div>

                                        {/* Header */}
                                        <div className="mb-4">
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 
                                                group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {exp.title}
                                            </h3>
                                            <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                                                {exp.organization}
                                            </p>
                                        </div>

                                        {/* Date (for desktop) */}
                                        <div className="hidden md:block text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                                            {exp.date} · {exp.location}
                                        </div>

                                        {/* Details */}
                                        <ul className="space-y-2.5 mb-5">
                                            {exp.details.map((line, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-gray-700 dark:text-gray-300 leading-relaxed 
                                                        flex items-start gap-3 before:content-['▹'] before:text-blue-600 dark:before:text-blue-400 
                                                        before:font-bold before:flex-shrink-0 before:mt-1"
                                                >
                                                    <span>{line}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-800">
                                            {exp.tech.map((t, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1.5 bg-blue-50 dark:bg-blue-950/50
                                                        text-blue-700 dark:text-blue-400 text-sm font-medium rounded-lg
                                                        border border-blue-200 dark:border-blue-900/50"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
