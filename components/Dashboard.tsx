"use client"
import { useSession } from 'next-auth/react';
import React from 'react';
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';
import HeroContent from './HeroContent';
import DashboardContent from './DashboardContent';

const Dashboard = () => {
    const { data: session } = useSession();
    return (
        <>
            {session ? (
                <BackgroundBeamsWithCollision>
                    <DashboardContent />
                </BackgroundBeamsWithCollision>
            ) : (
                <BackgroundBeamsWithCollision>
                    <HeroContent />
                </BackgroundBeamsWithCollision>
            )}
        </>
    );
}

export default Dashboard;
