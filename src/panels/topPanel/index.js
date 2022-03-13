// import {useEditor} from "@craftjs/core";

// const Topbar = ({ setCode }) => {
//     const { actions, query, enabled } = useEditor((state) => ({
//       enabled: state.options.enabled
//     }));
  
//     return (
//       <div style={{position:"static"}}>
//         <div style={{display:'flex',flexDirection:'row',alignItems:"center"}}>
//           <div>
//             <form>
//               <label>Enable</label>
              
//                 {/* <Switch
//                   checked={enabled}
//                   onChange={(_, value) =>
//                     actions.setOptions((options) => (options.enabled = value))
              
//                 /> */} 
//             </form>
//           </div>
//           <div>
//             <button
//               onClick={() => {
//                 setCode(JSON.parse(query.serialize()));
//               }}
//             >
//               Serialize JSON to console
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };
//   export default Topbar;


import React, { useState } from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "../../assets/Logo.png";
import { useEditor } from "@craftjs/core";

import { ExitIcon, DesktopIcon, MobileIcon, PreviewIcon, RedoIcon, SaveIcon, SettingsBuilderIcon, UndoIcon } from "../../themes/icons";


const Topbar = ({ setCode,viewportAction,screenSize }) => {
    const { actions, query, enabled } = useEditor((state) => ({
      enabled: state.options.enabled
    }));
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const[state,setState]=useState("20%")


const ActionButton = ({Icon,action,label})=>{

  return(<Button 
      onClick={undoAction}
      style={{ display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '36px', 
      width: '91.97px', 
      fontStyle: 'normal', 
      fontWeight: 'normal', 
      fontSize: '13px', 
      lineHeight: '87.19%', 
      color: '#4F4F4F', 
      borderRadius: '5px', 
      border: '1px solid #F1F1F1' 
    }}> <span style={{ paddingRight: '10px' }}><Icon /></span>{label}</Button>)

}

const undoAction =()=>{
    return true;
  
  }
  const redoAction =()=>{
  
    return true;
  }
  
  const previewAction =()=>{
  
    return true;
  }
  
  const deviceAction =(width)=>{

   return viewportAction(width);
  
  
  }
  
  const exitAction =()=>{
  
    return true;
  }
  
  const saveAction =()=>{
  
    return true;
  }
  
  const settingAction =()=>{
  
    return true;
  }

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingLeft={31}
      paddingRight={24.17}
      bg="teal.500"
      color="white"
      style={{ height: '100%',background: '#FFFFFF',boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06)' }}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          <img src={Logo} style={{ width: '61px', height: '38px' }} />
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={2}
        flexBasis="8%"
        justifyContent="space-evenly"
        mt={{ base: 4, md: 0 }}
      >
        <Text style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#0184FF', height: '30px', width: '78px', borderRadius: '5px' }}> <span style={{ paddingRight: '10px' }}><ExitIcon /></span> Exit</Text>
        <Text onClick={()=>deviceAction('100%')}><DesktopIcon color= {screenSize ==='100%'?'#0184FF':'#828282'} /></Text>
        <Text onClick={(e) => deviceAction('550px')} className="mobile-view" > <MobileIcon color= {screenSize ==='100%'?'#828282':'#0184FF'} /> </Text>
      </Stack>
      <Text style={{ color: 'black', flexBasis: '40%', textAlign: 'center', fontStyle: 'normal', fontWeight: '50', fontSize: '24px', lineHeight: '18px', color: '#0184FF', fontFamily: 'Roboto' }}>MY MEMBER FUNNEL BUILDER</Text>
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: isOpen ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
        <ActionButton action={undoAction} label='Undo' Icon={UndoIcon}/>
         <ActionButton action={redoAction} label='Redo' Icon={RedoIcon}/>
         <ActionButton action={settingAction} label='Settings' Icon={SettingsBuilderIcon}/>
         <ActionButton action={previewAction} label='Preview' Icon={PreviewIcon}/>
         <ActionButton action={saveAction} label='Save' Icon={SaveIcon}/>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Topbar;