import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftSidebar from '../components/layout-component/LeftSidebar';
import RightSidebar from '../components/layout-component/RightSidebar';
import CategoryNews from '../pages/CategoryNews';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className="font-poppins">

            {/* ---------------------Header---------------------  */}
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>

            {/* ---------------------Navbar-------------------------  */}
            <nav className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </nav>

            {/* ---------------------Main---------------------  */}
            <main className='w-11/12 mx-auto grid md:grid-cols-12 gap-5  py-14' >
                <aside className='col-span-3 '> <LeftSidebar></LeftSidebar> </aside>
                <section className='col-span-6 '> <Outlet></Outlet></section>
                <aside className='col-span-3 '> <RightSidebar></RightSidebar> </aside>
            </main>
        </div>
    );
};

export default HomeLayout;