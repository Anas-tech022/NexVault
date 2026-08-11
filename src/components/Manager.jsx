import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from "uuid";



const Manager = ({ search }) => {
    const ref = useRef()
    const Passwordref = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])
    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])
    const showPassword = () => {

        Passwordref.current.type = "password"
        if (ref.current.src.includes("myicons/Eye.png")) {
            ref.current.src = "myicons/Cross.png"
            Passwordref.current.type = "text"

        }
        else {
            ref.current.src = "myicons/Eye.png"
            Passwordref.current.type = "password"
        }

    }


    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    const savePassword = () => {
        if (
            form.site.length > 3 &&
            form.username.length > 3 &&
            form.password.length > 3
        ) {

            const newPassword = {
                ...form,
                id: uuidv4()
            };

            const updatedPasswords = [...passwordArray, newPassword];

            setpasswordArray(updatedPasswords);

            localStorage.setItem(
                "passwords",
                JSON.stringify(updatedPasswords)
            );

            setform({
                site: "",
                username: "",
                password: ""
            });

            toast.success("Password saved!");
        } else {
            toast.error("Please fill all fields.");
        }
    };

    const editPassword = (id) => {
        setform(passwordArray.filter(item => item.id === id)[0])
        setpasswordArray(passwordArray.filter(item => item.id !== id))
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
    }

    const deletePassword = (id) => {
        if (window.confirm("Are you sure to delete this password?")) {
            setpasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id))
            )
        }
    }
    console.log("search =", search);
    console.log("passwordArray =", passwordArray);
    const filteredPasswords = passwordArray.filter(item =>
        (item.site || "").toLowerCase().includes((search || "").toLowerCase())
    );
    const copyFunc = (text) => {
        toast('Copied to Clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",

        });
        navigator.clipboard.writeText(text);

    };


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
            <div className="min-h-screen bg-[#0A0B0D] bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(201,162,39,0.07),transparent_60%)] text-slate-100 py-12 px-4 sm:px-6 font-sans">

                {/* Main Input Form Card */}
                <div className="max-w-2xl mx-auto bg-gradient-to-b from-[#16181D] to-[#101216] backdrop-blur-md border border-[#262A31] ring-1 ring-inset ring-[#C9A227]/10 rounded-2xl p-7 shadow-2xl shadow-black/60 flex flex-col gap-5 mb-10">
                    <div className="text-center mb-2">
                        <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
                            &lt;Vaultix/&gt;
                        </h1>
                        <p className="text-slate-500 text-xs mt-1 font-mono uppercase tracking-[0.2em]">Secure local credential locker</p>
                    </div>

                    <input
                        type="text" onChange={handleChange}
                        name="site" value={form.site}
                        placeholder="Enter URL"
                        className="w-full px-4 py-2.5 bg-[#0B0C0F] border border-[#24272E] rounded-xl outline-none focus:ring-2 focus:ring-[#C9A227]/40 focus:border-[#C9A227] text-slate-200 placeholder-slate-500 transition-all shadow-inner"
                    />

                    <div className="flex flex-col sm:flex-row gap-4 relative">
                        <input
                            value={form.username}
                            onChange={handleChange}
                            name="username"
                            type="text"
                            placeholder="Enter Username"
                            className="w-full px-4 py-2.5 bg-[#0B0C0F] border border-[#24272E] rounded-xl outline-none focus:ring-2 focus:ring-[#C9A227]/40 focus:border-[#C9A227] text-slate-200 placeholder-slate-500 transition-all shadow-inner"
                        />

                        <div className="w-full relative">
                            <input
                                ref={Passwordref}
                                value={form.password}
                                type="password" onChange={handleChange}
                                name="password"
                                placeholder="Enter Password"
                                className="w-full px-4 py-2.5 pr-12 bg-[#0B0C0F] border border-[#24272E] rounded-xl outline-none focus:ring-2 focus:ring-[#C9A227]/40 focus:border-[#C9A227] text-slate-200 placeholder-slate-500 transition-all shadow-inner font-mono"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer p-1 rounded-md hover:bg-[#C9A227]/10 transition" onClick={showPassword}>
                                <img ref={ref} width={22} src="myicons/Eye.png" alt="eye" className="opacity-70 hover:opacity-100 transition-opacity" />
                            </span>
                        </div>
                    </div>
                    <div className="btn flex justify-center items-center">

                        <button onClick={savePassword} className="w-fit flex items-center justify-center gap-2 bg-gradient-to-b from-amber-300 to-yellow-600 hover:brightness-105 text-[#16130A] font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-amber-500/20 active:scale-[0.99] mt-2">
                            <lord-icon
                                src="https://cdn.lordicon.com/efxgwrkc.json"
                                trigger="hover"
                                colors="primary:#022c22,secondary:#022c22"
                                style={{ height: "20px", width: "30px" }}
                            ></lord-icon>
                            Add Credentials
                        </button>
                    </div>
                </div>

                {/* Password List Container */}
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="font-bold text-lg text-slate-300 mb-4 tracking-wide border-b border-[#262A31] pb-2 uppercase text-sm">Vault Records</h2>
                    {filteredPasswords.length === 0 ? (<div className="text-center py-12 border border-dashed border-[#262A31] rounded-xl text-slate-500 text-sm bg-slate-900/20">Not the password is here </div>) : (

                        <div className="overflow-x-auto rounded-xl border border-[#262A31] shadow-xl">
                            <table className="min-w-full divide-y divide-[#262A31] bg-[#101216]/60">
                                <thead className="bg-[#14161A]">
                                    <tr>
                                        <th className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Site</th>
                                        <th className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Username</th>
                                        <th className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Password</th>
                                        <th className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#262A31]/60">
                                    {filteredPasswords.map((item, index) => {
                                        return <tr key={index} className="hover:bg-[#C9A227]/[0.04] transition-colors">
                                            <td className="px-6 py-4 text-sm font-medium text-slate-200 ">
                                                <div className=" flex items-center  gap-3 ">
                                                    <a href={item.site} target="_blank" className="hover:text-amber-300 transition-colors">{item.site}</a>
                                                    {/* <img style={{ width: "26px" }} src="myicons/Copyimage.png"  rounded-md opacity-70 hover:opacity-100 transition-opacity" alt="Icon" /> */}
                                                    <img style={{ "width": "26px", "height": "26px" }} src="https://img.icons8.com/fluency-systems-filled/48/copy.png" onClick={() => copyFunc(item.site)} className="cursor-pointer invert " alt="copy" />
                                                </div></td>
                                            <td className="px-6 py-4 text-sm font-medium text-slate-200 font-mono">
                                                <div className=" flex items-center  gap-3 ">
                                                    <a href="{item.username}" alt="__blank" className="hover:text-amber-300 transition-colors">{item.username}</a>
                                                    <img style={{ "width": "26px", "height": "26px" }} src="https://img.icons8.com/fluency-systems-filled/48/copy.png" onClick={() => copyFunc(item.username)} className="cursor-pointer invert " alt="copy" />
                                                </div></td>
                                            <td className="px-6 py-4 text-sm font-medium text-slate-200 font-mono">
                                                <div className=" flex items-center  gap-3 ">
                                                    <a href="{item.password}" alt="__blank" className="hover:text-amber-300 transition-colors">{"*".repeat(item.password.length)}</a>
                                                    <img style={{ "width": "26px", "height": "26px" }} src="https://img.icons8.com/fluency-systems-filled/48/copy.png" onClick={() => copyFunc(item.password)} className="cursor-pointer invert " alt="copy" />
                                                </div></td>
                                            <td className="px-6 py-4 text-sm font-medium text-slate-200">
                                                <div className=" flex items-center w-6 gap-5 ">
                                                    <span className="cursor-pointer invert hover:opacity-70 transition-opacity" onClick={() => { editPassword(item.id) }}>

                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/fikcyfpp.json"
                                                            trigger="hover"
                                                            style={{ width: "25px", height: "25px" }}>
                                                        </lord-icon>
                                                    </span>
                                                    <span className="cursor-pointer invert hover:opacity-70 transition-opacity" onClick={() => { deletePassword(item.id) }} >
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/xyfswyxf.json"
                                                            trigger="hover"
                                                            style={{ width: "25px", height: "25px" }}>
                                                        </lord-icon>
                                                    </span>
                                                </div></td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )
                    }
                </div>
            </div>
        </>
    );
};

export default Manager;
