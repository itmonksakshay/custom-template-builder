import React from 'react';
import Column from "../column";
import { useNode, Element } from "@craftjs/core";
import { Box } from '@chakra-ui/react';

export default function OneColumn(){

    const {connectors: { connect, drag }} = useNode();

    return(<Box w='100%' d='flex' h={250} p='10px' ref={(ref) => connect(drag(ref))}>
        <Element id="one-column-1" is={Column} canvas></Element>
    </Box>)

}