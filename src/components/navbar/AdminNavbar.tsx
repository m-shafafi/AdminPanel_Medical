import React, { useState } from "react";
import { Menu, X, LogOut, User, Settings } from "lucide-react";

export const AdminNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-xl font-semibold tracking-wide">
                        Admin Panel
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <a href="/dashboard" className="hover:text-blue-400">
                            Dashboard
                        </a>
                        <a href="/news" className="hover:text-blue-400">
                            News
                        </a>
                        <a href="/products" className="hover:text-blue-400">
                            Products
                        </a>
                        <a href="/users" className="hover:text-blue-400">
                            Users
                        </a>
                    </div>

                    {/* Profile / Logout */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="hover:text-blue-400 flex items-center gap-1">
                            <User size={18} /> Profile
                        </button>
                        <button className="hover:text-red-400 flex items-center gap-1">
                            <LogOut size={18} /> Logout
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="focus:outline-none"
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden bg-gray-700">
                    <a href="/dashboard" className="block px-4 py-2 hover:bg-gray-600">
                        Dashboard
                    </a>
                    <a href="/news" className="block px-4 py-2 hover:bg-gray-600">
                        News
                    </a>
                    <a href="/products" className="block px-4 py-2 hover:bg-gray-600">
                        Products
                    </a>
                    <a href="/users" className="block px-4 py-2 hover:bg-gray-600">
                        Users
                    </a>
                    <hr className="border-gray-600" />
                    <a href="/profile" className="block px-4 py-2 hover:bg-gray-600">
                        Profile
                    </a>
                    <a href="/logout" className="block px-4 py-2 hover:bg-gray-600 text-red-400">
                        Logout
                    </a>
                </div>
            )}
        </nav>
    );
};
