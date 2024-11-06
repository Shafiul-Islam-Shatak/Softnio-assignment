import { useState } from "react";

const ContentSection = () => {
    const [activeTab, setactiveTab] = useState(1);

    return (
        <div className="lg:mt-[120px] mt-8">
            <div className="max-w-[1372px] flex flex-col lg:flex-row mx-auto">
                {/* img */}
                <div className="w-11/12 mx-auto lg:w-[617px] lg:mx-0 pb-8 lg:pb-0">
                    <img src="https://i.ibb.co.com/Vv20JfQ/Frame-1707478063.png" alt="" />
                </div>
                {/*tabs content */}
                <div className=" px-8 lg:w-1/2 ">
                    <div className=" mb-4 flex items-center gap-5 justify-center">
                        <ul className="flex w-full items-center border-b-2 border-red-700">
                            <li
                                className={`${activeTab === 1 &&
                                    " !text-white !bg-red-700"
                                    } px-6 py-2 border-t    text-[#424242] transition duration-300 border-transparent cursor-pointer`}
                                onClick={() => setactiveTab(1)}
                            >
                                About
                            </li>
                            <li
                                className={`${activeTab === 2 &&
                                    "!text-white !bg-red-700"} px-6 py-2 border-t  text-black transition duration-300 border-transparent cursor-pointer`}
                                onClick={() => setactiveTab(2)}
                            >
                                Experience
                            </li>
                            <li
                                className={`${activeTab === 3 &&
                                    "!text-white !bg-red-700"
                                    } px-6 py-2 border-t  text-black transition duration-300 border-transparent cursor-pointer`}
                                onClick={() => setactiveTab(3)}
                            >
                                Contact
                            </li>

                        </ul>
                    </div>
                    {/* Tab Content */}
                    <div className=''>
                        {activeTab === 1 && (
                            <div>
                                <h2 className="text-2xl font-semibold mb-4 font-bebas lg:text-6xl">Exceptional culinary experience and delicious food</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                                <div className="flex lg:space-x-8 space-x-4 items-center">
                                    <button
                                        className="mt-6 text-xs lg:text-lg lg:py-3 lg:px-8 p-3 uppercase bg-yellow-500 text-black hover:bg-blue-400 transition-all duration-300 font-semibold"
                                    >
                                        about more
                                    </button>
                                    <div className="flex items-center justify-center gap-3 mt-5">
                                        <img src="https://i.ibb.co.com/PYbVnrW/Vector-1.png" alt=""  />
                                        <h1>+88 3426 739 485</h1>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 2 && (
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Our Experience</h2>
                                <p>We have extensive experience in delivering high-quality projects to our clients.</p>
                            </div>
                        )}
                        {activeTab === 3 && (
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                                <p>If you have any questions, feel free to reach out to us through email or phone.</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ContentSection;