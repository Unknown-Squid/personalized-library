import React, { useState } from 'react';
import ContentCards from '../Cards/ContentCards';

function TabsContentContainer({
  containerProperties,
  contentData
}) {
  const [isSecondDivVisible, setIsSecondDivVisible] = useState(false);
  const [lastClickedCard, setLastClickedCard] = useState(null);

  // Toggle the visibility of the second div based on clicked card
  const handleCardClick = (cardId) => {
    if (lastClickedCard === cardId) {
      setIsSecondDivVisible(prevState => !prevState); // Toggle visibility if same card clicked twice
    } else {
      setIsSecondDivVisible(true); // Show the second div if a different card is clicked
    }
    setLastClickedCard(cardId); // Update the last clicked card
  };

  return (
    <div className='w-full min-h-full size-fit border-b-2 border-black flex-1 flex'>
      {containerProperties.map(container => {
        return (
          <div
            key={container.id}
            className={`min-h-full size-fit w-full pb-3 pt-3 text-3xl flex-wrap gap-20 justify-center
                        ${container.background}
                        ${container.isActive ? "flex" : "hidden"}`}
          >
            {contentData.map(data => {
              return (
                <div key={data.id}>
                  {/* Pass the card id and onClick handler */}
                  <ContentCards 
                    data={data} 
                    dataOnClick={() => handleCardClick(data.id)}
                  />
                </div>
              );
            })}
          </div>
        );
      })}

      {/* Conditionally render the second div */}
      {isSecondDivVisible && (
        <div className='w-[1500px] h-auto bg-black flex'>
          {/* Your second div content goes here */}
        </div>
      )}
    </div>
  );
}

export default TabsContentContainer;
