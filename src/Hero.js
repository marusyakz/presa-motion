// components/Hero.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveGlobe from './InteractiveGlobe';
import ParticlesBackground from './ParticlesBackground';
import Navbar from './Navbar'; // Импортируем компонент навигации
import { Link } from 'react-scroll'; // Импортируем компонент Link из react-scroll


const Hero = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className='bg-white/5 backdrop-blur-xl border-b border-white border-opacity-10 flex items-center justify-center absolute w-full left-0 top-0 bg-opacity-75 z-50'>
                <div className='container mx-auto'>
                    <Navbar /> {/* Добавляем компонент Navigation */}
                </div>
            </div>

            <div className="hero min-h-screen overflow-hidden relative after:bg-black after:absolute after:z-40 after:block after:w-full after:h-screen after:bg-opacity-35 bg-gray-950 flex items-center flex-col justify-center">
                {/* Контейнер для глобуса и частиц */}
                <div className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden">
                    <InteractiveGlobe />
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-20">
                        <ParticlesBackground />
                    </div>
                </div>

                <AnimatePresence>
                    {loaded && (
                        <>
                            <motion.div
                                className="bg-white w-full absolute left-0 bg-opacity-25"
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                exit={{ opacity: 0, scaleX: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                style={{ height: '1px', top: '50%', transformOrigin: 'left center' }}
                            ></motion.div>

                            <motion.div
                                className="relative w-full z-50"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="container mx-auto">
                                    <div className="border border-white bg-black/8 backdrop-blur-xl w-full p-10 flex flex-col items-center rounded-lg border-opacity-10">
                                        <motion.h1
                                            className="font-bold text-white text-[28px] py-5 uppercase typing-effect"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.5, duration: 0.8 }}
                                        >
                                            Платформа B2B для эффективных закупок
                                        </motion.h1>
                                        <motion.p
                                            className="text-white"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.7, duration: 0.8 }}
                                        >
                                            Публикация заявок, отклики от проверенных поставщиков.
                                        </motion.p>
                                        <motion.a
                                            className='text-white/70 uppercase px-5 border-opacity-15 tracking-wide py-2 border-white font-bold border mt-10 rounded-sm text-sm'
                                            href=''
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.9, duration: 0.8 }}
                                        >
                                            <Link
                                                to="how-it-works"
                                                smooth={true}
                                                duration={500}
                                                className="cursor-pointer"
                                            >Подробнее
                                            </Link>
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Hero;
