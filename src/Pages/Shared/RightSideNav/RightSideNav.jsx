import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';




const RightSideNav = () => {
    return (
        <div>
            <div className='mb-6'>
                <h3 className="text-3xl">Login with</h3>
                <button type="button" className="mt-5 w-full text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                    <FaGoogle className='mr-3'></FaGoogle>
                    Sign in with Google
                </button>
                <button type="button" className=" w-full mt-2 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                    <FaGithub className='mr-3'></FaGithub>
                    Sign in with Github
                </button>
            </div>
            <div className='mb-6'>

                <div className='p-4 mb-6'>
                    <h2 className="text-3xl mb-4">Find Us on</h2>
                    <a className='p-4 flex text-lg items-center border rounded-t-lg' href='https://facebook.com'>
                        <FaFacebook className='mr-3'></FaFacebook>
                        <span>Facebook</span>
                    </a>
                    <a className='p-4 flex text-lg items-center border-x' href='https://twitter.com'>
                        <FaTwitter className='mr-2'></FaTwitter>
                        <span>Twitter</span>
                    </a>
                    <a className='p-4 flex text-lg items-center border rounded-b-lg' href='https://instagram.com'>
                        <FaInstagram className='mr-2'></FaInstagram>
                        <span>Facebook</span>
                    </a>
                </div>

                {/* q zone */}
                <div className='p-4 space-y-3 mb-6 bg-slate-400 text-black'>
                    <h2 className="text-3xl mb-8">Q Zone</h2>
                    <img src="https://i.ibb.co/H7KCW51/qZone1.png" alt="" />
                    <img src="https://i.ibb.co/jDPV3jz/qZone3.png" alt="" />
                    <img src="https://i.ibb.co/xhRKRdZ/qZone2.png" alt="" />
                </div>



            </div>

        </div>
    );
};

export default RightSideNav;