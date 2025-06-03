import { logo } from "@/assets";
import { NavItem } from "@/component";
import { NAV_ITEMS } from "@/constant/constant";
import React, { useState } from "react";


const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const scrollToSection = (id: string) => {
        if (id === "home") {
            // Scroll to top when "home" clicked
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
        setActiveSection(id);  // update active nav item
        setIsMobileMenuOpen(false); // close mobile menu if open
    };


    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white backdrop-blur-md shadow-sm">
            <div className="mx-auto w-full px-4 py-3 flex items-center justify-between">
                {/* Logo as button */}
                <button
                    onClick={() => scrollToSection("home")}
                    className="flex items-center gap-2 focus:outline-none"
                    aria-label="Scroll to home section"
                >
                    <img src={logo} alt="Logo" className=" object-contain" height={20} width={220} />
                    <span className="text-lg font-semibold text-zinc-800 select-none"></span>
                </button>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-4">
                    <nav className="hidden md:flex items-center space-x-6">
                        {NAV_ITEMS.map((item) => (
                            <NavItem
                                key={item.id}
                                {...item}
                                isActive={activeSection === item.id}
                                onClick={scrollToSection}
                            />
                        ))}
                    </nav>

                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-zinc-700"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMobileMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t border-zinc-200">
                    {NAV_ITEMS.map((item) => (
                        <NavItem
                            key={item.id}
                            {...item}
                            isActive={activeSection === item.id}
                            onClick={scrollToSection}
                        />
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar;
