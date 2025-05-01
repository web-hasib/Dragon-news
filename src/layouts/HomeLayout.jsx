import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import NavBar from '../components/NavBar';
import Leftaside from '../components/homeLayout/Leftaside';
import RightAside from '../components/homeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav  className='w-11/12 mx-auto my-3'>
                    <NavBar></NavBar>
                </nav>
            </header>
            <main className='grid grid-cols-12 gap-5 w-11/12 mx-auto my-5'>
               <aside className='col-span-3 sticky top-5 h-fit'>
                <Leftaside></Leftaside>
               </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky top-5 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;