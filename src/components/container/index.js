import { useNode } from "@craftjs/core";
import { Container,Box} from "@chakra-ui/react";
import { ContainerSettings } from "./settings";

const ViewPortContainer = ({ background, padding = 0, children }) => {
    const {connectors: { connect, drag }} = useNode();
    return (
      <Box maxW='xl' ref={(ref) => connect(drag(ref))} p={5} bg={background} minW='100%' h='100%'>
        {children}
      </Box>
    );
  };

  ViewPortContainer.craft = {
    props: {
      background: "#ffffff",
      padding: 3
    },
    related: {
      toolbar: ContainerSettings
    }
  };

  export default ViewPortContainer;