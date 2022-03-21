import { Box,Text,Button} from '@chakra-ui/react';
import { BlockPicker} from 'react-color';
import React,{useState} from 'react';

export default function ColorSelector({bgColor,txtColor,bgHandle,txtHandle}){

    const [bgVisible, setBgVisiblity] = useState(false);
    const [txtVisible,setTxtVisiblity] = useState(false);
    return(<Box>
        <Box><Text>Colose Selector</Text></Box>
        <Box>
            <Box d='flex' flexDirection='row' pos='relative'>
            <Box p={5}> <Text>Background Color</Text></Box>
            <Box p={5}><button onClick={(e)=>{
                    setTxtVisiblity(false);
                        return  setBgVisiblity(!bgVisible);
                    }}><Box bg={bgColor} h={5} w={20}></Box></button></Box>
               { bgVisible? <Box top="100%" left="33%" pos="absolute" zIndex={1000}>
                   <BlockPicker  color={bgColor} onChangeComplete={bgHandle}/>
                </Box> :<></>}
            </Box>
        </Box>
        <Box>
            <Box d='flex' flexDirection='row' pos='relative'>
                <Box p={5}> <Text> Text Color</Text></Box>
                <Box p={5}><button onClick={(e)=>{
                    setTxtVisiblity(!txtVisible)
                    return  setBgVisiblity(false)
                    }}><Box bg={txtColor} h={5} w={20}></Box></button></Box>
               {txtVisible ? <Box top="100%" left="14%" pos="absolute" zIndex={1000}>
                   <BlockPicker  color={txtColor} onChangeComplete={txtHandle}/>
                   </Box>:<></>} 
            </Box>
        </Box>

    </Box>);
}
