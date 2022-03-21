import React,{useRef} from 'react';
import { useEditor } from "@craftjs/core";
import {
  Box,
  Text,
  Tabs,
  Tab,
  Button,
  TabList,
  ChakraProvider,
} from '@chakra-ui/react';




const SettingsPanel = () => {

  const tabsRef = useRef([])


  const handleTabChange =(e,tab)=>{
    e.preventDefault();
    if(tabsRef.current[tab]){
  
      if(tab ==='basic'){
        tabsRef.current['advanced'].style.display = 'none';
        tabsRef.current[tab].style.display = 'block';
        

      }
      tabsRef.current['basic'].style.display = 'none';
      tabsRef.current[tab].style.display = 'block'
      

    }

  }

  const { actions, selected } = useEditor((state, query) => {
       
    let nodeId = query.getEvent('selected').last();
    let selected;
    if (nodeId) {
        selected = {
            id: nodeId,
            name: state.nodes[nodeId]?.data && state.nodes[nodeId].data?.name &&  state.nodes[nodeId].data.name,
            basicSettings:state.nodes[nodeId].related && state.nodes[nodeId].related.BasicSettings,
            advancedSettings:state.nodes[nodeId].related && state.nodes[nodeId].related.AdvancedSettings,
            isDeletable: query.node(nodeId).isDeletable()
        };
    }
    return {
       selected
    };
  });
    return(<Box bg='grey' pos='absolute' h='full' width='350px' right= '100%' zIndex='500' top='0%' overflow='auto' d='block' color='#fff'>
              <Box display="flex" border="2px" borderColor="#ECECEC" bg="#F1F1F1" h='full' flexDirection='column'>
                <Box d='flex' pl='5' justifyContent='start' h='61' bg='#0184FF'>
                {selected.name ? <span>{selected.name}</span> :<span>Default Name</span>}  
                </Box>
                <Box d="flex" w='100%' color='black'>
                {selected.basicSettings &&  <Button w='full' onClick={(e)=>handleTabChange(e,'basic')}>Settings</Button>}
                {selected.advancedSettings && <Button w='full' onClick={(e)=> handleTabChange(e,'advanced')}>Advanced</Button>}
                </Box>
                {selected.basicSettings && <Box d='block' color='black' ref={el => tabsRef.current['basic'] = el}>
                  {React.createElement(selected.basicSettings)}
                </Box>}
                {selected.advancedSettings &&   <Box d='none' color='black'  ref={el => tabsRef.current['advanced'] = el} >
                  
                    {React.createElement(selected.advancedSettings)}
                </Box>}
              </Box>
            </Box>);
  };

export default SettingsPanel;