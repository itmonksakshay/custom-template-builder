import { useEditor,Element } from "@craftjs/core";
import { Container,Text } from "../../components";

const Toolbox = () => {
    const { connectors, query } = useEditor();
    return (
      <div style={{width:'100%'}}>
        <div style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',paddingRight:'2px',paddingLeft:'2px'}}>
          <div style={{paddingBottom:'2px'}}>
            <h2>Drag to add</h2>
          </div>
          <div style={{display:'flex',flexDirection:'column'}}>
            <button
              ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
            >
              Text
            </button>
          </div>
          <div style={{}}>
            <button
              ref={(ref) =>
                connectors.create(
                  ref,
                  <Element is={Container} padding={20} canvas />
                )
              }
          
            >
              Container
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default Toolbox;