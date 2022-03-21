import React,{useState} from 'react';
import {Box,FormControl,Button} from '@chakra-ui/react';


export default function ImageSelector({imageUrl,setImage}){

    const [url,setUrl] = useState(imageUrl);

    const inputChangeHandler =(e)=>{
        e.preventDefault();
        setUrl(e.target.value);

    }


    return(<Box d='flex' flexDirection='row'>  
            <Box> Background Image</Box>
            <Box>           <form>
                <FormControl  isRequired>
                <Box><input placeholder="Enter Image Url" onChange={(e)=> inputChangeHandler(e)} value={url}/>
                    <Button onClick={()=>setImage(url)}>
                    Upload
                    </Button>
                </Box>
                </FormControl>
        </form></Box>
      </Box>)


}