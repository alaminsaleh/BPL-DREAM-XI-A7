
const UpperCard = () => {
    return (
        <div
            className="hero bg-cover border bg-no-repeat p-6 sm:p-12 md:p-10 rounded-3xl w-[90%] sm:w-[70%] mx-auto my-6 sm:my-8 md:my-10 py-6"
            style={{
                backgroundImage: "url('https://i.ibb.co/4sMBTXc/bg-shadow.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="hero-content text-center grid grid-cols-1 gap-4 sm:gap-6 items-center">
                <div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">Subscribe to our Newsletter</h1>
                    <h4 className="text-md sm:text-lg md:text-xl mb-4 sm:mb-6">Get the latest updates and news right in your inbox!</h4>
                </div>
                <div className="flex flex-col sm:flex-row md:gap-4 gap-2 items-center">
                    <input
                        className="border-2 border-gray-300 py-2 sm:py-4 px-2 sm:px-4 md:px-7 pr-6 sm:pr-10 md:pr-24 rounded-xl w-full sm:w-auto"
                        type="email"
                        placeholder="Enter Your Email"
                    />
                    <button
                        className="text-sm sm:text-lg md:text-xl bg-gradient-to-r from-pink-300 to-yellow-500 text-black font-bold py-3 sm:py-4 px-4 sm:px-5 md:px-7 rounded-xl w-full sm:w-auto"
                        style={{ boxShadow: 'inset 4px 4px 20px 0px rgba(19, 19, 19, 0.3)' }}
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </div>


    );
};

export default UpperCard;

