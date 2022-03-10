import { useNode } from "@craftjs/core";

export const TextSettings = () => {
    const {
      actions: { setProp },
      fontSize,
      text
    } = useNode((node) => ({
      fontSize: node.data.props.fontSize,
      text: node.data.props.text
    }));
  
    return (<>
      <div style={{width:'100%',height:'200px'}}>
        <h2> Text Setting Manager</h2>
      </div>
      </>);
  };