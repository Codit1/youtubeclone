import React, { useState } from 'react'
import { Box, Burger, Button, Divider, Drawer, Group, Flex, Badge, ActionIcon, Avatar, TextInput } from '@mantine/core';
import { ImYoutube } from "react-icons/im";
import { IoMenu } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useDisclosure } from '@mantine/hooks';
import { SiYoutubeshorts } from "react-icons/si";
import { MdHome } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { PiVideoLight } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { RiDownloadLine } from "react-icons/ri";
import { FaFireAlt } from "react-icons/fa";
import { SiYoutubegaming } from "react-icons/si";
import { PiNewspaperClipping } from "react-icons/pi";
import { GiTrophyCup } from "react-icons/gi";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubestudio } from "react-icons/si";
import { CiFlag1 } from "react-icons/ci";
import { GoQuestion } from "react-icons/go";
import { MdOutlineFeedback } from "react-icons/md";
import classes from "./navbar.module.css"
import { GoHistory } from "react-icons/go";
import { VscMusic } from "react-icons/vsc";
import { SiYoutubekids } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
import ProfileImg1 from "../../assets/gallery/profile1.jpeg"
import ProfileImg2 from "../../assets/gallery/profile2.jpeg"
import ProfileImg3 from "../../assets/gallery/profile3.jpeg"
import ProfileImg4 from "../../assets/gallery/profile4.jpeg"
import { IoIosArrowDown } from "react-icons/io";
import ScrollableTags from '../testing/Test';
import NavBarWithoutNtf from './NavBarComp';
import { NavBarWithNtf } from './NavBarComp';
import { NavBarWithSearch, SmlNavBar } from './NavBarComp';


const videoActionsType = [
    { icon: MdHome, label: 'Home' },
    { icon: SiYoutubeshorts, label: 'Shorts' },
    { icon: MdSubscriptions, label: 'Subscriptions' }
    
];

const actionLinks = [
    { icon: GoHistory, label: 'History' },
    { icon: MdOutlinePlaylistPlay, label: 'Playlists' },
    { icon: PiVideoLight, label: 'Your Videos' },
    { icon: IoMdTime, label: 'Watch later' },
    { icon: BiLike, label: 'LIked videos' },
    { icon: RiDownloadLine, label: 'Downloads' },
]

const explore = [
    { icon: FaFireAlt, label: 'Trending' },
    { icon: VscMusic, label: 'Music' },
    { icon: SiYoutubegaming, label: 'Gaming' },
    { icon: PiNewspaperClipping, label: 'News' },
    { icon: GiTrophyCup, label: 'Sports' },
]

const youtubeMade = [
    { icon: ImYoutube, label: 'YouTube Premium' },
    { icon: SiYoutubestudio, label: 'YouTube Studio' },
    { icon: SiYoutubemusic, label: 'Music' },
    { icon: SiYoutubekids, label: 'YouTube Kids' },
]

const settings = [
    { icon: CiSettings, label: 'Settings' },
    { icon: CiFlag1, label: 'Report history' },
    { icon: GoQuestion, label: 'Help' },
    { icon: MdOutlineFeedback, label: 'Feedback' },
]

const subscriptions = [
    { icon: ProfileImg1, label: 'Profile name 1' },
    { icon: ProfileImg2, label: 'Profile name 2' },
    { icon: ProfileImg3, label: 'Profile name 3' },
    { icon: ProfileImg4, label: 'Profile name 4' },
]

