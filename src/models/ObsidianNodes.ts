export interface ObsidianNodes {
    nodes: Node[]
    edges: Edge[]
}

export interface Node {
    id: string
    x: number
    y: number
    width: number
    height: number
    type: string
    text: string
    color?: string
}

export interface Edge {
    id: string
    fromNode: string
    fromSide: string
    toNode: string
    toSide: string
}
