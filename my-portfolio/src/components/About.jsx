import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.section
            id="about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative py-16 md:py-24 px-4 sm:px-6 bg-white dark:bg-slate-950 transition-colors duration-500"
        >
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
                </motion.div>

                {/* Content */}
                <div className="space-y-8 text-left">
                    <motion.div
                        className="prose prose-lg dark:prose-invert max-w-none"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                            I'm <span className="font-semibold text-gray-900 dark:text-white">Jingrui Feng</span>, an Information Technology and Web Science graduate
                            from <span className="font-semibold text-blue-600 dark:text-blue-400">Rensselaer Polytechnic Institute</span>, currently pursuing my Master's degree in 
                            Information Systems at <span className="font-semibold text-blue-600 dark:text-blue-400">New York University</span>, and based in 
                            <span className="font-semibold text-gray-900 dark:text-white"> Jersey City, NJ</span>.
                        </p>
                    </motion.div>

                    <motion.div
                        className="prose prose-lg dark:prose-invert max-w-none"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                            I'm passionate about full-stack development and designing efficient, maintainable software solutions that deliver 
                            exceptional user experiences. My approach combines technical excellence with thoughtful design to create 
                            solutions that are both powerful and intuitive.
                        </p>
                    </motion.div>

                    <motion.div
                        className="prose prose-lg dark:prose-invert max-w-none"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                            Beyond coding, I explore <span className="font-semibold text-purple-600 dark:text-purple-400">AI</span> and 
                            <span className="font-semibold text-purple-600 dark:text-purple-400"> human-computer interaction</span>, 
                            aiming to bridge technical expertise with business acumen and user-focused design. My goal is to build meaningful
                            technology that connects people, data, and experiences seamlessly.
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
