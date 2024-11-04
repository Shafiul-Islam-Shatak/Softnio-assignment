
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
            <div className='flex items-center justify-center w-full h-full opacity-80'
                style={{
                    background: " linear-gradient(123.4deg, #BD1F17 40.8%, #A61D13 76.4%, #8E1B0F 120.69%)",
                }}
            >
                <h1>hii</h1>
            </div>

        </div>
    );
};

export default Bannar;
