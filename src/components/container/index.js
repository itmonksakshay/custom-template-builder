import { useNode } from "@craftjs/core";
import { Container,Box} from "@chakra-ui/react";
import { BasicSettings } from "./settings";


const defaultProps ={

  padding:{ pt:5, pb:5, prl:5 },
  background: '#ffffff',
  color:'#000000',
  backgroundImage:''
}

const ViewPortContainer = (props) => {

    props ={...defaultProps,...props};

    const {padding,background,children,color,backgroundImage} = props;

    let bgGradient = backgroundImage ? `url(${backgroundImage}) !important` : ''
    let backgroundSize = backgroundImage?'cover !important' :''

    const {connectors: { connect, drag }} = useNode();
    
    return (<Box  bgImage={bgGradient} bgSize={backgroundSize} ref={(ref) => connect(drag(ref))}  pt={padding.pt} pb={padding.pb} color={color} px={padding.prl} bg={background} minW='100%' h='100%' overflowX='hidden'>
        {children}
      </Box>)

  };

  ViewPortContainer.craft = {
    displayName: 'Body',
    props:defaultProps,
    related: {BasicSettings}
  };

  export default ViewPortContainer;