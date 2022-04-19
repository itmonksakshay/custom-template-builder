import React,{useMemo,useState} from 'react';
import { background, Box, SimpleGrid } from '@chakra-ui/react';
import { AddRowIcon, Manage2Icon, Col1, Col2, Col3, Col4, Col5, Col6, LeftSidebar, RightSidebar, Video, Image, Input, DropDown, TextArea, Checkbox, SMS, Survey, Billing, Signature, Button, HeadlineIcon, SubHeadline, Bullets, Countdown, Product } from '../../themes/icons';
import { AiOutlineBorder } from "react-icons/ai";
import {useEditor,Element } from "@craftjs/core";
import { IconButton } from '@chakra-ui/react'
import {Headline,ResizableComponent,
    ButtonElement,OneColumn,TwoColumn,
    ThreeColumn,FourColumn,FiveColumn,
    SixColumn,ImageComponent} from "../../components";


const Toolbox = ({value}) => {
    const { connectors, query } = useEditor();



    
    return (<Box bg='grey' pos='absolute' h='full' width='270px' right= '100%' top='0%' overflow='auto' zIndex='500'  d={value.show ?'block':'none'}>
                {value.id === "section" ?
                    <Box p={5} >
                     
                        <div style={{ borderBottom: "2px solid  #E2E2E2", color: '#0184FF', marginRight: "16px", marginBottom: "20px" }}>
                            <p>Section</p>
                        </div>
                        <SimpleGrid columns={2} spacing={5}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#EFF7FF", width: '99px', minHeight: "80px", padding: "0px 0px 8px 0px", overflow: "hidden", borderRadius: "6px" }}>
                                <div style={{ padding: "10px", position: "relative" }}  ref={(ref) =>connectors.create(ref,<Element is={ResizableComponent}  canvas 
                                    width="100%"
                                    height="auto"
                                    alignItems="center"
                                    background={{r: 255, g: 255, b: 255, a: 1}}
                                    padding={['40', '40', '40', '40']}
                                    margin={['0', '0', '0', '5']}
                                    custom={{displayName: 'Section'}}
                            ></Element>)}>

                                    < AiOutlineBorder size='2.5em' color="#0184FF" />
                                    <p style={{ position: 'absolute', height: '24px', right: '2px', display: "flex", width: '24px', alignItems: 'center', justifyContent: 'center', backgroundColor: "#EFF7FF", color: '#0184FF', bottom: '7px', borderRadius: '100%' }}>1</p>
                                </div>
                                <p style={{ backgroundColor: "#EFF7FF", color: '#0184FF', width: '100%', textAlign: "center", fontWeight: "500", fontStyle: "normal", fontSize: "13px", lineHeight: "15px" }}>Resizable Section</p>
                            </div>
                        </SimpleGrid>
                    </Box>:<></>}
                    {value.id === "rows"?<Box p={5}>
                            <div style={{ borderBottom: "2px solid  #E2E2E2", color: '#0184FF', marginRight: "16px", marginBottom: "20px" }}>
                                <p>Rows</p>
                            </div>

                            <SimpleGrid columns={2} spacing={5}>
                                <div  ref={(ref) =>connectors.create(ref,<Element is={OneColumn}  canvas 
                                    width="100%"
                                    height="auto"
                                    alignItems="center"
                                    background={{r: 255, g: 255, b: 255, a: 1}}
                                    padding={['10', '10', '10', '10']}
                                    margin={['0', '0', '0', '5']}
                                    custom={{displayName: 'OneColumn'}}
                            ></Element>)}><Col1 /></div> 
                                <div  ref={(ref) =>connectors.create(ref,<TwoColumn />)}><Col2 /></div>   
                                <div  ref={(ref) =>connectors.create(ref,<ThreeColumn />)}><Col3 /></div>      
                                <div  ref={(ref) =>connectors.create(ref,<FourColumn />)}><Col4 /></div>
                                <div  ref={(ref) =>connectors.create(ref,<FiveColumn />)}><Col5 /></div>
                                <div  ref={(ref) =>connectors.create(ref,<SixColumn />)}><Col6 /></div>        
                                <LeftSidebar />
                                <RightSidebar />
                            </SimpleGrid>

                    </Box>:<></>}
                    {value.id === "text" ?<Box p={5}>
                            <div style={{ borderBottom: "2px solid  #E2E2E2", color: '#0184FF', marginRight: "16px", marginBottom: "20px" }}>
                                <p>Text</p>
                            </div>

                            <SimpleGrid columns={2} spacing={5}>
                              <div  ref={(ref) =>connectors.create(ref,<Headline fontSize='20px' text="Headline" />)}><HeadlineIcon /></div>  
                                <SubHeadline />
                                <Bullets />

                            </SimpleGrid>


                        </Box>:<></>}
                    {value.id === "media" ?<Box p={5}>
                        <div style={{ borderBottom: "2px solid  #E2E2E2", color: '#0184FF', marginRight: "16px", marginBottom: "20px" }}>
                            <p>Media</p>
                        </div>

                        <SimpleGrid columns={2} spacing={5}>
                            <div  ref={(ref) =>connectors.create(ref,<ImageComponent name="Image" />)}> <Image /></div> 
                           
                            <Video />

                        </SimpleGrid>

                    </Box>:<></>}
                    { value.id === "form" ?<Box p={5}>
                        <div style={{ borderBottom: "2px solid  #E2E2E2", color: '#0184FF', marginRight: "16px", marginBottom: "20px" }}>
                            <p>Form</p>
                        </div>

                        <SimpleGrid columns={2} spacing={5}>
                            <Input />
                            <DropDown />
                            <TextArea />
                            <Checkbox />
                            <SMS />
                            <Survey />
                            <Billing />
                            <Signature />
                            <div  ref={(ref) =>connectors.create(ref,<ButtonElement />)}> <Button buttonStyle='full' background={{ r: 255, g: 255, b: 255, a: 0.5 }}/></div> 
                           
                        </SimpleGrid>
                    </Box>:<></>}
                    { value.id === "misc" ?<Box position='absolute' left="7%" width='92%'>
                        <div style={{ borderBottom: "2px solid  #E2E2E2", color: '#0184FF', marginRight: "16px", marginBottom: "20px" }}>
                            <p>Misc</p>
                        </div>

                        <SimpleGrid columns={2} spacing={5}>
                            <Countdown />
                            <Product />
                        </SimpleGrid>
                    </Box> :<></>}
                </Box>);
  };

  export default Toolbox;