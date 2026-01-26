import { motion } from "framer-motion";

export default function Certifications() {
    const certs = [
        {
            title: "Introduction to Generative AI",
            org: "Google Cloud (Coursera)",
            date: "Issued Oct 2023",
            link: "https://www.coursera.org/account/accomplishments/verify/DPDYZCK5F797",
        },
        {
            title: "Microsoft Certified: Azure AI Fundamentals",
            org: "Microsoft",
            date: "Issued Apr 2023",
        },
    ];

    return (
        <motion.section
            id="certifications"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.05, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.4 }}
            className="relative py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-500"
        >
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Certifications
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    {certs.map((c, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                            transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ y: -4 }}
                            className="group relative p-6 md:p-8 bg-white dark:bg-slate-900 
                                border border-gray-200 dark:border-gray-800
                                rounded-2xl shadow-md hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5
                                transition-all duration-300 will-change-transform"
                        >
                            {/* Badge Icon */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 
                                    dark:from-blue-950/50 dark:to-purple-950/50
                                    border border-blue-100 dark:border-blue-900/50">
                                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 px-3 py-1 
                                    bg-gray-100 dark:bg-gray-800 rounded-full">
                                    {c.date}
                                </span>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 
                                group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {c.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">
                                {c.org}
                            </p>

                            {c.link && (
                                <motion.a
                                    href={c.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 
                                        hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm
                                        group/link"
                                    whileHover={{ x: 4 }}
                                >
                                    <span>View Credential</span>
                                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </motion.a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
