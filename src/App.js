import logo from './logo.svg';
import { Editor, Frame, Element } from "@craftjs/core";
import { useNode, useEditor } from "@craftjs/core";
import React, { useRef, useEffect, useState } from "react";
import './App.css';
import { ViewPortContainer,Headline,ResizableComponent,ButtonElement,OneColumn,Column,TwoColumn} from './components';
import { RenderNode } from './editor/renderNode';
import Viewport from './viewport';
import {AppStateProvider} from './context';
import {
  ChakraProvider,
  theme,
  Box
} from '@chakra-ui/react';

let initialSettingPanelState = {showSettingPanel:false};

const settingPanelReducer =(state,action)=>{
  switch (action.type) {
    case'SETTING_PANEL_ACTION': return {...state,showSettingPanel:action.payload}
    default: return state;
  }
}



export default function App() {
  const [code, setCode] = useState({});
  const [settingPanelState, settingPanelDispatch] = React.useReducer(settingPanelReducer, initialSettingPanelState);
  return (<ChakraProvider theme={theme}>
    <AppStateProvider value={{state:{settingPanelState},actions:{settingPanelDispatch}}}>
      <Editor resolver={{Headline,ViewPortContainer,ResizableComponent,ButtonElement,Column,OneColumn,TwoColumn}} onRender={RenderNode}>
        <Viewport>
          <Frame>
            <Element is={ViewPortContainer} canvas>

            </Element>
          </Frame>
        </Viewport>
      </Editor>
    </AppStateProvider>
  </ChakraProvider>);
}
