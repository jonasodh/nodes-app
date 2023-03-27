import React, {useEffect} from 'react';
import ReactFlow, {Edge} from 'reactflow';
import 'reactflow/dist/style.css';
import {ObsidianNodes} from "./models/ObsidianNodes";
import {Node} from "@reactflow/core/dist/esm/types/nodes";

let data = require('./data/testing.json')
const initialNodes: Node[]= [];
const initialEdges:Edge[] = [];

function convertObsidianNodesToReactFlowNodes(){
    let obsidianNodes:ObsidianNodes = data;

    for (let i = 0; i < obsidianNodes.nodes.length; i++) {
        initialNodes.push({
            id: obsidianNodes?.nodes[i]?.id,
            position: {x: obsidianNodes?.nodes[i].x, y: obsidianNodes?.nodes[i].y},
            data: {label: obsidianNodes?.nodes[i]?.text},
        });
    }
    console.log(initialNodes);
    return initialNodes;
}

function convertObsidianEdgesToReactFlowEdges() {
    let obisidianEdges:ObsidianNodes = data;

    for (let i = 0; i < obisidianEdges?.edges?.length; i++) {
        initialEdges.push({
            id: obisidianEdges?.edges?.[i].id,
            source: obisidianEdges?.edges?.[i].fromNode,
            target: obisidianEdges?.edges?.[i].toNode,
        });
    }
    console.log(initialEdges);
    return initialEdges;
}


export default function App() {
    useEffect(() => {
        convertObsidianNodesToReactFlowNodes();
        convertObsidianEdgesToReactFlowEdges();
    }, [])


  return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow nodes={initialNodes} edges={initialEdges} />
      </div>
  );
}
