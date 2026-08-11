import React from 'react'

const Navbar = ({ search, setSearch }) => {

    return (

        <nav className="bg-gradient-to-b from-[#16181D] to-[#101216] border-b border-[#262A31] shadow-lg shadow-black/40 px-4 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-100 shrink-0">
                <span className="text-[#C9A227]">&lt;</span>
                NexVault/
                <span className="text-[#C9A227]">&gt;</span>
            </h1>

            <span className="w-full sm:w-auto sm:flex-1 sm:max-w-md sm:mx-4 order-3 sm:order-2">
                <input
                    type="text"
                    placeholder="Search Website..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl bg-[#1B1E24] border border-[#262A31] text-slate-100 placeholder-slate-500 outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                />
            </span>

            <a
                href="https://github.com/Anas-tech022"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center cursor-pointer gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-b from-amber-300 to-yellow-600 hover:brightness-105 shadow-md shadow-amber-500/20 transition-all active:scale-[0.98] order-2 sm:order-3 shrink-0"
            >
                <img
                    className="w-7 rounded-full ring-1 ring-black/20"
                    src="myicons/github.png"
                    alt="GitHub"
                />
                <span className="font-bold text-[#16130A]">GitHub</span>
            </a>

        </nav>
    );
}

export default Navbar;