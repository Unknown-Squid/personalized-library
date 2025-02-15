import React from 'react'

function ContentCards({
    data,
    dataOnClick
}) {
    return (
        <button 
            type='button'
            className='w-[350px] h-[350px] bg-black flex-shrink-0'
            onClick={dataOnClick}
        >
            {/* Content of the card */}
        </button>
    )
}

export default ContentCards;
