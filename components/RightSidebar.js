import React from 'react'

const RightSidebar = () => {
    const communities = [
        {
            name: "Student union1",
            img: "/images/community.png"
        },
        {
            name: "Student union2",
            img: "/images/community.png"
        },
        {
            name: "Student union3",
            img: "/images/community.png"
        },
        {
            name: "Student union4",
            img: "/images/community.png"
        },
        {
            name: "Student union5",
            img: "/images/community.png"
        }
    ]
    const people = [
        {
            name: "Patrick",
            username: "patrick123",
            img: "/images/man.jpeg"
        },
        {
            name: "Divine",
            username: "divine",
            img: "/images/man.jpeg"
        },
        {
            name: "Moses",
            username: "moses234",
            img: "/images/man.jpeg"
        },
        {
            name: "Usman",
            username: "usman4738",
            img: "/images/man.jpeg"
        },
        {
            name: "Gerald",
            username: "gerald8948",
            img: "/images/man.jpeg"
        }
    ]
    const shows = [
        {
            author: "Patrick",
            authorImg: "/images/man.jpeg",
            title: "Introduction to computer science",
            category: "Computer",
            banner: "/images/community.png",
            date: "3rd August"
        },
        {
            author: "Divine",
            authorImg: "/images/man.jpeg",
            title: "Introduction to Engeneering",
            category: "Engeneering",
            banner: "/images/community.png",
            date: "2nd August"
        },
        {
            author: "Moses",
            authorImg: "/images/man.jpeg",
            title: "Soft Skills - Is it important in an interview?",
            category: "Jobs",
            banner: "/images/community.png",
            date: "31st July"
        }
    ]
    // {/* <div className='col-span-1'>
    //                             <img src={show.banner} />
    //                             </div> */}
  return (
    <div>
        <div className='px-6'>
            <div className=''>
                <div className='flex justify-between items-center py-4 border-b'>
                    <h1 className='font-bold text-lg'>Top Communities</h1>
                    <button className='bg-blue-100 text-blue-400 py-1 px-3 cursor-pointer text-sm rounded-full'>See all</button>
                </div>
                <div className='my-3'>
                    {
                        communities.map((comm, index) => {
                            return <div key={index} className="flex items-center py-3 space-x-5">
                                <img className='w-10 h-10 rounded-lg' src={comm.img} />
                                <p className='font-semibold'>{comm.name}</p>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className=''>
                <div className='flex justify-between items-center py-4 border-b'>
                    <h1 className='font-bold text-lg'>Suggested People</h1>
                    <button className='bg-blue-100 text-blue-400 py-1 px-3 cursor-pointer text-sm rounded-full'>See all</button>
                </div>
                <div className='my-3'>
                    {
                        people.map((person, index) => {
                            return <div key={index} className="flex items-center py-3 space-x-5">
                                <img className='w-14 h-14 rounded-full' src={person.img} />
                                <div>
                                    <p className='font-semibold'>{person.name}</p>
                                    <p className='text-sm text-gray-400'>@{person.username}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className=''>
                <div className='flex justify-between items-center py-4 border-b'>
                    <h1 className='font-bold text-lg'>Trending Shows</h1>
                    <button className='bg-blue-100 text-blue-400 py-1 px-3 cursor-pointer text-sm rounded-full'>See all</button>
                </div>
                <div className=''>
                    {
                        shows.map((show, index) => {
                            return <div className='my-3 grid grid-cols-3 gap-2' key={index}>
                            <div className='col-span-2 py-5 border-b'>
                                <div className='flex items-center space-x-4 py-2'>
                                    <img className='w-8 h-8 rounded-full' src={show.authorImg} />
                                    <p className='text-gray-400 font-semibold'>{show.author}</p>
                                </div>
                                <div>
                                <h1 className='font-extrabold text-2xl text-gray-700 pb-1'>{show.title}</h1>
                                </div>
                                <div className='text-gray-400 flex space-x-5'>
                                    <p>{show.date}</p>
                                    <p>{show.category}</p>
                                </div>
                                </div>
                                <div className='col-span-1'>
                                <img className='my-5 rounded-xl shadow w-40 mx-auto h-40' src={show.banner} />
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default RightSidebar