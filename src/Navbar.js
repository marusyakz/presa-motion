// components/Navigation.js
import React from 'react';
import { Link } from 'react-scroll'; // Импортируем компонент Link из react-scroll

const Navbar = () => {
    return (
        <div className="text-gray-300 border-r border-white border-opacity-10 font-bold">
            <div className="flex items-center justify-between">
                <div className="text-gray-300 border-r border-white border-opacity-10 p-5 font-bold">INEED </div>
                <div>
                    <Link
                        to="how-it-works"
                        smooth={true}
                        duration={500}
                        className="text-gray-300 border-x border-white border-opacity-10 p-5 cursor-pointer"
                    >
                        Как это работает
                    </Link>
                    <Link
                        to="advantages"
                        smooth={true}
                        duration={500}
                        className="text-gray-300 border-x border-white border-opacity-10 p-5 cursor-pointer"
                    >
                        Преимущества
                    </Link>
                    <Link
                        to="for-whom"
                        smooth={true}
                        duration={500}
                        className="text-gray-300 border-x border-white border-opacity-10 p-5 cursor-pointer"
                    >
                        Для кого этот портал
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
