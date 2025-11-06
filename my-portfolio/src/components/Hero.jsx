import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="hero"
            className="flex flex-col items-center justify-center min-h-screen text-center
                 bg-gradient-to-br from-blue-50 via-white to-blue-100
                 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155]
                 animate-gradient bg-[length:200%_200%]
                 px-6 transition-colors duration-700"
        >
            {/* Animated headshot */}
            <motion.div
                className="relative w-44 h-44 md:w-52 md:h-52 mb-8"
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                whileHover={{ scale: 1.05, rotate: 1 }}
            >
                <motion.img
                    src="/profile.jpeg"
                    alt="Jingrui Feng headshot"
                    className="w-full h-full rounded-full object-cover object-[45%_top]
                     shadow-2xl border-4 border-white dark:border-gray-800"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                />
            </motion.div>

            {/* Name */}
            <motion.h1
                className="text-5xl md:text-6xl font-extrabold
                   text-gray-900 dark:text-white mb-3 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                Jingrui Feng
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8
                   max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
            >
                Software Developer · Tech Enthusiast · Lifelong Learner
            </motion.p>

            {/* CTA Button */}
            <motion.a
                href="#projects"
                className="px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white font-semibold
                   rounded-lg shadow-lg hover:shadow-xl
                   hover:bg-blue-700 dark:hover:bg-blue-600
                   transition-all transform hover:-translate-y-0.5"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
            >
                View My Work
            </motion.a>
        </section>
    );
}
