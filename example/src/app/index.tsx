import { useRef } from 'react';
import { observe } from 'react-observing';

import './../styles.css';


export const App = () => {
  return (
    <div className='w-screen h-screen bg-paper flex justify-center items-center gap-8'>

      <div className='p-2 flex flex-col gap-2'>
        Draggable items

        <div className='h-[90vh] border rounded'>
        </div>
      </div>

      <div className='p-2 flex flex-col gap-2'>
        UI editor

        <div className='w-[70vw] h-[90vh] bg-background rounded overflow-clip'>
          
        </div>
      </div>
    </div>
  );
}
