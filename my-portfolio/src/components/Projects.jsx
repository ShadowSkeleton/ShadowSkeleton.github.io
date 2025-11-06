import { motion } from "framer-motion";
import projects from "../data/projects.json";

function parseDate(dateString) {
    const months = {
        Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
        Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };
    const match = dateString.match(/([A-Za-z]{3}) (\d{4})/);
    if (!match) return new Date(0);
    const [_, month, year] = match;
    return new Date(parseInt(year), months[month]);
}

export default function Projects() {
    const sortedProjects = [...projects].sort(
        (a, b) => parseDate(b.date) - parseDate(a.date)
    );

    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-20 px-6 bg-gray-50 dark:bg-[#0f172a] transition-colors duration-500"
        >
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                Projects
            </h2>

            <div className="max-w-5xl mx-auto flex flex-col gap-10">
                {sortedProjects.map((p, i) => (
                    <motion.div
                        key={i}
                        className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700
                       shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: "0 8px 25px rgba(37, 99, 235, 0.15)",
                        }}
                    >
                        {/* Header (title + date) */}
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                            <div>
                                <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">
                                    {p.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">{p.role}</p>
                            </div>
                            <div className="text-right sm:text-right text-gray-500 dark:text-gray-400 text-sm mt-2 sm:mt-0">
                                <p>{p.location}</p>
                                <p>{p.date}</p>
                            </div>
                        </div>

                        {/* Details */}
                        <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2 mt-3 leading-relaxed text-base text-left">
                            {p.details.map((line, idx) => (
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

                        {/* Tech stack badges */}
                        <div className="flex flex-wrap gap-2 mt-5">
                            {p.tech.map((t, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30
                             text-blue-700 dark:text-blue-300 text-sm rounded-full"
                                >
                  {t}
                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
