import { Appear, Box } from "spectacle";
import { ReactFlow, ReactFlowProvider, useNodesState, useEdgesState, Background, type Node, type Edge } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { motion } from "framer-motion";
import { leroyTheme } from "@/theme/leroy";

// Virtual DOM nodes
const vdomNodes: Node[] = [
  {
    id: "react-logo",
    position: { x: 50, y: 20 },
    data: { label: "⚛️" },
    style: {
      background: "transparent",
      border: "none",
      fontSize: 60,
      padding: 0
    }
  },
  {
    id: "vdom-root",
    position: { x: 20, y: 120 },
    data: { label: "Virtual DOM" },
    style: {
      background: "#61DAFB",
      color: "#282c34",
      borderRadius: 8,
      padding: "12px 20px",
      fontSize: 14,
      fontWeight: 600,
      border: "2px solid #282c34"
    }
  },
  {
    id: "vdom-1",
    position: { x: 10, y: 200 },
    data: { label: "🟠" },
    style: {
      background: "transparent",
      border: "none",
      fontSize: 32,
      padding: 0
    }
  },
  {
    id: "vdom-2",
    position: { x: 50, y: 200 },
    data: { label: "🟠" },
    style: {
      background: "transparent",
      border: "none",
      fontSize: 32,
      padding: 0
    }
  },
  {
    id: "vdom-3",
    position: { x: 90, y: 200 },
    data: { label: "🟠" },
    style: {
      background: "transparent",
      border: "none",
      fontSize: 32,
      padding: 0
    }
  },
  {
    id: "vdom-4",
    position: { x: 0, y: 260 },
    data: { label: "🟠" },
    style: {
      background: "transparent",
      border: "none",
      fontSize: 24,
      padding: 0
    }
  },
  {
    id: "vdom-5",
    position: { x: 30, y: 260 },
    data: { label: "🟠" },
    style: {
      background: "transparent",
      border: "none",
      fontSize: 24,
      padding: 0
    }
  },
  {
    id: "vdom-6",
    position: { x: 60, y: 260 },
    data: { label: "🟠" },
    style: {
      background: "transparent",
      border: "none",
      fontSize: 24,
      padding: 0
    }
  },
  {
    id: "vdom-7",
    position: { x: 100, y: 260 },
    data: { label: "🟠" },
    style: {
      background: "transparent",
      border: "none",
      fontSize: 24,
      padding: 0
    }
  },
];

const vdomEdges: Edge[] = [
  { id: "e1", source: "vdom-root", target: "vdom-1", style: { stroke: "#282c34", strokeWidth: 2 } },
  { id: "e2", source: "vdom-root", target: "vdom-2", style: { stroke: "#282c34", strokeWidth: 2 } },
  { id: "e3", source: "vdom-root", target: "vdom-3", style: { stroke: "#282c34", strokeWidth: 2 } },
  { id: "e4", source: "vdom-1", target: "vdom-4", style: { stroke: "#666", strokeWidth: 1.5, strokeDasharray: "5,5" } },
  { id: "e5", source: "vdom-1", target: "vdom-5", style: { stroke: "#666", strokeWidth: 1.5, strokeDasharray: "5,5" } },
  { id: "e6", source: "vdom-2", target: "vdom-6", style: { stroke: "#666", strokeWidth: 1.5, strokeDasharray: "5,5" } },
  { id: "e7", source: "vdom-3", target: "vdom-7", style: { stroke: "#666", strokeWidth: 1.5, strokeDasharray: "5,5" } },
];

// Real DOM nodes
const realDomNodes: Node[] = [
  {
    id: "rdom-root",
    position: { x: 20, y: 120 },
    data: { label: "Real DOM" },
    style: {
      background: "#4CAF50",
      color: "white",
      borderRadius: 8,
      padding: "12px 20px",
      fontSize: 14,
      fontWeight: 600,
      border: "2px solid #2E7D32"
    }
  },
  {
    id: "rdom-1",
    position: { x: 10, y: 200 },
    data: { label: "🟠" },
    style: {
      background: "transparent",
      border: "none",
      fontSize: 32,
      padding: 0
    }
  },
  {
    id: "rdom-2",
    position: { x: 50, y: 200 },
    data: { label: "🟡" },
    style: {
      background: "transparent",
      border: "none",
      fontSize: 32,
      padding: 0
    }
  },
  {
    id: "rdom-3",
    position: { x: 90, y: 200 },
    data: { label: "🟠" },
    style: {
      background: "transparent",
      border: "none",
      fontSize: 32,
      padding: 0
    }
  },
  {
    id: "rdom-4",
    position: { x: 0, y: 260 },
    data: { label: "🟠" },
    style: {
      background: "transparent",
      border: "none",
      fontSize: 24,
      padding: 0
    }
  },
  {
    id: "rdom-5",
    position: { x: 30, y: 260 },
    data: { label: "🟡" },
    style: {
      background: "transparent",
      border: "none",
      fontSize: 24,
      padding: 0
    }
  },
  {
    id: "rdom-6",
    position: { x: 60, y: 260 },
    data: { label: "🟠" },
    style: {
      background: "transparent",
      border: "none",
      fontSize: 24,
      padding: 0
    }
  },
  {
    id: "rdom-7",
    position: { x: 100, y: 260 },
    data: { label: "🟠" },
    style: {
      background: "transparent",
      border: "none",
      fontSize: 24,
      padding: 0
    }
  },
];

