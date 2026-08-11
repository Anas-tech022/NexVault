import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#101216] to-[#16181D] border-t border-[#262A31] px-8 py-6 mt-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-2 text-center">
        <h2 className="text-lg font-bold text-slate-100">
          <span className="text-[#C9A227]">&lt;</span>
          Passop
          <span className="text-[#C9A227]">&gt;</span>
        </h2>
        <p className="text-slate-500 text-xs font-mono uppercase tracking-[0.2em]">
          Store it, seal it, keep it safe
        </p>
        <p className="text-slate-400 text-sm mt-2">
          Made with <span className="text-[#C9A227]">♥</span> by{" "}
          <span className="font-semibold text-slate-200">Anas</span>
        </p>
        <p className="text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} Passop. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
