import { useEditor } from '@craftjs/core';
import React, { useEffect,useState } from 'react';
import { SettingsPanel,Toolbox,Topbar,Sidebar } from '../panels';
// import { Toolbox } from './Toolbox';

const Viewport = ({ children }) => {
    const {enabled,connectors,actions: { setOptions },} = useEditor((state) => ({
                            enabled: state.options.enabled,
    }));

    const [code, setCode] = useState({});

  useEffect(() => {
    if (!window) {
      return;
    }

    window.requestAnimationFrame(() => {
      // Notify doc site
      window.parent.postMessage(
        {
          LANDING_PAGE_LOADED: true,
        },
        '*'
      );

      setTimeout(() => {
        setOptions((options) => {
          options.enabled = true;
        });
      }, 200);
    });
  }, [setOptions]);

  return (
    <div className="viewport">
        <div className='h-screen overflow-hidden w-full relative'>
            <div className='w-full' style={{height:'14%'}}>
                <Topbar setCode={setCode} />
            </div>
            <div style={{height:'86%'}} className='w-full flex flex-row'>
                <div className=" page-container flex flex-row h-full" style={{flexBasis:'91%'}}>
                    <div className='craftjs-renderer flex-1 h-full w-full transition overflow-auto'>
                        <div className="relative h-full flex-col flex items-center bg-color-black">
                            {children}
                        </div>
                    </div> 
                </div>
                <div style={{flexBasis:'9%'}}>
                    <Sidebar />
                </div>    
            </div>
        </div>
    </div>
  );
};

export default Viewport;
