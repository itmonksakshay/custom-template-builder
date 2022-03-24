import React,{useEffect,useState} from 'react';
import { ValueSlider } from '../../snippets';
import { Box } from '@chakra-ui/react';

export default function PaddingSelector({value,setPadding}){
    
    const [paddingValue,setPaddingValue] = useState(value);



    const handleChange =({value,name})=>{
       
        const updatedValue = {...paddingValue,[name]:value}
        setPadding(updatedValue);
        return   setPaddingValue(updatedValue);

    }

    return(<Box w='100%' d='flex' flexDirection='column'>
        <Box w='full' h={'43px'} pl={'32px'} bg='#F1F1F1' d='flex' alignItems={'center'}>PADDING</Box>
        <Box px={'32px'} py={'10px'}>
            <Box d='flex' w='full'  py={'10px'} flexDirection='row'>
                <Box flexBasis='25%'>
                    Top
                </Box>
                <Box flexBasis='58%'>
                    <ValueSlider valueChange={handleChange} value={{defaultValue:paddingValue.pt,name:'pt'}}/>
                </Box>
                <Box flexBasis='17%' d='flex' justifyContent={'flex-end'}>
                    <Box as='p' w={55} h={30} border={1} borderStyle="solid" borderColor="#C4C4C4" textAlign="center" borderRadius={3}>{paddingValue.pt}</Box>
                </Box>

            </Box>
            <Box d='flex' w='full' py={'10px'} flexDirection='row'>
                <Box flexBasis='25%'>
                    Bottom
                </Box>
                <Box flexBasis='58%'>
                <ValueSlider valueChange={handleChange} value={{defaultValue:paddingValue.pb,name:'pb'}}/>
                </Box>
                <Box flexBasis='17%'  d='flex' justifyContent={'flex-end'}>
                    <Box as='p' w={55} h={30} border={1} borderStyle="solid" borderColor="#C4C4C4" textAlign="center" borderRadius={3}>{paddingValue.pb}</Box>
                </Box>

            </Box>
            <Box d='flex' w='full'  py={'10px'} flexDirection='row'>
                <Box flexBasis='25%'>
                    Left Right
                </Box>
                <Box flexBasis='58%'>
                    <ValueSlider valueChange={handleChange} value={{defaultValue:paddingValue.prl,name:'prl'}}/>
                </Box>
                <Box flexBasis='17%'  d='flex' justifyContent={'flex-end'}>
                    <Box as='p' w={55} h={30} border={1} borderStyle="solid" borderColor="#C4C4C4" textAlign="center" borderRadius={3}>{paddingValue.prl}</Box>
                </Box>
            </Box>   
        </Box>
     
    </Box>)

}