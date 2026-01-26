import { motion } from "framer-motion";
import { Coffee, Gamepad2, Sparkles, Droplet, FlaskConical } from "lucide-react";

export default function Hobbies() {
    const hobbies = [
        {
            icon: Coffee,
            title: "Specialty Coffee",
            description: "Passionate about exploring the world of specialty coffee, focusing on different brew methods and experimentation.",
            details: [
                "Experimenting with Espresso and Filter coffee methods",
                "Exploring different origins and processing methods",
                "Perfecting extraction techniques and ratios",
                "Appreciating the nuances of flavor profiles"
            ],
            color: "from-amber-500 to-orange-600",
            bgColor: "bg-amber-50 dark:bg-amber-950/20",
            borderColor: "border-amber-200 dark:border-amber-900/50",
            iconBg: "bg-amber-100 dark:bg-amber-900/40",
            iconColor: "text-amber-700 dark:text-amber-400",
            highlight: true
        },
        {
            icon: Gamepad2,
            title: "Video Games",
            description: "Enjoying immersive gaming experiences and exploring different genres.",
            details: [
                "Rainbow Six Siege",
                "Battlefield",
                "Overwatch",
                "Independent games"
            ],
            color: "from-purple-500 to-pink-600",
            bgColor: "bg-purple-50 dark:bg-purple-950/20",
            borderColor: "border-purple-200 dark:border-purple-900/50",
            iconBg: "bg-purple-100 dark:bg-purple-900/40",
            iconColor: "text-purple-700 dark:text-purple-400",
            highlight: false
        },
        {
            icon: Sparkles,
            title: "Latest Technology",
            description: "Staying updated with cutting-edge technology products and innovations.",
            details: [
                "Exploring new gadgets and devices",
                "Following tech trends and reviews"
            ],
            color: "from-blue-500 to-cyan-600",
            bgColor: "bg-blue-50 dark:bg-blue-950/20",
            borderColor: "border-blue-200 dark:border-blue-900/50",
            iconBg: "bg-blue-100 dark:bg-blue-900/40",
            iconColor: "text-blue-700 dark:text-blue-400",
            highlight: false
        }
    ];

    return (
        <motion.section
            id="hobbies"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.05, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.4 }}
            className="relative py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 transition-colors duration-500"
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
                        Hobbies & Interests
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
                </motion.div>

                {/* Coffee Emphasis Banner - Prominent */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: 15 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="mb-12 md:mb-16"
                >
                    <div className="relative overflow-hidden rounded-2xl 
                        bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20
                        p-6 md:p-8 shadow-lg border-2 border-amber-200/50 dark:border-amber-900/30
                        hover:shadow-xl transition-shadow duration-300">
                        {/* Subtle background pattern */}
                        <div className="absolute inset-0 opacity-5 dark:opacity-10">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(217,119,6,0.3)_1px,transparent_1px)] bg-[length:40px_40px]" />
                        </div>
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                            <motion.div
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="flex-shrink-0"
                            >
                                <div className="p-4 rounded-xl bg-amber-100 dark:bg-amber-900/40 border border-amber-200 dark:border-amber-800/50">
                                    <FlaskConical className="w-8 h-8 md:w-10 md:h-10 text-amber-700 dark:text-amber-400" strokeWidth={2.5} />
                                </div>
                            </motion.div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    Always experimenting with new brew methods and coffee origins!
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                                    Exploring the art and science of specialty coffee
                                </p>
                            </div>
                        </div>
                        
                        {/* Subtle decorative icons */}
                        <div className="absolute top-4 right-4 w-12 h-12 opacity-5 dark:opacity-10">
                            <Coffee className="w-full h-full text-amber-700 dark:text-amber-400" />
                        </div>
                        <div className="absolute bottom-4 left-4 w-10 h-10 opacity-5 dark:opacity-10">
                            <Droplet className="w-full h-full text-amber-700 dark:text-amber-400" />
                        </div>
                    </div>
                </motion.div>

                {/* Hobbies Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {hobbies.map((hobby, i) => {
                        const Icon = hobby.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -6, scale: 1.02 }}
                                className={`group relative p-6 md:p-8 rounded-2xl 
                                    ${hobby.bgColor} 
                                    border-2 ${hobby.borderColor}
                                    shadow-lg hover:shadow-2xl 
                                    transition-all duration-300 will-change-transform`}
                            >
                                {/* Icon */}
                                <motion.div
                                    className={`inline-flex p-4 rounded-xl ${hobby.iconBg} mb-6
                                        group-hover:scale-110 transition-transform duration-300`}
                                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Icon className={`w-8 h-8 ${hobby.iconColor}`} strokeWidth={2} />
                                </motion.div>

                                {/* Title */}
                                <h3 className={`text-2xl md:text-3xl font-bold mb-3 
                                    bg-gradient-to-r ${hobby.color} bg-clip-text text-transparent`}>
                                    {hobby.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-base md:text-lg">
                                    {hobby.description}
                                </p>

                                {/* Details List */}
                                <ul className="space-y-2.5">
                                    {hobby.details.map((detail, idx) => {
                                        const bulletClass = hobby.iconColor.includes('amber')
                                            ? 'before:text-amber-600 dark:before:text-amber-400'
                                            : hobby.iconColor.includes('purple')
                                            ? 'before:text-purple-600 dark:before:text-purple-400'
                                            : 'before:text-blue-600 dark:before:text-blue-400';
                                        
                                        return (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -5 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.08 + idx * 0.05 }}
                                                className={`text-sm md:text-base text-gray-600 dark:text-gray-400 
                                                    flex items-start gap-3
                                                    before:content-['▹'] 
                                                    ${bulletClass}
                                                    before:font-bold before:flex-shrink-0 before:mt-0.5`}
                                            >
                                                <span>{detail}</span>
                                            </motion.li>
                                        );
                                    })}
                                </ul>

                                {/* Decorative gradient overlay on hover */}
                                <div className={`absolute inset-0 rounded-2xl 
                                    bg-gradient-to-br ${hobby.color} opacity-0 
                                    group-hover:opacity-5 transition-opacity duration-300 
                                    pointer-events-none`} />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.section>
    );
}

