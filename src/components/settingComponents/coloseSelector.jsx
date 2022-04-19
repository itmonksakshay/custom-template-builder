import { Box,Text,Button} from '@chakra-ui/react';
import { BlockPicker} from 'react-color';
import React,{useState} from 'react';

export default function ColorSelector({bgColor,txtColor,bgHandle,txtHandle}){

    const [bgVisible, setBgVisiblity] = useState(false);
    const [txtVisible,setTxtVisiblity] = useState(false);
    return(<Box d='flex' flexDirection={'column'} py={'10px'}>
            <Box d='flex' flexDirection='row' pos='relative' py={'10px'}  alignItems='center'>
                <Box flexBasis={'25%'}> <Text>Background Color</Text></Box>
                <Box flexBasis={'75%'}>
                    <button style={{width:'100%',height:'42px'}} onClick={(e)=>{
                        setTxtVisiblity(false);
                            return  setBgVisiblity(!bgVisible);
                        }}>
                            <Box bg={bgColor} h={'42px'}  w={'100%'} border={bgColor==='#ffffff'?'1px solid #0184FF':''}></Box>
                    </button>
                </Box>
                { bgVisible? <Box top="100%" left="45%" pos="absolute" zIndex={1000}>
                    <BlockPicker  color={bgColor} onChangeComplete={bgHandle}/>
                    </Box> :<></>}
            </Box>
            <Box d='flex'  alignItems='center' flexDirection='row' py={'10px'} pos='relative'>
                <Box flexBasis={'25%'}> 
                    <Text> Text Color</Text>
                </Box>
                <Box flexBasis={'75%'}>
                    <button style={{width:'100%',height:'42px'}} onClick={(e)=>{
                        setTxtVisiblity(!txtVisible)
                        return  setBgVisiblity(false)
                    }}>
                        <Box bg={txtColor} h={'42px'}  w={'100%'} border={txtColor==='#ffffff'?'1px solid #0184FF':''}></Box>
                    </button>
                </Box>
                {txtVisible ? 
                    <Box top="100%" left="45%" pos="absolute" zIndex={1000}>
                        <BlockPicker  color={txtColor} onChangeComplete={txtHandle}/>
                   </Box>:<></>} 
            </Box>
        </Box>);
}
