import React, { useState, ReactNode, useMemo } from 'react';
import { useEditor } from "@craftjs/core";
import Popup from 'reactjs-popup';
import {
    Box,
    Flex,
    Icon,
    useColorModeValue,
    Text,
    Stack
} from '@chakra-ui/react';
import { ElementIcon, LayoutIcon, OtherIcon } from '../../themes/icons';
import Toolbox from '../toolBoxPanel';
import AppState from '../../context';
import SettingsPanel from '../settingsPanel';
function Sidebar() {
    const [show, setShow] = useState({id:'',show:false});
    const {state:{settingPanelState},actions:{settingPanelDispatch}} = React.useContext(AppState);




    const LinkItems ={
        title: [{icon: <LayoutIcon />, name:'Layout'} ,{icon: <ElementIcon />, name: 'Element'},{icon: <OtherIcon />,name: 'Other'}], 
        layouts: [{id: 'section',name : 'Section'},{id: 'rows', name: 'Rows'}],
        elements: [{id: 'text', name : 'Text'}, {id: 'media' , name: 'Media'},{id: 'form', name: 'Form'}], 
        others:[{id: 'misc',name : 'Misc'}]
    };

    const handleClick=(id)=>{

        if(id === show.id){
            if(!show.show){
                settingPanelDispatch({type:'SETTING_PANEL_ACTION',payload:false})
            }
            setShow({id:id.toString(),show:!show.show});


        } else {
            setShow({id:id.toString(),show:true});
            settingPanelDispatch({type:'SETTING_PANEL_ACTION',payload:false})

        }    

    }


    return(<><Box
        bg="#155871"
        width="100%"
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        minH="full">

                <NavItem>
                    <LayoutIcon />
                    <p style={{ marginLeft: '13px' }}>Layout</p>
                </NavItem>
                <div style={{ marginLeft: '41px' }}>
                    {LinkItems.layouts.map((item,key) =>(
                        <p key={key} onClick={()=>handleClick(item.id)} 
                            style={{ 
                                fontStyle: 'normal', 
                                fontWeight: 'normal', 
                                fontSize: '15px', 
                                lineHeight: '18px', 
                                color:show.id === item.id  && show.show ? 'yellow':'white',
                                marginBottom: '13px', 
                                cursor: 'pointer' 
                            }}
                        >{item.name}</p>
                       
                    ))}
                </div>

                <NavItem>
                    <ElementIcon />
                    <p style={{ marginRight: '56px' }}> Element </p>
                </NavItem>
                <div style={{ marginLeft: '41px' }}>
                {LinkItems.elements.map((item,key) => (
                       <p key={key} onClick={()=>handleClick(item.id)}
                       style={{ 
                           fontStyle: 'normal', 
                           fontWeight: 'normal', 
                           fontSize: '15px', 
                           lineHeight: '18px', 
                           color:show.id === item.id && show.show  ? 'yellow':'white', 
                           marginBottom: '13px', 
                           cursor: 'pointer' 
                       }}
                   >{item.name}</p>
                    ))}

                </div>

                <NavItem>
                    <OtherIcon />
                    <p style={{ marginRight: '71px' }}>Other</p>
                </NavItem>
                <div style={{ marginLeft: '41px' }}>
                {LinkItems.others.map((item,key) => (
                       <p key={key} onClick={()=>handleClick(item.id)}
                       style={{ 
                           fontStyle: 'normal', 
                           fontWeight: 'normal', 
                           fontSize: '15px', 
                           lineHeight: '18px', 
                           color:show.id === item.id && show.show ? 'yellow':'white',
                           marginBottom: '13px', 
                           cursor: 'pointer' 
                       }}
                   >{item.name}</p>
                ))}
            </div>

        </Box><Toolbox value={show}/>{settingPanelState.showSettingPanel &&  <SettingsPanel/>}</>);
}



const NavItem = ({ icon, children, ...rest }) => {
    return (
        <Flex
            align="center"
            padding="13px 0px 13px 13px"
            bgColor='#0F4A61'
            justifyContent="space-between"
            role="group"
            marginBottom="5px"
            cursor="pointer"
            color="white"
            {...rest}>
            {icon && (
                <Icon
                    mr="4"
                    fontSize="16"
                    _groupHover={{
                        color: 'white',
                    }}
                    as={icon}
                />
            )}
            {children}
        </Flex>
    );
};


export default Sidebar;