import React,{useState} from 'react';
import {Box,FormControl,Button} from '@chakra-ui/react';
import {BiImage} from 'react-icons/bi';


export default function ImageSelector({imageUrl,setImage}){

    const [url,setUrl] = useState(imageUrl);

    const inputChangeHandler =(e)=>{
        e.preventDefault();
        setUrl(e.target.value);

    }


    return(<Box d='flex' flexDirection='row' alignItems={'center'}>  
            <Box flexBasis="25%"> Bg Image</Box>
            <Box flexBasis="75%" bg=''>
                <form>
                    <FormControl  isRequired>
                        <Box d="flex"  w="100%" h='45px' border='2px solid #ECECEC' borderRadius='3px'>
                            <input style={{width:"88%", height:'42px'}} placeholder="Image Url" onChange={(e)=> inputChangeHandler(e)} value={url}/>
                            <Box p='2px' w={'12%'} bg='#ECECEC' onClick={()=>setImage(url)}><BiImage size='2em'/></Box>
                        </Box>
                    </FormControl>
                </form>
            </Box>
      </Box>)


}