import { useMemo } from "react";
import { Box, useSteps } from "spectacle";
import {
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  Position,
  type Node,
  type Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { leroyTheme } from "@/theme/leroy";

type Step = {
  id: string;
  label: string;
  note: string;
};

const STEPS: Step[] = [
  { id: "M", label: "MONITOR", note: "Deps + CVEs" },
  { id: "D", label: "DETECT", note: "Critical updates" },
  { id: "U", label: "UPDATE", note: "Bump + format + lint" },
  { id: "B", label: "BUILD & TEST", note: "CI passes" },
  { id: "P", label: "OPEN PR", note: "Tag reviewer" },
  { id: "N", label: "NOTIFY TEAMS", note: "Request approval" },
];

const NODE_X = 200;
const NODE_Y = 0;

const buildNode = (s: Step, idx: number): Node => ({
  id: s.id,
  position: { x: idx * NODE_X, y: NODE_Y },
  data: {
    label: (
      <div style={{ textAlign: "center", lineHeight: 1.3 }}>
        <div style={{ fontWeight: 600 }}>{s.label}</div>
        <div style={{ fontSize: 10, opacity: 0.7 }}>{s.note}</div>
      </div>
    ),
  },
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
});

const buildEdge = (from: Step, to: Step): Edge => ({
  id: `${from.id}-${to.id}`,
  source: from.id,
  target: to.id,
  animated: true,
});

const Flow = ({ visibleCount }: { visibleCount: number }) => {
  const visible = STEPS.slice(0, visibleCount);

  const nodes = visible.map((s, idx) => buildNode(s, idx));

  const edges = useMemo(
    () =>
      visible.slice(0, -1).map((s, idx) => buildEdge(s, visible[idx + 1])),
    [visibleCount]
  );

  const [n, , onNodesChange] = useNodesState(nodes);
  const [e, , onEdgesChange] = useEdgesState(edges);

  return (
    <ReactFlow
      nodes={n}
      edges={e}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
      fitViewOptions={{ padding: 0.2 }}
      minZoom={0.4}
      maxZoom={1.2}
      nodesDraggable={false}
      nodesConnectable={false}
      elementsSelectable={false}
      panOnDrag={false}
      zoomOnScroll={false}
      zoomOnPinch={false}
      zoomOnDoubleClick={false}
      proOptions={{ hideAttribution: true }}
    />
  );
};

const CaseStudyIntro = () => {
  const { step, placeholder } = useSteps(STEPS.length - 1);
  const visibleCount = Math.min(step + 1, STEPS.length);

  return (
    <Box padding="0.5rem 1.5rem">
      {placeholder}

      <div
        style={{
          textAlign: "center",
          fontSize: "0.95rem",
          color: leroyTheme.grey60,
          fontStyle: "italic",
          marginBottom: "0.85rem",
        }}
      >
        Continuous security &amp; dependency hygiene — unattended. Never sleeps.
        Never misses a CVE.
      </div>

      <div style={{ height: 280, width: "100%" }}>
        <ReactFlowProvider>
          <Flow key={visibleCount} visibleCount={visibleCount} />
        </ReactFlowProvider>
      </div>

      <div
        style={{
          marginTop: "0.6rem",
          textAlign: "center",
          fontSize: "0.85rem",
          color: leroyTheme.grey60,
        }}
      >
        Step {visibleCount} / {STEPS.length} ·{" "}
        <span style={{ color: leroyTheme.linkBlue, fontWeight: 700 }}>
          {STEPS[visibleCount - 1]?.label}
        </span>
      </div>
    </Box>
  );
};

export default CaseStudyIntro;
