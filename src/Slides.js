import { useState } from 'react';
import { pic } from "./pic";
import './App.css';

function Slides() {
    const [pictures, setPictures] = useState(0);
    const {id, photo} = pic[pictures];

  const nextPhoto = () => {
    setPictures (pictures => {
      pictures++;
      if(pictures>pic.length-1){
        pictures =0;
      }
      return pictures
    })
  }

  const previousPhoto = () => {
    setPictures (pictures => {
      pictures--;
      if(pictures<0){
        return pic.length-1;
      }
      return pictures
    })
  }


    return(
        <div>
        <div className='container'>
          <button className='btn' onClick={previousPhoto}>&#8249;</button>
            <img src={photo} width="600px" alt='photo'/>
            
            <button className='btn' onClick={nextPhoto}>&#8250;</button>
        </div>
            </div>
    )
}

export default Slides;