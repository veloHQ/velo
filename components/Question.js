import React from 'react'
import Image from 'next/image'

const Question = ({profile_image, firstName, lastName, id, post_text, username}) => {
    let comment = () => {
  
    }
    return (
      <div>
        <div className='bg-white shadow text-[#0e113d] rounded-md px-5 py-3 mb-5'>
          <div className='py-2 border-b border-b-gray-400'>
            <div className='flex space-x-3 pb-3'>
              <Image className='rounded-full w-14 h-14 md:w-14 md:h-14' alt='' src={profile_image} />
              <div className=''>
                <h1 className='font-medium'>{`${firstName} ${lastName}`}</h1>
                <p className=''>{`@${username}`}</p>
              </div>
            </div>
            <div>
              <p className='font-light'>{post_text}</p>
            </div>
          </div>
          <div className='pt-3 flex items-center justify-between'>
            <div className='flex space-x-4'>
                <svg onClick={comment} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#0e113d" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" /></svg>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default Question