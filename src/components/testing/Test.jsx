import { useRef } from 'react';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { ActionIcon } from '@mantine/core';


const tags = [
  'Object-oriented programming',
  'Python',
  'FIFA',
  'Security',
  'Security',
  'Security',
  'Security',
  'Security',
  'Security',
  'Security',
];

export default function ScrollableTags() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex items-center space-x-2 p-2 bg-[#0f0f0f] text-white md:w-[80%] xl:w-[90%] mx-auto xl:mx-60">
        <div onClick={() => scroll('left')} className="p-1 rounded-full hover:bg-[#3f3f3f]">
            <ActionIcon variant='transparent' color='gray'>
                <MdOutlineArrowBackIos className="w-5 h-5" />
            </ActionIcon>
        </div>

        <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide space-x-2">
            {tags.map((tag, index) => (
            <span
                key={index}
                className="flex-shrink-0 hover:bg-[#3f3f3f] bg-[#272727] text-white px-4 py-1 rounded-full whitespace-nowrap shadow-md"
            >
                {tag}
            </span>
            ))}
        </div>

        <div onClick={() => scroll('right')} className="p-1 rounded-full hover:bg-[#3f3f3f]">
            <ActionIcon variant='transparent' color='gray'>
                <MdOutlineArrowForwardIos className="w-5 h-5" />
            </ActionIcon>
        </div>
    </div>
  );
}

/*

<Flex align={"center"} gap={{base: 7, md: 5}} className=' mdxs:justify-between md:mr-3 lg:ml-10' w={{base: "70%", md: "60%"}}>

                        <div className="hidden min-mdxs:flex items-center text-white rounded-full overflow-auto w-[30%] pl-2 md:w-[70%] ring-1 ring-slate-400 lg:w-[50%]">

                            <div className="p-2 mdxs:hidden ">
                                <FiSearch />
                            </div>

                            <input
                            type="text"
                            placeholder="Search..."
                            className="bg-[#0f0f0f] text-white focus:outline-1 focus:outline-blue-500 px-2 w-[45%] h-9 rounded-l-full text-center md:w-[82%]" 
                            />

                            <div className="bg-[#3f3f3f] w-[55%] flex items-center justify-center h-10 md:w-[20%]">
                                <FiSearch size={20}/>
                            </div>
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

                
                            
                            <div className='w-fit min-mdxs:hidden max-mdxs:ml-[5%]'>
                                <ActionIcon variant="transparent">
                                    <FiSearch size={20} color='white' onClick={ () => setShowSearchBar(true)} />
                                </ActionIcon>
                            </div>

                            <div className='max-xxs:hidden w-fit bg-[#3f3f3f] p-1 rounded-full'>
                                <ActionIcon variant="transparent" >
                                    <PiMicrophoneFill size={20} color='white' />
                                </ActionIcon>
                            </div>
                        

                            <button className='flex items-center gap-1 bg-[#3f3f3f] text-white font-[600] px-3 py-[5px] rounded-3xl hover:bg-[#4f4f4f] cursor-pointer'>
                                <HiOutlinePlusSmall size={25} color='white' />
                                <span className=' '>Create</span>
                            </button>

                            <div className='relative w-fit max-xxs:hidden'>
                                <ActionIcon variant="transparent" color="dark" radius="xl">
                                    <IoIosNotificationsOutline size={25} color='white' />
                                </ActionIcon>
                                <Badge className='absolute -top-1 -right-2 ' color="red" variant="filled" size="xs" radius={10}>2+</Badge>
                            </div>

                            <div className='bg-blue-600 text-white w-[30px] rounded-full h-8 text-xl flex items-center'><span className='text-center w-fit mx-auto'>N</span></div>
                    </Flex>

*/
