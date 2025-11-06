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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-20 px-6 bg-gray-50 dark:bg-[#0f172a] text-center transition-colors duration-500"
        >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Certifications
            </h2>

            <div className="max-w-3xl mx-auto grid gap-6">
                {certs.map((c, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                        className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300"
                    >
                        <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-1">
                            {c.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">{c.org}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                            {c.date}
                        </p>

                        {c.link && (
                            <a
                                href={c.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                            >
                                View Credential →
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
