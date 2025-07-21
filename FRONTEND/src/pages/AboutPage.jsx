import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';

const AboutPage = () => {
    const features = [
        {
            icon: '⚡',
            title: 'Lightning Fast',
            description: 'Generate short URLs in milliseconds with our optimized infrastructure',
            color: 'from-yellow-400 to-orange-500'
        },
        {
            icon: '📊',
            title: 'Advanced Analytics',
            description: 'Track clicks, monitor performance, and gain insights into your audience',
            color: 'from-blue-400 to-purple-500'
        },
        {
            icon: '🔒',
            title: 'Enterprise Security',
            description: 'Bank-level encryption ensures your links are safe and always accessible',
            color: 'from-green-400 to-teal-500'
        },
        {
            icon: '🎯',
            title: 'Custom Branding',
            description: 'Create branded short links that reflect your business identity',
            color: 'from-pink-400 to-red-500'
        },
        {
            icon: '🌍',
            title: 'Global CDN',
            description: 'Worldwide content delivery network for maximum speed and reliability',
            color: 'from-indigo-400 to-blue-500'
        },
        {
            icon: '📱',
            title: 'Mobile Optimized',
            description: 'Perfect experience across all devices and screen sizes',
            color: 'from-purple-400 to-pink-500'
        }
    ];

    const stats = [
        { number: '10M+', label: 'URLs Shortened', icon: '🔗' },
        { number: '500K+', label: 'Happy Users', icon: '👥' },
        { number: '99.9%', label: 'Uptime', icon: '⚡' },
        { number: '150+', label: 'Countries', icon: '🌍' }
    ];

    const techStack = [
        { name: 'React.js', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
        { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-500' },
        { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-teal-500' },
        { name: 'Express.js', icon: '🚀', color: 'from-gray-600 to-gray-800' },
        { name: 'Tailwind CSS', icon: '🎨', color: 'from-blue-400 to-cyan-500' },
        { name: 'Framer Motion', icon: '✨', color: 'from-purple-400 to-pink-500' }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
        >
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                            About URLBee 🐝
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            The world's most advanced URL shortening platform, trusted by millions of users worldwide
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/dashboard"
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                Get Started Free
                            </Link>
                            <Link
                                to="/"
                                className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl"
                            >
                                Try Demo
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Stats Section */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="py-16 bg-white/50 backdrop-blur-sm"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl mb-2">{stat.icon}</div>
                                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Features Section */}
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                            Why Choose URLBee?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Experience the perfect blend of simplicity, power, and reliability
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                                className="group"
                            >
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tech Stack Section */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="py-20 bg-white/30 backdrop-blur-sm"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                            Built with Modern Technology
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Powered by cutting-edge technologies for optimal performance and scalability
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                                className="group"
                            >
                                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 text-center">
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tech.color} flex items-center justify-center text-xl mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                                        {tech.icon}
                                    </div>
                                    <h3 className="text-sm font-semibold text-gray-800">
                                        {tech.name}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Developer Section */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="py-20 bg-gradient-to-r from-purple-600 to-blue-600"
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
                        Meet the Developer
                    </h2>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/20">
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-4xl mb-6">
                                👨‍💻
                            </div>
                            
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                Abhinav Tripathi
                            </h3>
                            
                            <p className="text-lg text-blue-100 mb-6">
                                Full Stack Developer
                            </p>
                            
                            <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl">
                                Passionate about creating innovative web solutions that make a difference. 
                                URLBee is crafted with love and dedication to provide the best URL shortening experience.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://github.com/abhinavtee"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-white/30 flex items-center gap-2"
                                >
                                    <span>🐙</span>
                                    GitHub Profile
                                </a>
                                
                                <div className="bg-white/10 text-white px-6 py-3 rounded-xl font-semibold border border-white/20 flex items-center gap-2">
                                    <span>❤️</span>
                                    Made with Love
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Mission Section */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.0 }}
                className="py-20 bg-gradient-to-r from-blue-600 to-purple-600"
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
                        Our Mission
                    </h2>
                    <p className="text-xl text-blue-100 leading-relaxed mb-8">
                        To democratize the web by making URL sharing simple, secure, and insightful. 
                        We believe every click tells a story, and we're here to help you understand yours.
                    </p>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <p className="text-lg text-white italic">
                            "URLBee isn't just about shortening links - it's about connecting people, 
                            ideas, and opportunities across the digital world."
                        </p>
                        <div className="mt-4 text-blue-200 font-semibold">
                            - URLBee Team
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.2 }}
                className="py-20"
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12 shadow-xl border border-gray-100">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Join millions of users who trust URLBee for their link management needs
                        </p>
                        <Link
                            to="/dashboard"
                            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Start Shortening URLs 🚀
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AboutPage;
