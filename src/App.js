import logo from './logo.svg';
import { Editor, Frame, Element } from "@craftjs/core";
import { useNode, useEditor } from "@craftjs/core";
import React, { useRef, useEffect, useState } from "react";
import './App.css';
import { Container,Text,ResizableComponent } from './components';
import Viewport from './viewport';
import {
  ChakraProvider,
  theme,
  Box
} from '@chakra-ui/react';



export default function App() {
  const [code, setCode] = useState({});
  return (    <ChakraProvider theme={theme}>
  <Editor resolver={{Text,Container,ResizableComponent}}>
    <Viewport>
    <Frame>
      <Element is={Container} padding={5} background="#eee" canvas>

      </Element>
    </Frame>
    </Viewport>
  </Editor>
  </ChakraProvider>);
}
