import React from 'react';
import { useEditor } from "@craftjs/core";


const SettingsPanel = () => {
    const { actions, selected } = useEditor((state, query) => {
      const currentNodeId = state.events.selected;
      let selected;
  
      // if (currentNodeId) {
      //   selected = {
      //     id: currentNodeId,
      //     name: state.nodes[currentNodeId].data.name,
      //     settings:
      //       state.nodes[currentNodeId].related &&
      //       state.nodes[currentNodeId].related.settings,
      //     isDeletable: query.node(currentNodeId).isDeletable()
      //   };
      // }
  
      return {
        selected
      };
    });
    return selected ? (
      <div style={{background:"rgba(0, 0, 0, 0.06)",marginTop:'2px',padding:'2px',width:'100%'}}>
  
          {selected.settings && React.createElement(selected.settings)}
  
  
      </div>
    ) : <></>;
  };

export default SettingsPanel;