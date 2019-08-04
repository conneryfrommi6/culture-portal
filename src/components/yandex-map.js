import React from "react";
import { Typography } from '@material-ui/core';

function YandexMap(props) {
  const StyleWrapperMap = {
    display: "block",
    margin: "100px auto",
    maxWidth: "800px",
    width: "100%",
    height: "550px",
  }
  
  return (
    <div>
    <div><Typography gutterBottom variant="h4" component="h3" align="center">Location</Typography></div>
    <div style={StyleWrapperMap} dangerouslySetInnerHTML={{__html: props.mapCode}}>     
    </div></div>
  )
}

export default YandexMap;