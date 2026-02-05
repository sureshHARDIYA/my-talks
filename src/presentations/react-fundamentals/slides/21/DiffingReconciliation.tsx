import { Appear, Box } from "spectacle";
import { ReactFlow, ReactFlowProvider, useNodesState, useEdgesState, Background, Controls, type Node, type Edge } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { leroyTheme } from "@/theme/leroy";

const leftNodes: Node[] = [
  { id: "old-html", position: { x: 10, y: 10 }, data: { label: "Old tree\n(previous render)" }, style: { background: leroyTheme.grey20, borderRadius: 6, padding: "8px 12px", fontSize: 11 } },
  { id: "old-body", position: { x: 50, y: 70 }, data: { label: "<body>" }, style: { background: leroyTheme.grey40, color: "#fff", borderRadius: 6, padding: "6px 10px", fontSize: 10 } },
  { id: "old-h1", position: { x: 10, y: 120 }, data: { label: "<h1>" }, style: { background: leroyTheme.grey20, padding: "4px 8px", fontSize: 10, borderRadius: 4 } },
  { id: "old-p1", position: { x: 70, y: 120 }, data: { label: "<p>1</p>" }, style: { background: leroyTheme.grey20, padding: "4px 8px", fontSize: 10, borderRadius: 4 } },
];
const leftEdges: Edge[] = [
  { id: "e1", source: "old-html", target: "old-body" },
  { id: "e2", source: "old-body", target: "old-h1" },
  { id: "e3", source: "old-body", target: "old-p1" },
];

const rightNodes: Node[] = [
  { id: "new-html", position: { x: 10, y: 10 }, data: { label: "New tree\n(current render)" }, style: { background: leroyTheme.grey20, borderRadius: 6, padding: "8px 12px", fontSize: 11 } },
  { id: "new-body", position: { x: 50, y: 70 }, data: { label: "<body>" }, style: { background: leroyTheme.grey40, color: "#fff", borderRadius: 6, padding: "6px 10px", fontSize: 10 } },
  { id: "new-h1", position: { x: 10, y: 120 }, data: { label: "<h1>" }, style: { background: leroyTheme.grey20, padding: "4px 8px", fontSize: 10, borderRadius: 4 } },
  { id: "new-p1", position: { x: 50, y: 120 }, data: { label: "<p>1</p>" }, style: { background: leroyTheme.grey20, padding: "4px 8px", fontSize: 10, borderRadius: 4 } },
  { id: "new-p2", position: { x: 90, y: 120 }, data: { label: "<p>2</p>" }, style: { background: leroyTheme.linkBlue, color: "#fff", padding: "4px 8px", fontSize: 10, borderRadius: 4 } },
];
const rightEdges: Edge[] = [
  { id: "f1", source: "new-html", target: "new-body" },
  { id: "f2", source: "new-body", target: "new-h1" },
  { id: "f3", source: "new-body", target: "new-p1" },
  { id: "f4", source: "new-body", target: "new-p2" },
];

function DiffFlow({ nodes, edges }: { nodes: Node[]; edges: Edge[] }) {
  const [n, , onNodesChange] = useNodesState(nodes);
  const [e, , onEdgesChange] = useEdgesState(edges);
  return (
    <ReactFlow
      nodes={n}
      edges={e}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
      minZoom={0.5}
      maxZoom={1}
      nodesDraggable={false}
      nodesConnectable={false}
      elementsSelectable={false}
      proOptions={{ hideAttribution: true }}
      style={{ background: leroyTheme.grey0 }}
    >
      <Background color={leroyTheme.grey20} gap={10} size={1} />
      <Controls showInteractive={false} />
    </ReactFlow>
  );
}

const DiffingReconciliation = () => {
  return (
    <Box padding="0 0.5rem">
      <p-heading size="medium" style={{ color: leroyTheme.linkBlue, marginBottom: "0.5rem" }}>
        Diffing algorithm & reconciliation
      </p-heading>

      <ul className="list-disc pl-6 mb-4 text-left" style={{ fontSize: "16px", color: leroyTheme.black }}>
        <Appear priority={1}><li className="mb-1"><strong>Diffing</strong>: Compare previous and current virtual DOM trees (e.g. same type → update props/children; different type → replace).</li></Appear>
        <Appear priority={2}><li className="mb-1"><strong>Reconciliation</strong>: Apply the minimal set of changes to the real DOM (insert/update/remove nodes).</li></Appear>
        <Appear priority={3}><li>Result: only the new &lt;p&gt; is added to the DOM; &lt;h1&gt; and existing &lt;p&gt; are left as-is.</li></Appear>
      </ul>

      <Appear priority={4}>
        <p className="text-sm mb-2" style={{ color: leroyTheme.grey80 }}>Old tree vs new tree (only new node added)</p>
        <div className="grid grid-cols-2 gap-4" style={{ height: "220px" }}>
          <div style={{ border: `1px solid ${leroyTheme.grey20}`, borderRadius: 8, overflow: "hidden" }}>
            <ReactFlowProvider>
              <DiffFlow nodes={leftNodes} edges={leftEdges} />
            </ReactFlowProvider>
          </div>
          <div style={{ border: `1px solid ${leroyTheme.grey20}`, borderRadius: 8, overflow: "hidden" }}>
            <ReactFlowProvider>
              <DiffFlow nodes={rightNodes} edges={rightEdges} />
            </ReactFlowProvider>
          </div>
        </div>
      </Appear>
    </Box>
  );
};

export default DiffingReconciliation;
