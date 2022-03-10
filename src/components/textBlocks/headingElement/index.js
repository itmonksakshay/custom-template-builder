import { useNode } from "@craftjs/core";
import { TextSettings } from "./settings";

const Text = ({ text, fontSize }) => {
    const {connectors: { connect, drag }} = useNode();
    return (
      <div ref={(ref) => connect(drag(ref))}>
        <p style={{ fontSize }}>{text}</p>
      </div>
    );
  };

Text.craft = {
    props: {
      text: "Hi",
      fontSize: 20
    },
    related: {
      settings: TextSettings
    }
};
export default Text;
