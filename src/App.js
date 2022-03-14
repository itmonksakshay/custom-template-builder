import logo from './logo.svg';
import { Editor, Frame, Element } from "@craftjs/core";
import { useNode, useEditor } from "@craftjs/core";
import React, { useRef, useEffect, useState } from "react";
import './App.css';
import { ViewPortContainer,Headline,ResizableComponent,ButtonElement} from './components';
import { RenderNode } from './editor/renderNode';
import Viewport from './viewport';
import {
  ChakraProvider,
  theme,
  Box
} from '@chakra-ui/react';



export default function App() {
  const [code, setCode] = useState({});
  return (    <ChakraProvider theme={theme}>
  <Editor resolver={{Headline,ViewPortContainer,ResizableComponent,ButtonElement}} onRender={RenderNode}>
    <Viewport>
    <Frame>
      <Element is={ViewPortContainer} padding={5} background="#eee" canvas>

      </Element>
    </Frame>
    </Viewport>
  </Editor>
  </ChakraProvider>);
}
