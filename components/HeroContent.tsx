import React from 'react';
import { signIn } from 'next-auth/react';
import CustomNavbar from './Navbar';

const HeroContent = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <CustomNavbar />
            <div className="flex-grow flex items-center justify-center">
                <div className='gap-y-2 flex flex-col items-center text-center'>
                    <h1 className='text-white text-5xl font-bold mb-4 drop-shadow-lg'>Showcase Your Code with Ease</h1>
                    <p className='text-white text-md mb-6 drop-shadow-md'>
                        Easily showcase your coding projects with customizable embedded snippets that integrate seamlessly into any website. Share your work effortlessly!
                    </p>
                    <button onClick={() => signIn("github")} className='bg-white text-purple-700 font-semibold py-2 px-4 rounded-lg shadow hover:bg-purple-100 transition duration-300'>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default HeroContent;
