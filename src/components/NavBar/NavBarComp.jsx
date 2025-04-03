import { HiOutlinePlusSmall } from "react-icons/hi2";
import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { Box, Burger, Button, Divider, Drawer, Group, Flex, Badge, ActionIcon, Avatar, TextInput } from '@mantine/core';
import { FaPlus } from "react-icons/fa6";
import { PiMicrophoneFill } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdArrowBack } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdHome } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { RiDownloadLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";


const NavBarWithoutNtf = () => {

    // toggle search bar
    const [ showSearchBar, setShowSearchBar ] = useState(false)

    return (
        <>
            <div className="flex items-center mr-8 justify-between w-full min-xxs:hidden ">
                <div className='w-fit min-mdxs:hidden max-mdxs:ml-[5%] flex-shrink-0'>
                    <ActionIcon variant="transparent">
                        <FiSearch size={20} color='white' onClick={ () => setShowSearchBar(true)} />
                    </ActionIcon>
                </div>

                <button className='flex items-center gap-1 bg-[#3f3f3f] text-white font-[600] px-3 py-[5px] rounded-3xl hover:bg-[#4f4f4f] cursor-pointer flex-shrink-1'>
                    <HiOutlinePlusSmall size={25} color='white' />
                    <span className=' '>Create</span>
                </button>

                <div className='bg-blue-600 text-white w-[30px] rounded-full h-8 text-xl flex items-center flex-shrink-0'><span className='text-center w-fit mx-auto'>N</span></div>
            </div>

            <div className={`${ showSearchBar ? "flex" : "hidden" } absolute top-0 z-50 left-0 w-full h-full bg-[#0f0f0f] items-center gap-2 px-4 py-2 justify-between min-mdxs:hidden`}>
                                        
                <MdArrowBack size={30} color='white' onClick={ () => setShowSearchBar(false)} style={{cursor: "pointer"}}/>

                <div className='flex items-center ml-10 border-1 border-slate-300 w-[70%] rounded-2xl'>
                    <input placeholder='search' type="text" className='border-1 border-slate-300 w-[84%] h-10 rounded-2xl rounded-r-none focus:outline-none pl-2 text-white text-center'/>
                    
                    <div className='border-l-2 bg-gray-800 w-[16%] h-10 flex items-center justify-center rounded-tr-2xl rounded-br-2xl cursor-pointer'>
                        <FiSearch size={20} color='white' />
                    </div>
                </div>

                <PiMicrophoneFill size={20} color='white' />
            </div>
        </>
    )
}

export default NavBarWithoutNtf

export const NavBarWithNtf = () => {

    // toggle search bar
    const [ showSearchBar, setShowSearchBar ] = useState(false)

    return (
        <>
            <div className="flex items-center mr-5 justify-between w-[270px] max-xxs:hidden sm:hidden">
                <div className='w-fit flex-shrink-0'>
                    <ActionIcon variant="transparent">
                        <FiSearch size={20} color='white' onClick={ () => setShowSearchBar(true)} />
                    </ActionIcon>
                </div>

                <div className='w-fit bg-[#3f3f3f] p-1 rounded-full'>
                    <ActionIcon variant="transparent" >
                        <PiMicrophoneFill size={20} color='white' />
                    </ActionIcon>
                </div>

                <button className='flex items-center gap-1 bg-[#3f3f3f] text-white font-[600] px-3 py-[5px] rounded-3xl hover:bg-[#4f4f4f] cursor-pointer flex-shrink-1'>
                    <HiOutlinePlusSmall size={25} color='white' />
                    <span className=' '>Create</span>
                </button>

                <div className='relative w-fit'>
                    <ActionIcon variant="transparent" color="dark" radius="xl">
                        <IoIosNotificationsOutline size={25} color='white' />
                    </ActionIcon>
                    <Badge className='absolute -top-1 -right-2 ' color="red" variant="filled" size="xs" radius={10}>2+</Badge>
                </div>

                <div className='bg-blue-600 text-white w-[30px] rounded-full h-8 text-xl flex items-center flex-shrink-0'><span className='text-center w-fit mx-auto'>N</span></div>
            </div>

            <div className={`${ showSearchBar ? "flex" : "hidden" } absolute top-0 z-50 left-0 w-full h-full bg-[#0f0f0f] items-center gap-2 px-4 py-2 justify-between sm:hidden`}>
                                        
                <MdArrowBack size={30} color='white' onClick={ () => setShowSearchBar(false)} style={{cursor: "pointer"}}/>

                <div className='flex items-center ml-10 border-1 border-slate-300 w-[70%] rounded-2xl'>
                    <input placeholder='search' type="text" className='border-1 border-slate-300 w-[84%] h-10 rounded-2xl rounded-r-none focus:outline-none pl-2 text-white text-center'/>
                    
                    <div className='border-l-2 bg-gray-800 w-[16%] h-10 flex items-center justify-center rounded-tr-2xl rounded-br-2xl cursor-pointer'>
                        <FiSearch size={20} color='white' />
                    </div>
                </div>

                <PiMicrophoneFill size={20} color='white' />
            </div>
        </>
    )
}


export const NavBarWithSearch = () => {

    return (
        <div className="sm:flex items-center mr-5 space-x-4 w-[60%] max-sm:hidden">

            <div className="flex items-center justify-end text-white rounded-full overflow-auto w-full  ring-1 ring-slate-300 ">

                <input
                type="text"
                placeholder="Search..."
                className="bg-[#0f0f0f] text-white focus:outline-1 focus:outline-blue-500 px-2 flex-grow h-9 rounded-l-full text-center " 
                />

                <div className="bg-[#3f3f3f] w-[60px] flex items-center justify-center h-10 flex-shrink-0">
                    <FiSearch size={20}/>
                </div>
            </div>

            <div className='w-fit bg-[#3f3f3f] p-1 rounded-full flex-shrink-0'>
                <ActionIcon variant="transparent" >
                    <PiMicrophoneFill size={20} color='white' />
                </ActionIcon>
            </div>

            <button className='flex items-center gap-1 bg-[#3f3f3f] text-white font-[600] px-3 py-[5px] rounded-3xl hover:bg-[#4f4f4f] cursor-pointer flex-shrink-1'>
                <HiOutlinePlusSmall size={25} color='white' />
                <span className=' '>Create</span>
            </button>

            <div className='relative w-fit flex-shrink-0'>
                <ActionIcon variant="transparent" color="dark" radius="xl">
                    <IoIosNotificationsOutline size={25} color='white' />
                </ActionIcon>
                <Badge className='absolute -top-1 -right-2 ' color="red" variant="filled" size="xs" radius={10}>2+</Badge>
            </div>

            <div className='bg-blue-600 text-white w-[30px] rounded-full h-8 text-xl flex items-center flex-shrink-0'><span className='text-center w-fit mx-auto'>N</span></div>
        </div>
    )
}


const smlMenus = [
    { icons: MdHome, label: "Home"},
    { icons: SiYoutubeshorts, label: "Shorts"},
    { icons: MdSubscriptions, label: "Subscriptions"},
    { icons: CgProfile, label: "You"},
    { icons: RiDownloadLine, label: "Downloads"},
]

export const SmlNavBar = () => {

    const renderMenu = smlMenus.map( (menu, index) => (
        <div key={index} className=" hover:bg-[#3f3f3f] py-3 cursor-pointer rounded-lg">
           <div className="w-full flex items-center justify-center">
                <menu.icons color="white" size={"23px"}/> 
           </div>
           <h3 className="text-center font-light text-white text-xs mt-1">{menu.label}</h3>
        </div>
    ))

    return (
        <div className="w-fit h-screen absolute top-18 space-y-4 p-1 max-xmd:hidden bg-[#0f0f0f] xl:hidden">
            {renderMenu}
        </div>
    )
}