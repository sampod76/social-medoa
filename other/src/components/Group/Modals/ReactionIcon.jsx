import React from 'react'

const ReactionIcon = ({ Icon, title, color }) => (
    <div className={`flex-1 h-full flex items-center justify-center children:hover:-translate-y-4 children:hover:scale-125 before:content-['title'] before:absolute before:-top-12 before:hidden hover:before:block before:text-white before:bg-black before:px-5 before:rounded-lg before:py-1`}>
        <Icon style={{ color: `${color}` }} className={`transition-all text-lg md:text-2xl relative   `} />
    </div>
)

export default ReactionIcon
