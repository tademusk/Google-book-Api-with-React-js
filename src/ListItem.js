import React from 'react';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Download } from "@mui/icons-material";
import "./ListItem.scss";

 function ListItem({book}) {

  //  console.log(book)

  return (
    <div className="listItem" >
        <img src= {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail} alt="" />
      <div className="itemInfo">
        <div className="icons">
         <Download className="icon"/>
         <AddCircleIcon className="icon"/>
         <ThumbUpIcon className="icon" />
         <ThumbDownIcon className="icon" />
        </div>
      <div className="itemInfoTop">
        <span className="title">{book.volumeInfo.pageCount} : pages</span>
      </div>
    </div>
    </div>
    
  )
}

export default ListItem
