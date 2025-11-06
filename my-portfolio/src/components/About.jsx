import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.section
            id="about"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-20 px-6 bg-white dark:bg-[#0f172a] text-gray-800 dark:text-gray-300 transition-colors duration-500 text-center"
        >
            <motion.div
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-500">About Me</h2>


                <motion.p
                    className="text-gray-700 dark:text-gray-400 leading-relaxed text-lg transition-colors duration-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    I’m <span className="font-semibold">Jingrui Feng</span>, an Information Technology and Web Science graduate
                    from Rensselaer Polytechnic Institute, currently based in <span className="font-semibold">Jersey City, NJ</span>.
                    I’m passionate about full-stack development and designing efficient, maintainable software solutions that deliver great user experiences.
                </motion.p>

                <motion.p
                    className="text-gray-700 dark:text-gray-400 leading-relaxed text-lg transition-colors duration-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    Beyond coding, I explore <span className="font-semibold">AI</span> and <span className="font-semibold">human-computer interaction</span>,
                    aiming to bridge technical expertise with business and user-focused design. My goal is to build meaningful
                    technology that connects people, data, and experience seamlessly.
                </motion.p>
            </motion.div>
        </motion.section>
    );
}
