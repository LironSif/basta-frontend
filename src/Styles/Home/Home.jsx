

import SplitPane from "react-split-pane"


export default function splitScreen (){
    return(
        <SplitPane split="vertical" minSize={50}>
            <div style={{background:'red', height:"100%"}}></div>
            <div style={{background:'green', height:"100%"}}></div>
        </SplitPane>
    )
}