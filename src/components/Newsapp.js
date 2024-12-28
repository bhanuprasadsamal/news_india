import React, { useEffect, useState } from 'react';
import Card from './Card';

const Newsapp = () => {
  
  return (
    <div>
      
      <div className='categoryBtn'>
        <button onClick={'#'} value="sports">Sports</button>
        <button onClick={'#'} value="politics">Politics</button>
        <button onClick={'#'} value="entertainment">Entertainment</button>
        <button onClick={'#'} value="health">Health</button>
        <button onClick={'#'} value="fitness">Fitness</button>
      </div>

      <div>
        {/* {newsData ? <Card data={newsData} /> : null} */}
      </div>
    </div>
  );
};

export default Newsapp;