function NavBar() {

    const [opened, { open, close }] = useDisclosure(false);
    


    const [active, setActive] = useState("Home");

    const renderVideoAction = videoActionsType.map( (link, index) => (
        <a
            className={`${classes.link} w-[90%] mx-auto pl-3 rounded-lg`}
            data-active={ active === link || undefined}
            href="#"
            onClick={(event) => {
                event.preventDefault();
                setActive(link);
                close()
            }}
            key={index}
        >
            <link.icon size={22} stroke={1.5} />
            <span className='ml-5 font-semibold'>{link.label}</span>
        </a>
    ))
    
    const renderActionLink = actionLinks.map( (link, index) => (
        <a
        className={`${classes.link} w-[90%] mx-auto pl-3 rounded-lg`}
        data-active={ active === link || undefined}
        href="#"
        onClick={(event) => {
            event.preventDefault();
            setActive(link);
            close()
        }}
        key={index}
        >
            <link.icon size={22} stroke={1.5} />
            <span className='ml-5 font-semibold'>{link.label}</span>
        </a>
    ))

    const renderExplore = explore.map( (link, index) => (
        <a
            className={`${classes.link} w-[90%] mx-auto pl-3 rounded-lg`}
            data-active={ active === link || undefined}
            href="#"
            onClick={(event) => {
                event.preventDefault();
                setActive(link);
                close()
            }}
            key={index}
        >
            <link.icon size={22} stroke={1.5} />
            <span className='ml-5 font-semibold'>{link.label}</span>
        </a>
    ))

    const renderYouTubeMade = youtubeMade.map((link, index) => (
        <a
            className={`${classes.link} w-[90%] mx-auto pl-3 rounded-lg`}
            data-active={ active === link || undefined}
            href="#"
            onClick={(event) => {
                event.preventDefault();
                setActive(link);
                close()
            }}
            key={index}
        >
            <link.icon size={22} stroke={1.5} color='red'/>
            <span className='ml-5 font-semibold'>{link.label}</span>
        </a>
    ))

    const renderSetting = settings.map((link, index) => (
        <a
            className={`${classes.link} w-[90%] mx-auto pl-3 rounded-lg`}
            data-active={ active === link || undefined}
            href="#"
            onClick={(event) => {
                event.preventDefault();
                setActive(link);
                close()
            }}
            key={index}
        >
            <link.icon size={22} stroke={1.5} color='white'/>
            <span className='ml-5 font-semibold'>{link.label}</span>
        </a>
    ))

    const renderSubcriptions = subscriptions.map((link, index) => (
        <a
            className={`${classes.link} w-[90%] mx-auto pl-3 rounded-lg`}
            data-active={ active === link || undefined}
            href="#"
            onClick={(event) => {
                event.preventDefault();
                setActive(link);
                close()
            }}
            key={index}
        >
            <img className='rounded-full h-[30px] w-[30px]' src={link.icon} alt="profile image"/>
            <span className='ml-5 font-semibold'>{link.label}</span>
        </a>
    ))

    return (
        <header className=' bg-[#0f0f0f] fixed top-0 z-50 w-full'>
            <nav className='bg-transparent relative'>
                <div  className='flex justify-between mr-1 z-100 w-full space-x-auto'>

                    <Flex w={"200px"} h={60} justify="space-between" align="center" px="md" >
                        <ActionIcon variant="transparent" size="lg" color="dark" radius="xl" >
                            <IoMenu size={40} color='white' onClick={open}/>
                        </ActionIcon>
                        
                        <div className='flex items-center gap-2 relative h-13 w-30 ml-3'>
                            <ImYoutube size={35} color="red" />
                            <h2 className='font-bold text-lg text-white'>YouTube</h2>
                            <span className='absolute top-0 -right-3 text-xs text-gray-300 font-[600]' >NG</span>
                        </div>
                    </Flex>

                    <NavBarWithoutNtf/>

                    <NavBarWithNtf/>

                    <NavBarWithSearch/>
                    
                </div>

                <ScrollableTags/>

                <SmlNavBar/>
            </nav>

            <Drawer opened={opened} onClose={close} withCloseButton={false} size="230px" hiddenFrom='lg' padding={0} >

                <div className='bg-[#0f0f0f] overflow-hidden'>
                    <Flex w={210} h={60} justify="space-between" align="center" px="md" >
                        <ActionIcon variant="transparent" size="lg" color="dark" radius="xl" >
                            <IoMenu size={40} color='white' onClick={close}/>
                        </ActionIcon>
                        
                        <div className='flex items-center gap-2 relative h-13 w-30 ml-3'>
                            <ImYoutube size={35} color="red" />
                            <h2 className='font-bold text-lg text-white'>YouTube</h2>
                            <span className='absolute top-0 -right-3 text-xs text-gray-300 font-[600]' >NG</span>
                        </div>
                    </Flex>
                </div>

                <div id="nav-content" className='bg-[#0f0f0f] overflow-hidden'>

                    <div className='space-y-2'>
                       {renderVideoAction}
                    </div>

                    <Divider my="md" />

                    <div className='space-y-2'>
                        <h2 className=' hover:bg-[#272727] w-[90%] h-10 mx-auto rounded-xl flex items-center text-white font-semibold text-lg pl-4'>You <span className='ml-5'><MdOutlineArrowForwardIos color='white' size={15}/></span></h2>
                        {renderActionLink}
                    </div>

                    <Divider my="md" />

                    <div className='space-y-2'>
                        <h2 className='text-lg text-white font-semibold pl-5'>Subcriptions</h2>
                        {renderSubcriptions}
                        <a href="#" className={`${classes.link} w-[90%] mx-auto pl-3 rounded-lg flex items-center`}>
                            <IoIosArrowDown color='white' size={20}/>
                            <span className='font-semibold text-md ml-7'>Show more</span>
                        </a>
                    </div>


                    <Divider my="md" />

                    <div className='space-y-2'>
                        <h2 className='text-lg text-white font-semibold pl-5'>Explore</h2>
                        {renderExplore}
                    </div>

                    <Divider my="md" />

                    <div className='space-y-2'>
                        <h2 className='text-lg text-white font-semibold pl-5'>Made From Youtube</h2>
                        {renderYouTubeMade}
                    </div>

                    <Divider my="md" />

                    <div className='space-y-2'>
                        <h2 className='text-lg text-white font-semibold pl-5'>Made From Youtube</h2>
                        {renderSetting}
                    </div>

                    <Divider my="md" />

                    <div>

                        <p className='grid grid-cols-3 gap-0 w-[70%] ml-5 text-slate-200 font-semibold text-sm'>
                            <a href="#">About</a>
                            <a href="#">Press</a>
                            <a href="#">Copyright</a>
                            <a href="#" className='col-span-2'>Contact us</a>
                            <a href="#">Creators</a>
                            <a href="#" className='col-span-2'>Advertise</a>
                            <a href="#">Developers</a>
                        </p>

                        <p className='grid grid-cols-3 space-y-2 w-[100%] ml-5 text-white font-semibold text-xs mt-5'>
                            <a href="#">Terms</a>
                            <a href="#" className='-ml-7'>Privacy</a>
                            <a href="#" className='-ml-11'>Policy & Safety</a>
                            <a href="#" className='col-span-3'>How YouTube works</a>
                            <a href="#" className='col-span-3'>Test new features</a>
                        </p>

                        <h4 className='mt-10 text-white text-xs pb-5 text-center'>© 2025 Google LLC</h4>
                    </div>
                </div>

            </Drawer>


            <div id="nav-content" className='bg-[#0f0f0f] overflow-y-auto absolute top-10 z-50 max-xl:hidden h-screen'>

                <div className='space-y-2 mt-5'>
                    {renderVideoAction}
                </div>

                <Divider my="md" />

                <div className='space-y-2'>
                    <h2 className=' hover:bg-[#272727] w-[90%] h-10 mx-auto rounded-xl flex items-center text-white font-semibold text-lg pl-4'>You <span className='ml-5'><MdOutlineArrowForwardIos color='white' size={15}/></span></h2>
                    {renderActionLink}
                </div>

                <Divider my="md" />

                <div className='space-y-2 overflow-y-auto'>
                    <h2 className='text-lg text-white font-semibold pl-5'>Subcriptions</h2>
                    {renderSubcriptions}
                    <a href="#" className={`${classes.link} w-[90%] mx-auto pl-3 rounded-lg flex items-center`}>
                        <IoIosArrowDown color='white' size={20}/>
                        <span className='font-semibold text-md ml-7'>Show more</span>
                    </a>
                </div>


                <Divider my="md" />

                <div className='space-y-2'>
                    <h2 className='text-lg text-white font-semibold pl-5'>Explore</h2>
                    {renderExplore}
                </div>

                <Divider my="md" />

                <div className='space-y-2'>
                    <h2 className='text-lg text-white font-semibold pl-5'>Made From Youtube</h2>
                    {renderYouTubeMade}
                </div>

                <Divider my="md" />

                <div className='space-y-2'>
                    <h2 className='text-lg text-white font-semibold pl-5'>Made From Youtube</h2>
                    {renderSetting}
                </div>

                <Divider my="md" />

                <div>

                    <p className='grid grid-cols-3 gap-0 w-[70%] ml-5 text-slate-200 font-semibold text-sm'>
                        <a href="#">About</a>
                        <a href="#">Press</a>
                        <a href="#">Copyright</a>
                        <a href="#" className='col-span-2'>Contact us</a>
                        <a href="#">Creators</a>
                        <a href="#" className='col-span-2'>Advertise</a>
                        <a href="#">Developers</a>
                    </p>

                    <p className='grid grid-cols-3 space-y-2 w-[100%] ml-5 text-white font-semibold text-xs mt-5'>
                        <a href="#">Terms</a>
                        <a href="#" className='-ml-7'>Privacy</a>
                        <a href="#" className='-ml-11'>Policy & Safety</a>
                        <a href="#" className='col-span-3'>How YouTube works</a>
                        <a href="#" className='col-span-3'>Test new features</a>
                    </p>

                    <h4 className='mt-10 text-white text-xs pb-5 text-center'>© 2025 Google LLC</h4>
                </div>
            </div>

        </header>
    )
}

export default NavBar
