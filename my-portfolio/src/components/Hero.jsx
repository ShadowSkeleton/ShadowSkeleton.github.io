import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex flex-col items-center justify-center min-h-screen text-center
                 bg-gradient-to-br from-blue-50 via-white to-blue-100
                 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
                 px-4 sm:px-6 transition-colors duration-700 overflow-hidden"
        >
            {/* Subtle background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Animated headshot with glow effect */}
                <motion.div
                    className="relative w-48 h-48 md:w-56 md:h-56 mb-10 mx-auto"
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 dark:from-blue-500 dark:via-purple-500 dark:to-blue-400 opacity-20 blur-2xl" />
                    <motion.div
                        className="relative w-full h-full rounded-full p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <motion.img
                            src="/profile.jpeg"
                            alt="Jingrui Feng headshot"
                            className="w-full h-full rounded-full object-cover object-[45%_top]
                                 shadow-2xl border-4 border-white dark:border-slate-900"
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        />
                    </motion.div>
                </motion.div>

                {/* Greeting */}
                <motion.p
                    className="text-sm md:text-base font-medium text-blue-600 dark:text-blue-400 mb-4 tracking-wide uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Hello, I'm
                </motion.p>

                {/* Name with gradient */}
                <motion.h1
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="text-gradient">Jingrui Feng</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-10
                       max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    Software Developer · Tech Enthusiast · Lifelong Learner
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 md:mb-24"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                >
                    <motion.a
                        href="#projects"
                        className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 
                           text-white font-semibold rounded-xl shadow-lg shadow-blue-500/50
                           hover:shadow-xl hover:shadow-blue-500/50
                           transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>View My Work</span>
                        <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    </motion.a>

                    <motion.a
                        href="#contact"
                        className="px-6 md:px-8 py-3 md:py-4 border-2 border-gray-300 dark:border-gray-600 
                           text-gray-700 dark:text-gray-300 font-semibold rounded-xl
                           hover:bg-gray-100 dark:hover:bg-gray-800
                           transition-all duration-300 text-sm md:text-base"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Get In Touch
                    </motion.a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-4 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600"
                    >
                        <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
                        <ArrowDown className="w-5 h-5" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
