import React from 'react';
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'
 
export default function ValueSlider({valueChange,value}){

    const changeHandle =(padding)=>{
        return valueChange({name:value.name,value:padding})

    }

    return(<Slider aria-label='slider-ex-1' min={0} max={100} onChange={changeHandle} defaultValue={value.defaultValue}>
    <SliderTrack bg='#ECECEC'>
      <SliderFilledTrack bg='#ECECEC' />
    </SliderTrack>
    <SliderThumb bg='#0184FF' border={1.5} borderColor="#005FDE"/>
  </Slider>);

}