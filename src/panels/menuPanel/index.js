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
function Sidebar() {
    const [show, setShow] = useState('');
    const [currentNodeId,setCurrentNodeId] = useState('');


    const { actions, selected } = useEditor((state, query) => {
        
        let nodeId = query.getEvent('selected').last();
        console.log("qouery",state.events.selected.values().next().value);
        let selected;
        if (state.events.selected.values().next().value) {
            selected = {
                id: nodeId,
                name: state.nodes[nodeId].data.name,
                settings:
                state.nodes[nodeId].related &&
                state.nodes[nodeId].related.toolbar,
                isDeletable: query.node(nodeId).isDeletable()
            };
            setCurrentNodeId(nodeId)
        }
        return {
           selected
        };
    });

    const LinkItems ={
        title: [{icon: <LayoutIcon />, name:'Layout'} ,{icon: <ElementIcon />, name: 'Element'},{icon: <OtherIcon />,name: 'Other'}], 
        layouts: [{id: 'section',name : 'Section'},{id: 'rows', name: 'Rows'}],
        elements: [{id: 'text', name : 'Text'}, {id: 'media' , name: 'Media'},{id: 'form', name: 'Form'}], 
        others:[{id: 'misc',name : 'Misc'}]
    };

    const handleClick=(id)=>{
        setCurrentNodeId('');
        setShow(id.toString())

    }


    return(<><Box
        bg="#155871"
        width="100%"
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        minH="full">

                <NavItem>
                    <LayoutIcon />
                    <p style={{ marginRight: '63px' }}>Layout</p>
                </NavItem>
                <div style={{ marginLeft: '41px' }}>
                    {LinkItems.layouts.map((item,key) =>(
                        <p key={key} onClick={()=>handleClick(item.id)}
                            style={{ 
                                fontStyle: 'normal', 
                                fontWeight: 'normal', 
                                fontSize: '15px', 
                                lineHeight: '18px', 
                                color: 'rgba(255, 255, 255, 0.9)', 
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
                           color: 'rgba(255, 255, 255, 0.9)', 
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
                           color: 'rgba(255, 255, 255, 0.9)', 
                           marginBottom: '13px', 
                           cursor: 'pointer' 
                       }}
                   >{item.name}</p>
                ))}
            </div>

        </Box> <Toolbox value={show} toolboxID={currentNodeId.length} selected={selected}/></>);
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