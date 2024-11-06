const Bannar = () => {
    return (
        <div
            className="relative text-white"
            style={{
                backgroundImage: `url(https://i.ibb.co/m5Wj84b/e709b27bbda0155da5252a80704b546b.png)`,
                backgroundRepeat: 'repeat',
                backgroundSize: '200px',
            }}
        >
            {/* Gradient overlay with opacity */}
            <div
                className="absolute inset-0 opacity-80"
                style={{
                    background: "linear-gradient(123.4deg, #BD1F17 40.8%, #A61D13 76.4%, #8E1B0F 120.69%)",
                }}
            ></div>

            {/* Content wrapper (text and image) */}
            <div className="relative z-10 max-w-[1372px] mx-auto  items-center justify-center w-full h-full lg:py-[130px]">
                <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                    {/* Text content */}
                    <div className=" py-6 z-20 w-3/4 lg:w-[750px]">
                        <h1 className="text-4xl md:text-8xl lg:text-9xl uppercase  font-bebas lg:bg-red-700 lg:bg-opacity-80 lg:w-[945px] ">
                            Taste the authentic Saudi cuisine
                        </h1>
                        <h2 className="mt-4 text-xl">
                            Among the best Saudi chefs in the world, serving you something beyond flavor.
                        </h2>
                        <button
                            className="mt-6 py-3 px-8 uppercase bg-yellow-500 text-black hover:bg-blue-400 transition-all duration-300 font-semibold"
                        >
                            Explore Menu
                        </button>
                    </div>

                    {/* Image */}
                    <div className="flex relative">
                        <img className="w-11/12 lg:w-[750px] mx-auto pb-8 lg:pb-0 " src="https://i.ibb.co/Gp7qd4W/image-1.png" alt="Saudi cuisine" />
                        <div className="absolute -top-9 lg:-right-7  right-1.5">
                            <img className="" src="https://i.ibb.co.com/qm0Yt1x/Vector.png" alt=""  />
                        </div>
                        <div className="flex items-center justify-center absolute bottom-10 right-0 lg:-right-14 lg:bottom-0">
                            <div className="bg-yellow-500  rounded-full lg:w-[120px] lg:h-[120px] flex items-center justify-center">
                                <div className="bg-yellow-500 border border-dashed border-red-400 rounded-full w-[95px] h-[95px] flex items-center justify-center">
                                    <h1 className="uppercase text-black font-bebas text-3xl text-center">
                                        Today <br /> Offer
                                    </h1>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Bannar;
