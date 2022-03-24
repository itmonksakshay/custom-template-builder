import { useNode } from "@craftjs/core";
import { Box} from "@chakra-ui/react";
import {PaddingSelector,ColorSelector, ImageSelector} from "../settingComponents";
import React from 'react';




export const BasicSettings = () => {
    const {
      background,
      padding,
      color,
      bgImage,
      actions: { setProp }
    } = useNode((node) => ({
      background: node.data.props.background,
      padding: node.data.props.padding,
      color: node.data.props.color,
      bgImage: node.data.props.backgroundImage
    }));



    const handlePaddingChange =(value)=>{

      setProp((props) => (props.padding = value))


    }
    const handleTextColorChange =(value)=>{
      setProp((props) => (props.color = value.hex))

    }

    const handleBackgroundColorChange =(value)=>{
      setProp((props) => (props.background = value.hex))

    }

    const backgroundImageHandler =(value)=>{
        console.log(value,'value');
      setProp((props) => (props.backgroundImage = value))


    }



    return (<>
          <Box px={'32px'}>
            <ImageSelector imageUrl={bgImage} setImage={backgroundImageHandler}/>
            <ColorSelector bgColor={background} txtHandle={handleTextColorChange} txtColor={color} bgHandle={(url)=>handleBackgroundColorChange(url)}/>
          </Box>
        
          <PaddingSelector value={padding} setPadding={handlePaddingChange}/>
    </>);
};
  