const realDomEdges: Edge[] = [
  { id: "r1", source: "rdom-root", target: "rdom-1", style: { stroke: "#2E7D32", strokeWidth: 2 } },
  { id: "r2", source: "rdom-root", target: "rdom-2", style: { stroke: "#2E7D32", strokeWidth: 2 } },
  { id: "r3", source: "rdom-root", target: "rdom-3", style: { stroke: "#2E7D32", strokeWidth: 2 } },
  { id: "r4", source: "rdom-1", target: "rdom-4", style: { stroke: "#666", strokeWidth: 1.5, strokeDasharray: "5,5" } },
  { id: "r5", source: "rdom-1", target: "rdom-5", style: { stroke: "#666", strokeWidth: 1.5, strokeDasharray: "5,5" } },
  { id: "r6", source: "rdom-2", target: "rdom-6", style: { stroke: "#666", strokeWidth: 1.5, strokeDasharray: "5,5" } },
  { id: "r7", source: "rdom-3", target: "rdom-7", style: { stroke: "#666", strokeWidth: 1.5, strokeDasharray: "5,5" } },
];

function DOMFlow({ nodes, edges }: { nodes: Node[]; edges: Edge[] }) {
  const [n, , onNodesChange] = useNodesState(nodes);
  const [e, , onEdgesChange] = useEdgesState(edges);

  return (
    <ReactFlow
      nodes={n}
      edges={e}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
      minZoom={0.8}
      maxZoom={1.2}
      nodesDraggable={false}
      nodesConnectable={false}
      elementsSelectable={false}
      proOptions={{ hideAttribution: true }}
      style={{ background: "white" }}
    >
      <Background color="#e0e0e0" gap={16} size={1} />
    </ReactFlow>
  );
}

const VirtualDomPatching = () => {
  return (
    <Box padding="1rem 2rem">
      <Appear priority={1}>
        <p className="text-sm mb-4" style={{ color: leroyTheme.grey80, textAlign: "center", fontSize: "1rem" }}>
          React maintains a Virtual DOM tree and compares it with the Real DOM
        </p>
      </Appear>

      <Appear priority={2}>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem", justifyContent: "center", marginBottom: "2rem" }}>
          <div style={{
            width: "35%",
            height: "380px",
            border: `2px solid ${leroyTheme.grey20}`,
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}>
            <ReactFlowProvider>
              <DOMFlow nodes={vdomNodes} edges={vdomEdges} />
            </ReactFlowProvider>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ textAlign: "center" }}
          >
            <div style={{ fontSize: 48, marginBottom: 8 }}>→</div>
            <div style={{
              background: "#FF6B6B",
              color: "white",
              padding: "8px 16px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600
            }}>
              patch
            </div>
            <div style={{ fontSize: 48, marginTop: 8 }}>→</div>
          </motion.div>

          <div style={{
            width: "35%",
            height: "380px",
            border: `2px solid ${leroyTheme.grey20}`,
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}>
            <ReactFlowProvider>
              <DOMFlow nodes={realDomNodes} edges={realDomEdges} />
            </ReactFlowProvider>
          </div>
        </div>
      </Appear>

      <Appear priority={3}>
        <ul className="list-disc pl-6 text-left" style={{ fontSize: "0.95rem", color: leroyTheme.black, maxWidth: 800, margin: "0 auto" }}>
          <li className="mb-2">React creates a Virtual DOM snapshot on every render</li>
          <li className="mb-2">It compares the new Virtual DOM with the previous one</li>
          <li>Only the changes (🟡) are "patched" to the Real DOM</li>
        </ul>
      </Appear>
    </Box>
  );
};

export default VirtualDomPatching;
