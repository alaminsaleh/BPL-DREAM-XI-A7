import profile from '../../assets/images/logo-footer.png'

const Footer = () => {
    return (
        <footer className="bg-neutral  text-neutral-content p-10  mt-[270px] md:mt-[230px] relative">
            <div className="  flex flex-col justify-between items-center space-y-8">

               
                <div className="mt-[100px]">
                    <img src={profile} alt="Footer Logo" className="mb-6 md:mt-10 mx-auto" />
                </div>

                {/* Navigation */}
                <div className=" flex flex-col sm:flex-row justify-around w-full mx-auto space-y-6 sm:space-y-0 sm:space-x-8">

                    <nav className="flex flex-col items-start mb-4 sm:mb-0 space-y-3">
                        <h6 className="text-xl text-white">About-Us</h6>
                        <p className="font-normal">
                            We are a passionate team providing<br /> quality service. You will get<br /> many services timely.
                        </p>
                    </nav>

                    <nav className="flex flex-col items-start mb-4 sm:mb-0 space-y-2">
                        <h6 className="text-xl text-white">Quick-List</h6>
                        <ul className="list-inside space-y-1" style={{ listStyleType: 'square' }}>
                            <li><a className="link link-hover">Home</a></li>
                            <li><a className="link link-hover">Contact</a></li>
                            <li><a className="link link-hover">About us</a></li>
                            <li><a className="link link-hover">Press kit</a></li>
                        </ul>
                    </nav>

                    <nav className="flex flex-col items-start space-y-3">
                        <h6 className="text-xl text-white">Subscribe</h6>
                        <p className="mb-4">
                            Subscribe to newsletter for the<br /> latest updates.
                        </p>

                        <div className="form-control w-full max-w-xs">
                            <div className="flex overflow-hidden rounded-xl shadow-md w-full max-w-sm">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="p-4 w-full text-gray-700 focus:outline-none"
                                />
                                <button className="px-6 py-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>

            <div className='w-full border-t-2 border-gray-600 mt-8 text-gray-300 text-center mb-3'>
                <small>@2024 Al Amin All Rights Reserved.</small>
            </div>

        </footer>
    );
};

export default Footer;

