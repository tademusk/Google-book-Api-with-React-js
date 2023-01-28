import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef , useState } from 'react';
import "./List.scss"
import ListItem from './ListItem';

function List({book , title}) {
    const [isMoved, setIsMoved] = useState (false)
    const [slideNumber , setSlideNumber] = useState(0)

    const listRef = useRef();

    const handlClick = (direction) =>  {
        setIsMoved(true)
       let distance = listRef.current.getBoundingClientRect().x
    //    console.log(distance)
         if (direction === "left" && distance < 0 )
         {
            setSlideNumber(slideNumber-1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
         }

         if (direction === "right" && slideNumber < 10)
         {
            setSlideNumber(slideNumber+1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
         }
    }
  return (
    <div className='list'>
        <h3 className="listTitle">
            {title}
        </h3>
        <div className="wrapper">
         <ArrowBackIosIcon className='sliderArrow left' onClick={()=>handlClick("left")} style={{display: !isMoved && "none"}} />
         <div className="myContainer" ref={listRef}>
            {
                book.map((item, index) => {
                    return <ListItem key={index} book={item} index = {index} />
                })
            }
         </div>
          <ArrowForwardIosIcon className='sliderArrow right' onClick={()=>handlClick("right")} />
        </div>
        <div className="line"></div>
    </div>
  )
}

export default List