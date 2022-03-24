import React from 'react';
import { Image } from '@chakra-ui/react';
import { useNode } from "@craftjs/core";

export default function ImageComponent(props){

    const {connectors: { connect }} = useNode();
   
    return(<Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' w='100%' h='100%' ref={(ref) => connect(ref)} />)

}

