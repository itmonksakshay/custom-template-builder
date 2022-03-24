import React from 'react';
import Column from "../column";
import { useNode, Element } from "@craftjs/core";
import { Box } from '@chakra-ui/react';

export default function SixColumn(){

    const {connectors: { connect, drag }} = useNode();

    return(<Box w='100%' d='flex' flexDirection={'row'} justifyContent="space-between" minH={250} p={10} ref={(ref) => connect(drag(ref))}>
        <Element id="six-column-1" is={Column} canvas></Element>
        <Element id="six-column-2" is={Column} canvas></Element>
        <Element id="six-column-3" is={Column} canvas></Element>
        <Element id="six-column-4" is={Column} canvas></Element>
        <Element id="six-column-5" is={Column} canvas></Element>
        <Element id="six-column-6" is={Column} canvas></Element>
    </Box>);

}