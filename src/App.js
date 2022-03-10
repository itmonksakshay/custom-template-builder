import logo from './logo.svg';
import { Editor, Frame, Element } from "@craftjs/core";
import { useNode, useEditor } from "@craftjs/core";
import React, { useRef, useEffect, useState } from "react";
import './App.css';
import { Container } from './components';
import { SettingsPanel,Toolbox } from './panels';


export const Text = ({ text, fontSize }) => {
  const {
    connectors: { connect, drag }
  } = useNode();
  return (
    <div ref={(ref) => connect(drag(ref))}>
      <p style={{ fontSize }}>{text}</p>
    </div>
  );
};
const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
    text
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
    text: node.data.props.text
  }));

  return (<>
    <div style={{width:'100%',height:'200px'}}>
      <h2> Text Setting Manager</h2>
    </div>
    </>);
};

Text.craft = {
  props: {
    text: "Hi",
    fontSize: 20
  },
  related: {
    settings: TextSettings
  }
};





export const Topbar = ({ setCode }) => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled
  }));

  return (
    <div style={{position:"static"}}>
      <div style={{display:'flex',flexDirection:'row',alignItems:"center"}}>
        <div>
          <form>
            <label>Enable</label>
            
              {/* <Switch
                checked={enabled}
                onChange={(_, value) =>
                  actions.setOptions((options) => (options.enabled = value))
            
              /> */} 
          </form>
        </div>
        <div>
          <button
            onClick={() => {
              setCode(JSON.parse(query.serialize()));
            }}
          >
            Serialize JSON to console
          </button>
        </div>
      </div>
    </div>
  );
};






export default function App() {
  const [code, setCode] = useState({});
  return (
    <Editor
      resolver={{ Text, Container}}
    >
      <div style={{width:'100%',height:'100vh'}}>
        <h2 >A super simple page editor</h2>
        <div style={{width:'100%',height:'100%'}}>
          <div style={{width:'100%',height:'15%'}}>
            <Topbar setCode={setCode} />
          </div>
          <div style={{display:'flex',width:'100%',height:'85%'}} >
          <div style={{flexBasis:'70%',height:'100%'}} >
              <Frame>
                <Element is={Container} padding={5} background="#eee" canvas>
                  <Text size="small" text="Hi world!" />
                  <Element is={Container} padding={2} background="#999" canvas>
                    <Text size="small" text="It's me again!" />
                  </Element>
                </Element>
              </Frame>
            </div>
            <div style={{flexBasis:'30%',height:'100%'}} >
             <div>
              <Toolbox />
             <SettingsPanel />
             </div>
            </div>
          </div>
        </div>
      </div>
    </Editor>);
}
