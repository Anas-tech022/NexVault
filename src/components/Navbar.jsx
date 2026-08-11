import React from 'react'

const Navbar = ({ search, setSearch }) => {

        return (
            <nav className="sticky top-0 z-50 bg-gradient-to-b from-[#16181D] to-[#101216] border-b border-[#262A31] shadow-lg shadow-black/40 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-3">
                <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-3 sm:gap-4">

                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-100 tracking-tight shrink-0 flex items-center gap-0.5 select-none">
                        <span className="text-[#C9A227] font-mono font-extrabold">&lt;</span>
                        NexVault/
                        <span className="text-[#C9A227] font-mono font-extrabold">&gt;</span>
                    </h1>

                    <a
                        href="https://github.com/Anas-tech022"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="order-2 md:order-3 h-10 flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 hover:brightness-110 shadow-md shadow-amber-500/20 hover:shadow-amber-500/35 hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0 active:scale-95 shrink-0"
                    >
                        <img
                            className="w-5 h-5 rounded-full ring-1 ring-black/30 object-cover"
                            src="myicons/github.png"
                            alt="GitHub"
                        />
                        <span className="font-bold text-xs sm:text-sm text-[#16130A] tracking-wide">
                            GitHub
                        </span>
                    </a>

                    <div className="order-3 md:order-2 w-full md:w-auto md:flex-1 md:max-w-md lg:max-w-lg md:mx-4">
                        <div className="relative flex items-center w-full">
                            {/* Search Icon */}
                            <svg
                                className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>

                            <input
                                type="text"
                                placeholder="Search Website..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full h-10 pl-10 pr-4 rounded-xl bg-[#1B1E24] border border-[#262A31] text-slate-100 text-sm placeholder-slate-500 outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all duration-200 shadow-inner"
                            />
                        </div>
                    </div>

                </div>
            </nav>
        );
    }
   
export default Navbar;
