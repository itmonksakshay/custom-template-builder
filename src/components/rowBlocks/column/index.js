import React from 'react';
import { Box, propNames } from '@chakra-ui/react';
import { useNode } from "@craftjs/core";

export default function Column(props){

    const {connectors: { connect }} = useNode();
   
    return(<Box w='100%' minH='100%' ref={(ref) => connect(ref)}> {props.children}</Box>)

}