import { useNode } from "@craftjs/core";
import { ContainerSettings } from "./settings";

const ResizableComponent = ({ background, padding = 0, children }) => {
    const {connectors: { connect, drag }} = useNode();
    return (
      <div
        ref={(ref) => connect(drag(ref))}
        style={{ margin: "5px 0", background, padding: `${padding}px`,width:'100%' }}
      >
        {children}
      </div>
    );
  };

  ResizableComponent.craft = {
    props: {
      background: "#ffffff",
      padding: 3
    },
    related: {
      settings: ContainerSettings
    }
  };

  export default ResizableComponent;