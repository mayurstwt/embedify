"use client";

import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import EmbedCodeGenerator from './EmbedCodeGenerator';
import Image from 'next/image'; // Import the Image component

const DashboardContent = () => {
    const { data: session } = useSession();

    // Check if session is null
    if (!session) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-lg">You are not logged in.</h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            {/* User Info Section */}
            <div className="flex justify-between items-center w-screen px-10 py-10 text-white">
                <div>
                    <h1 className="text-lg font-semibold">Logged in as {session.user?.name}</h1>
                    <button 
                        onClick={() => signOut({ callbackUrl: `/` })} 
                        className="mt-2 text-blue-500 hover:underline"
                    >
                        Sign Out
                    </button>
                </div>
                <Image 
                    className='rounded-full' 
                    src={session.user?.image || 'fallback_image_url.jpg'} 
                    alt="User profile" 
                    width={56} // Set the width
                    height={56} // Set the height
                />
            </div>

            {/* Main Content Section */}
            <div className="flex-grow">
                <EmbedCodeGenerator/>
            </div>
        </div>
    );
}

export default DashboardContent;
