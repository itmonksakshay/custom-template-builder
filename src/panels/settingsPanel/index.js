import React,{useRef,useState} from 'react';
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
  const [activeTab,setTab]= useState('basic')


  const handleTabChange =(e,tab)=>{
    e.preventDefault();
    if(tabsRef.current[tab]){
  
      if(tab ==='basic'){
        tabsRef.current['advanced'].style.display = 'none';
        tabsRef.current[tab].style.display = 'block';
        return setTab(tab)
      }
      tabsRef.current['basic'].style.display = 'none';
      tabsRef.current[tab].style.display = 'block';
      return setTab(tab)
      

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

 
    return(<Box pos='absolute' h='full' bg='#fff' width='500px' right= '100%' zIndex='500' top='0%' overflow='auto' d='block' color='#fff'>
              <Box display="flex" border="2px" borderColor="#ECECEC" h='full' flexDirection='column'>
                <Box d='flex' w="100%" pl='5' justifyContent='start' h='61px' bg='#0184FF' alignContent={'center'} color="white" py={30} boxSizing='border-box'>
                  {selected.name && <span style={{fontWeight:'600'}}>{selected.name}</span>}  
                </Box>
                <Box d="flex" w='100%' h={61} bg='#F1F1F1' alignItems="center" color='#828282' justifyContent={'space-around'} fontWeight='600'>
                  {selected.basicSettings &&  <button style={{width:'100%',height:'100%',borderBottom:activeTab==='basic'?'3px solid #0184FF':'3px solid white'}} onClick={(e)=>handleTabChange(e,'basic')}>Settings</button>}
                  {selected.advancedSettings && <button style={{width:'100%',height:'100%',borderBottom:activeTab==='advanced'?'3px solid #0184FF':'3px solid white'}} onClick={(e)=> handleTabChange(e,'advanced')}>Advanced</button>}
                </Box>
                {selected.basicSettings && <Box d='block' color='black' pt='20px' fontSize='16px' fontWeight={500} ref={el => tabsRef.current['basic'] = el}>
                  {React.createElement(selected.basicSettings)}
                </Box>}
                {selected.advancedSettings &&   <Box d='none' color='black'  pt='20px' ref={el => tabsRef.current['advanced'] = el} >
                    {React.createElement(selected.advancedSettings)}
                </Box>}
              </Box>
            </Box>);
  };

export default SettingsPanel;