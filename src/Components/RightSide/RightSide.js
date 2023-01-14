import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const RightSide = () => {
    return (
        <div className='w-60  space-y-4 hidden md:block  '>
            <div className='bg-white p-3 space-y-3 rounded-xl shadow-md'>
                <div className='flex justify-between items-center rounded-xl  '>

                    <p className=' font-bold'>Messages</p>
                    <span><AiOutlinePlus></AiOutlinePlus></span>
                </div>
                <div className=''>

                    <input type="search" name="" id="" placeholder='Search Messages' className='bg-slate-200 rounded-3xl w-[99%] placeholder:text-xs px-3 py-2 placeholder:text-center' />
                </div>

                <div className='flex justify-between font-bold gap-2'>
                    <h5 className='underline underline-offset-8 text-xs lg:text-base'>Primary</h5>
                    <h5 className='underline underline-offset-8 text-xs lg:text-base'>General</h5>
                    <h5 className='underline underline-offset-8 text-xs lg:text-base text-blue-700'>Requests</h5>
                </div>
                {/* all message  */}
                <div className='space-y-4'>
                    <div className='flex gap-5 items-center'>
                        <img src="https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=100" alt="" className='w-9 h-9 rounded-full' />
                        <div className=''>
                            <p className='text-sm font-bold'>Sampod Nath</p>
                            <p className='text-xs text-gray-500'>Please help me</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <img src="https://images.pexels.com/photos/8957707/pexels-photo-8957707.jpeg?auto=compress&cs=tinysrgb&w=100" alt="" className='w-9 h-9 rounded-full' />
                        <div className=''>
                            <p className='text-sm font-bold'>Abdulka Nath</p>
                            <p className='text-xs text-gray-500'>Give me price</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <img src="https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?b=1&s=612x612&w=0&k=20&c=04jn4IY7hdCR0vspCWR-z65Hf6F6bSNzafI-yyWEqOE=" alt="" className='w-9 h-9 rounded-full' />
                        <div className=''>
                            <p className='text-sm font-bold'>Rafulka Nath</p>
                            <p className='text-xs text-gray-500'>Mobile price</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <img src="https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?b=1&s=612x612&w=0&k=20&c=t7Z7NBXf5t7jWqoFxsH7B3bgrO3_BznOOhqEXWywjOc=" alt="" className='w-9 h-9 rounded-full' />
                        <div className=''>
                            <p className='text-sm font-bold'>Monir Nath</p>
                            <p className='text-xs text-gray-500'>Colores me</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <img src="https://media.istockphoto.com/id/1319763895/photo/smiling-mixed-race-mature-man-on-grey-background.jpg?b=1&s=612x612&w=0&k=20&c=jIlBJzxPiqpROW_F-CsYMHscAcwBqUsrv72uFKwqvlc=" alt="" className='w-9 h-9 rounded-full' />
                        <div className=''>
                            <p className='text-sm font-bold'>sojub Nath</p>
                            <p className='text-xs text-gray-500'>Many people All</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-xl p-2 space-y-2 shadow-md'>
                <h3>Requests</h3>
                <div className='space-y-2'>

                    <div className='flex  gap-5 '>
                        <img src="https://img.freepik.com/free-photo/fashionable-young-dark-skinned-mulatto-woman-wearing-white-tank-top-smiling-keeping-hands-her-back-standing-isolated-against-blank-wall-with-copy-space-your-text_343059-1589.jpg?size=626&ext=jpg&ga=GA1.2.1420041849.1667928226&semt=sph" alt="" className='w-8 h-8 rounded-full' />
                        <div className='-mt-1'>
                            <p>Derek West</p>
                            <p className='text-xs text-gray-400'>9 mutual friends</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <button className='text-center bg-indigo-600 w-[45%] text-white rounded-3xl  text-sm'>Accept</button>
                        <button className='text-center bg-indigo-600 w-[45%] text-white rounded-3xl  text-sm'>Decline</button>
                    </div>
                </div>
                <div className='space-y-2'>

                    <div className='flex  gap-5 '>
                        <img src="https://img.freepik.com/free-photo/fashionable-young-dark-skinned-mulatto-woman-wearing-white-tank-top-smiling-keeping-hands-her-back-standing-isolated-against-blank-wall-with-copy-space-your-text_343059-1589.jpg?size=626&ext=jpg&ga=GA1.2.1420041849.1667928226&semt=sph" alt="" className='w-8 h-8 rounded-full' />
                        <div className='-mt-1'>
                            <p>Derek West</p>
                            <p className='text-xs text-gray-400'>9 mutual friends</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <button className='text-center bg-indigo-600 w-[45%] text-white rounded-3xl text-sm'>Accept</button>
                        <button className='text-center bg-indigo-600 w-[45%] text-white rounded-3xl text-sm'>Decline</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RightSide;