
const Bannar = () => {
    return (
        <div
            className="relative bg-red-700 text-white"
            style={{
                backgroundImage: `url(https://i.ibb.co.com/m5Wj84b/e709b27bbda0155da5252a80704b546b.png)`,
                backgroundRepeat: 'repeat',
                backgroundSize: '200px',
            }}
        >
            <div className='flex items-center justify-center w-full h-full '
                style={{
                    background: " linear-gradient(123.4deg, #BD1F17 40.8%, #A61D13 76.4%, #8E1B0F 120.69%)",
                }}

            >
                <div className="max-w-[1372px] mx-auto border border-green-400 flex">

                    {/* text content */}
                    <div className="bg-red-700 ">
                        <h1 className="text-9xl uppercase font-bold font-bebas">Taste the authentic Saudi cuisine</h1>
                        <h2>Among the best Saudi chefs in the world, serving you something beyond flavor.</h2>
                        <button
                            className="py-[10px] text-[1rem] px-[24px] uppercase bg-yellow-500 text-black hover:bg-blue-400 transition-all duration-300 sm:flex hidden opacity-100 font-semibold">Explore Menu
                        </button>

                    </div>
                    {/* image */}
                    <div>
                        <img src="https://i.ibb.co.com/Gp7qd4W/image-1.png" alt="" />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Bannar;
