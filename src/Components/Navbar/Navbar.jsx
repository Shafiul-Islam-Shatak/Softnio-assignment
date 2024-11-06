import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    return (
        <div
            className="relative text-white"
            style={{
                backgroundImage: `url(https://i.ibb.co/m5Wj84b/e709b27bbda0155da5252a80704b546b.png)`,
                backgroundRepeat: 'repeat',
                backgroundSize: '200px',
            }}
        >
            {/* Gradient Overlay with opacity */}
            <div
                className="absolute inset-0 opacity-80"
                style={{
                    background: "linear-gradient(123.4deg, #BD1F17 40.8%, #A61D13 76.4%, #8E1B0F 120.69%)",
                }}
            ></div>

            {/* Navbar Content Wrapper */}
            <div className="relative z-50">
                <nav
                    className="flex items-center justify-between w-full relative boxShadow rounded-full px-[10px] py-[8px] max-w-[1372px] mx-auto bg-transparent"
                >
                    <div className="flex items-center">
                        <div className="flex items-center gap-[6px]">
                            <img src="https://i.ibb.co/cbFqN0g/Group.png" alt="logo" className="w-[36px]" />
                            <h1 className="text-3xl text-white font-poppins">Restaurant</h1>
                        </div>
                        <ul className="items-center ml-14 gap-[40px] text-[1rem] text-white lg:flex hidden">
                            {["Home", "About", "Portfolio", "Clients", "Blog", "Contact"].map((item) => (
                                <li
                                    key={item}
                                    className="relative before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="items-center gap-[10px] flex">
                        <button
                            className="py-[10px] text-[1rem] px-[24px] uppercase bg-yellow-500 text-black hover:bg-blue-400 transition-all duration-300 sm:flex hidden font-semibold"
                        >
                            Book A Table
                        </button>

                        <IoMenuSharp
                            className="text-[1.8rem] mr-1 text-[#424242] cursor-pointer lg:hidden flex"
                            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                        />
                    </div>

                    <aside
                        className={`${
                           ! mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px]  hidden opacity-0 z-[-1]"
                        }  lg:hidden bg-white boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}
                    >
                        <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
                            {["Home", "About", "Portfolio", "Clients", "Blog", "Contact"].map((item) => (
                                <li
                                    key={item}
                                    className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </aside>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
