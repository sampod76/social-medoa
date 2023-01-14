import React from 'react';
import Headers from '../Headers/Headers';
import LeftSide from '../leftSide/LeftSide';
import Main from '../MainMedile/Main';
import RightSide from '../RightSide/RightSide';


const Home = () => {
    return (
        <div className="bg-[#EEEAFB] font-Poppins  ">
            <Headers></Headers>
            <main className='max-w-[1440px] mx-auto '>

                <div className=' flex gap-[2%] my-3 '>
                    <LeftSide></LeftSide>
                    <Main></Main>
                    <RightSide></RightSide>
                </div>
            </main>
        </div>
    );
};

export default Home;