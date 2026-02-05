import {
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { leroyTheme } from "@/theme/leroy";

const traditionalNodes: Node[] = [
  {
    id: "t1",
    position: { x: 0, y: 20 },
    data: { label: "Something changes" },
    style: {
      background: leroyTheme.grey20,
      borderRadius: 8,
      padding: "8px 12px",
      fontSize: 11,
      fontWeight: 600,
    },
  },
  {
    id: "t2",
    position: { x: 160, y: 20 },
    data: { label: "Entire page\nre-requested" },
    style: {
      background: leroyTheme.grey40,
      color: "#fff",
      borderRadius: 8,
      padding: "8px 12px",
      fontSize: 10,
      fontWeight: 600,
    },
  },
  {
    id: "t3",
    position: { x: 320, y: 20 },
    data: { label: "Full page\nre-rendered" },
    style: {
      background: leroyTheme.linkBlue,
      color: "#fff",
      borderRadius: 8,
      padding: "8px 12px",
      fontSize: 10,
      fontWeight: 600,
    },
  },
];

const traditionalEdges: Edge[] = [
  { id: "te1", source: "t1", target: "t2", animated: true },
  { id: "te2", source: "t2", target: "t3", animated: true },
];

const spaNodes: Node[] = [
  {
    id: "s1",
    position: { x: 0, y: 20 },
    data: { label: "Something changes" },
    style: {
      background: leroyTheme.grey20,
      borderRadius: 8,
      padding: "8px 12px",
      fontSize: 11,
      fontWeight: 600,
    },
  },
  {
    id: "s2",
    position: { x: 160, y: 20 },
    data: { label: "Only changed part\nrequested" },
    style: {
      background: leroyTheme.grey40,
      color: "#fff",
      borderRadius: 8,
      padding: "8px 12px",
      fontSize: 10,
      fontWeight: 600,
    },
  },
  {
    id: "s3",
    position: { x: 320, y: 20 },
    data: { label: "Only that part\nre-rendered" },
    style: {
      background: "#ea580c",
      color: "#fff",
      borderRadius: 8,
      padding: "8px 12px",
      fontSize: 10,
      fontWeight: 600,
    },
  },
];

const spaEdges: Edge[] = [
  { id: "se1", source: "s1", target: "s2", animated: true },
  { id: "se2", source: "s2", target: "s3", animated: true },
];

/** Small flow: entire document is rendered to browser (Document → DOM → Browser). */
const documentToBrowserNodes: Node[] = [
  {
    id: "doc",
    position: { x: 0, y: 12 },
    data: { label: "Document\n(HTML)" },
    style: {
      background: leroyTheme.grey20,
      borderRadius: 6,
      padding: "6px 10px",
      fontSize: 10,
      fontWeight: 600,
    },
  },
  {
    id: "dom",
    position: { x: 100, y: 12 },
    data: { label: "DOM tree" },
    style: {
      background: leroyTheme.grey40,
      color: "#fff",
      borderRadius: 6,
      padding: "6px 10px",
      fontSize: 10,
      fontWeight: 600,
    },
  },
  {
    id: "browser",
    position: { x: 200, y: 12 },
    data: { label: "Browser" },
    style: {
      background: leroyTheme.linkBlue,
      color: "#fff",
      borderRadius: 6,
      padding: "6px 10px",
      fontSize: 10,
      fontWeight: 600,
    },
  },
];
const documentToBrowserEdges: Edge[] = [
  { id: "d1", source: "doc", target: "dom", animated: true },
  { id: "d2", source: "dom", target: "browser", animated: true },
];

function DocumentToBrowserFlow() {
  const [n, , onNodesChange] = useNodesState(documentToBrowserNodes);
  const [e, , onEdgesChange] = useEdgesState(documentToBrowserEdges);
  return (
    <div style={{ height: 56, width: "100%", maxWidth: 340 }}>
      <ReactFlow
        nodes={n}
        edges={e}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        fitViewOptions={{ padding: 0.15 }}
        minZoom={0.5}
        maxZoom={1}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        proOptions={{ hideAttribution: true }}
        style={{ background: "transparent" }}
      />
    </div>
  );
}

function FlowColumn({ nodes, edges, title }: { nodes: Node[]; edges: Edge[]; title: string }) {
  const [n, , onNodesChange] = useNodesState(nodes);
  const [e, , onEdgesChange] = useEdgesState(edges);
  return (
    <div className="flex flex-col flex-1 min-w-0">
      <p className="text-xs font-semibold mb-1" style={{ color: leroyTheme.grey80 }}>
        {title}
      </p>
      <div
        style={{
          height: 100,
          border: `1px solid ${leroyTheme.grey20}`,
          borderRadius: 8,
          overflow: "hidden",
          background: leroyTheme.grey0,
        }}
      >
        <ReactFlow
          nodes={n}
          edges={e}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          minZoom={0.4}
          maxZoom={1}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          proOptions={{ hideAttribution: true }}
          style={{ background: leroyTheme.grey0 }}
        />
      </div>
    </div>
  );
}

/**
 * Document → Browser flow (animated), then two side-by-side diagrams:
 * Traditional (full page re-request) vs SPA (only changed part).
 */
export function TraditionalVsSpaFlow() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex flex-col gap-1">
        <p className="text-xs font-semibold" style={{ color: leroyTheme.grey80 }}>
          Entire document is rendered to the browser
        </p>
        <ReactFlowProvider>
          <DocumentToBrowserFlow />
        </ReactFlowProvider>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <ReactFlowProvider>
          <FlowColumn
          nodes={traditionalNodes}
          edges={traditionalEdges}
          title="Traditional — entire page re-requested & re-rendered"
        />
      </ReactFlowProvider>
      <ReactFlowProvider>
        <FlowColumn
          nodes={spaNodes}
          edges={spaEdges}
          title="Single page application — only changed part re-requested & re-rendered"
        />
      </ReactFlowProvider>
      </div>
    </div>
  );
}
