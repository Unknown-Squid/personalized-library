import React from 'react'

function ContentCards({
    data,
    dataOnClick
}) {
    return (
        <button 
            type='button'
            className='w-[350px] h-[350px] bg-transparent flex-shrink-0 relative'
            onClick={dataOnClick}
            style={{ boxShadow: 'inset 0px 0px 10px 10px rgba(0, 0, 0, 0.6)' }}
        >
            {/* Content of the card */}
            <div className='absolute bottom-[1%] left-[1%] w-[98%] h-1/2 bg-black/[0.6] flex justify-center items-center'>
                    <p>Title</p>
            </div>
        </button>
    )
}

export default ContentCards;
