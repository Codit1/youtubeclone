import React from 'react'
import { IoMdCheckmarkCircle } from "react-icons/io";
import { TbDotsVertical } from "react-icons/tb";
import VdImg1 from "../../assets/gallery/vd1.jpg"
import VdImg2 from "../../assets/gallery/vd2.jpg"
import VdImg3 from "../../assets/gallery/vd3.jpg"
import VdImg4 from "../../assets/gallery/vd4.jpg"
import VdImg5 from "../../assets/gallery/vd5.jpg"
import { PiQueueDuotone } from "react-icons/pi";
import { GoHistory } from "react-icons/go";
import { IoBookmarkOutline } from "react-icons/io5";
import { RiDownloadLine } from "react-icons/ri";
import { PiShareFatLight } from "react-icons/pi";
import { TbCancel } from "react-icons/tb";
import { CiFlag1 } from "react-icons/ci";
import ProfileImg1 from "../../assets/gallery/profile1.jpeg"
import ProfileImg2 from "../../assets/gallery/profile2.jpeg"
import ProfileImg3 from "../../assets/gallery/profile3.jpeg"
import ProfileImg4 from "../../assets/gallery/profile4.jpeg"
import { Menu, ActionIcon } from '@mantine/core';
import { BsBookmark } from "react-icons/bs";
import { TiCancel } from "react-icons/ti";

const videos = [
    {
        vdImg: VdImg1,
        vdName: "building youtube clone",
        userName: "NattyCrown",
        verified: true,
        numberViews: "221m",
        createdAt: "2 Days ago",
        profileImg: ProfileImg1,
        menu: [
            { icon: PiQueueDuotone, label: 'Add to queue' },
            { icon: GoHistory, label: 'Save to Watch later' },
            { icon: BsBookmark, label: 'Save to playlist' },
            { icon: RiDownloadLine, label: 'Download' },
            { icon: PiShareFatLight, label: 'Share' },
            { icon: TiCancel, label: 'Not Interested' },
            { icon: CiFlag1, label: 'Report' },
        ]
    },
    {
        vdImg: VdImg2,
        vdName: "building youtube clone",
        userName: "NattyCrown",
        verified: false,
        numberViews: "221m",
        createdAt: "2 Days ago",
        profileImg: ProfileImg2,
        menu: [
            { icon: PiQueueDuotone, label: 'Add to queue' },
            { icon: GoHistory, label: 'Save to Watch later' },
            { icon: BsBookmark, label: 'Save to playlist' },
            { icon: RiDownloadLine, label: 'Download' },
            { icon: PiShareFatLight, label: 'Share' },
            { icon: TiCancel, label: 'Not Interested' },
            { icon: CiFlag1, label: 'Report' },
        ]
    },
    {
        vdImg: VdImg3,
        vdName: "building youtube clone",
        userName: "NattyCrown",
        verified: false,
        numberViews: "221m",
        createdAt: "8 months ago",
        profileImg: ProfileImg3,
        menu: [
            { icon: PiQueueDuotone, label: 'Add to queue' },
            { icon: GoHistory, label: 'Save to Watch later' },
            { icon: BsBookmark, label: 'Save to playlist' },
            { icon: RiDownloadLine, label: 'Download' },
            { icon: PiShareFatLight, label: 'Share' },
            { icon: TiCancel, label: 'Not Interested' },
            { icon: CiFlag1, label: 'Report' },
        ]
    },
    {
        vdImg: VdImg4,
        vdName: "building youtube clone",
        userName: "NattyCrown",
        verified: true,
        numberViews: "221m",
        createdAt: "2 years ago",
        profileImg: ProfileImg4,
        menu: [
            { icon: PiQueueDuotone, label: 'Add to queue' },
            { icon: GoHistory, label: 'Save to Watch later' },
            { icon: BsBookmark, label: 'Save to playlist' },
            { icon: RiDownloadLine, label: 'Download' },
            { icon: PiShareFatLight, label: 'Share' },
            { icon: TiCancel, label: 'Not Interested' },
            { icon: CiFlag1, label: 'Report' },
        ]
    }
]


function HomePage() {

    const renderVideos = videos.map( (data, index) => (
        <div key={index} className='w-[92%] mx-auto min-mdxs:w-[500px] cursor-pointer xmd:w-[95%] lg:w-[90%] xl:w-[95%]'>
            <div>
                <img src={data.vdImg} alt="" className='w-[100%] h-[280px] rounded-lg'/>
            </div>

            <div className='flex justify-between  mt-3'>
                <div className='flex items-top'>
                    <div>
                        <img src={data.profileImg} alt="" className='w-[40px] h-[40px] rounded-full'/>
                    </div>

                    <div className='ml-3 '>
                        <h2 className='text-white capitalize font-semibold'>{data.vdName}</h2>
                        <h3 className='text-[#AAAAAA] flex items-center text-md font-semibold'>{data.userName} <span className='ml-2 mt-1'>{ data.verified ? <IoMdCheckmarkCircle/> : null }</span></h3>
                        <h4 className='text-[#AAAAAA] space-x-3 font-semibold text-sm'>
                            <span>{data.numberViews}</span>
                            <span>{data.createdAt}</span>
                        </h4>
                    </div>
                </div>

                <div className='bg-[#0f0f0f] p'>
                    <Menu >
                        <Menu.Target>
                            <div className='flex items-center justify-center hover:bg-transparent w-[50px] rounded-full p-1 cursor-pointer hover:backdrop-brightness-50 h-[50px]'>
                                <ActionIcon variant='transparent' color='gray' mt={4}>
                                    <TbDotsVertical size={30}/> 
                                </ActionIcon>
                            </div>
                        </Menu.Target>

                        <Menu.Dropdown className='bg-[#0f0f0f] ' bg={"#0f0f0f"}>
                            {
                                data.menu.map( (action, index) => (
                                    <Menu.Item key={index}>
                                        <a
                                        className={` w-[90%] mx-auto pl-3 flex items-center`}
                                        href="#"
                                        
                                        >
                                            <action.icon size={22} stroke={1.5} color='white'/>
                                            <span className='ml-4 text-white font-semibold'>{action.label}</span>
                                        </a>
                                    </Menu.Item>
                                ))
                            }
                        </Menu.Dropdown>
                    </Menu>
                </div>
            </div>
        </div>
    ))
    
    return (
        <section className='bg-[#0f0f0f] py-5'>
            <div className='space-y-12 grid min-xmd:grid-cols-2 w-[90%] ml-[10%] mt-30 lg:w-[1000px] lg:mx-[65px] xl:w-[80%] xl:grid-cols-3 xl:pr-1 xl:mx-60 gap-0'>
                {renderVideos}
            </div>
        </section>
    )
}

export default HomePage
