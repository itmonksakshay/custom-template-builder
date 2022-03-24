import React from 'react';
import Column from "../column";
import { useNode, Element } from "@craftjs/core";
import { Box } from '@chakra-ui/react';

export default function ThreeColumn(){

    const {connectors: { connect, drag }} = useNode();

    return(<Box w='100%' d='flex' flexDirection={'row'} justifyContent="space-between" minH={250} p={10} ref={(ref) => connect(drag(ref))}>
        <Element id="three-column-1" is={Column} canvas></Element>
        <Element id="three-column-2" is={Column} canvas></Element>
        <Element id="three-column-3" is={Column} canvas></Element>
    </Box>);

}