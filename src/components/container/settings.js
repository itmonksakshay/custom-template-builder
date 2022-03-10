import { useNode } from "@craftjs/core";

export const ContainerSettings = () => {
    const {
      background,
      padding,
      actions: { setProp }
    } = useNode((node) => ({
      background: node.data.props.background,
      padding: node.data.props.padding
    }));
    return (
      <div style={{width:'100%',height:'200px'}}>
        <h2> Container Setting Manager</h2>
      </div>
    );
};
  
