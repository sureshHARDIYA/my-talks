import { leroyTheme } from "@/theme/leroy";

const softFill = "#cbd5e1";
const softStroke = "#94a3b8";
const softText = "#334155";
const edgeStroke = "#64748b";

type Props = {
  /** When true, Body has a second P (new paragraph) and its leaf. */
  includeNewParagraph?: boolean;
  /** When set, draw a box around the new P node and its leaf with this color. */
  highlightNewParagraphColor?: string;
};

export function DOMTreeSVG({
  includeNewParagraph = false,
  highlightNewParagraphColor,
}: Props) {
  const pad = 20;
  const boxW = 56;
  const boxH = 24;
  const rx = 6;
  const gapY = 32;
  const cx = 160;
  const headX = 72;
  const bodyX = 248;
  const row1Y = pad;
  const row2Y = row1Y + boxH + gapY;
  const row3Y = row2Y + boxH + gapY;
  const row4Y = row3Y + boxH + gapY;
  const row5Y = row4Y + boxH + gapY;

  const h1X = bodyX - 58;
  const p1X = bodyX + 30;
  const p2X = bodyX + 130;

  const contentW = includeNewParagraph ? 460 : 320;
  const contentH = row5Y + boxH + pad;
  const viewBox = `0 0 ${contentW} ${contentH}`;

  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-full"
      style={{ background: leroyTheme.grey0, display: "block" }}
    >
      <defs>
        <marker
          id="arrow-dom-shared"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="2.5"
          orient="auto"
        >
          <path d="M0,0 L0,5 L7,2.5 z" fill={edgeStroke} />
        </marker>
      </defs>
      {/* Document */}
      <rect
        x={cx - boxW / 2}
        y={row1Y}
        width={boxW}
        height={boxH}
        rx={rx}
        ry={rx}
        fill={softFill}
        stroke={softStroke}
        strokeWidth={1}
      />
      <text x={cx} y={row1Y + 16} textAnchor="middle" fill={softText} fontSize={10} fontWeight="600">
        Document
      </text>
      <line
        x1={cx}
        y1={row1Y + boxH}
        x2={cx}
        y2={row2Y}
        stroke={edgeStroke}
        strokeWidth={1.5}
        markerEnd="url(#arrow-dom-shared)"
      />
      {/* HTML */}
      <rect
        x={cx - boxW / 2}
        y={row2Y}
        width={boxW}
        height={boxH}
        rx={rx}
        ry={rx}
        fill={softFill}
        stroke={softStroke}
        strokeWidth={1}
      />
      <text x={cx} y={row2Y + 16} textAnchor="middle" fill={softText} fontSize={10} fontWeight="600">
        HTML
      </text>
      <line
        x1={cx}
        y1={row2Y + boxH}
        x2={headX}
        y2={row3Y}
        stroke={edgeStroke}
        strokeWidth={1.5}
        markerEnd="url(#arrow-dom-shared)"
      />
      <line
        x1={cx}
        y1={row2Y + boxH}
        x2={bodyX}
        y2={row3Y}
        stroke={edgeStroke}
        strokeWidth={1.5}
        markerEnd="url(#arrow-dom-shared)"
      />
      {/* Head & Body */}
      <rect
        x={headX - boxW / 2}
        y={row3Y}
        width={boxW}
        height={boxH}
        rx={rx}
        ry={rx}
        fill={softFill}
        stroke={softStroke}
        strokeWidth={1}
      />
      <text x={headX} y={row3Y + 16} textAnchor="middle" fill={softText} fontSize={9} fontWeight="600">
        Head
      </text>
      <rect
        x={bodyX - boxW / 2}
        y={row3Y}
        width={boxW}
        height={boxH}
        rx={rx}
        ry={rx}
        fill={softFill}
        stroke={softStroke}
        strokeWidth={1}
      />
      <text x={bodyX} y={row3Y + 16} textAnchor="middle" fill={softText} fontSize={9} fontWeight="600">
        Body
      </text>
      <line
        x1={headX}
        y1={row3Y + boxH}
        x2={headX - 36}
        y2={row4Y}
        stroke={edgeStroke}
        strokeWidth={1.5}
        markerEnd="url(#arrow-dom-shared)"
      />
      <line
        x1={headX}
        y1={row3Y + boxH}
        x2={headX + 36}
        y2={row4Y}
        stroke={edgeStroke}
        strokeWidth={1.5}
        markerEnd="url(#arrow-dom-shared)"
      />
      <line
        x1={bodyX}
        y1={row3Y + boxH}
        x2={h1X}
        y2={row4Y}
        stroke={edgeStroke}
        strokeWidth={1.5}
        markerEnd="url(#arrow-dom-shared)"
      />
      <line
        x1={bodyX}
        y1={row3Y + boxH}
        x2={p1X}
        y2={row4Y}
        stroke={edgeStroke}
        strokeWidth={1.5}
        markerEnd="url(#arrow-dom-shared)"
      />
      {includeNewParagraph && (
        <line
          x1={bodyX}
          y1={row3Y + boxH}
          x2={p2X}
          y2={row4Y}
          stroke={edgeStroke}
          strokeWidth={1.5}
          markerEnd="url(#arrow-dom-shared)"
        />
      )}
      {/* Meta, Title */}
      <rect
        x={headX - 70}
        y={row4Y}
        width={52}
        height={boxH}
        rx={rx}
        ry={rx}
        fill={softFill}
        stroke={softStroke}
        strokeWidth={1}
      />
      <text x={headX - 44} y={row4Y + 16} textAnchor="middle" fill={softText} fontSize={8} fontWeight="600">
        Meta
      </text>
      <rect
        x={headX - 8}
        y={row4Y}
        width={52}
        height={boxH}
        rx={rx}
        ry={rx}
        fill={softFill}
        stroke={softStroke}
        strokeWidth={1}
      />
      <text x={headX + 18} y={row4Y + 16} textAnchor="middle" fill={softText} fontSize={8} fontWeight="600">
        Title
      </text>
      {/* H1, P */}
      <rect
        x={bodyX - 80}
        y={row4Y}
        width={44}
        height={boxH}
        rx={rx}
        ry={rx}
        fill={softFill}
        stroke={softStroke}
        strokeWidth={1}
      />
      <text x={h1X} y={row4Y + 16} textAnchor="middle" fill={softText} fontSize={8} fontWeight="600">
        H1
      </text>
      <rect
        x={p1X - 22}
        y={row4Y}
        width={44}
        height={boxH}
        rx={rx}
        ry={rx}
        fill={softFill}
        stroke={softStroke}
        strokeWidth={1}
      />
      <text x={p1X} y={row4Y + 16} textAnchor="middle" fill={softText} fontSize={8} fontWeight="600">
        P
      </text>
      {includeNewParagraph && (
        <>
          <rect
            x={p2X - 22}
            y={row4Y}
            width={44}
            height={boxH}
            rx={rx}
            ry={rx}
            fill={softFill}
            stroke={softStroke}
            strokeWidth={1}
          />
          <text x={p2X} y={row4Y + 16} textAnchor="middle" fill={softText} fontSize={8} fontWeight="600">
            P
          </text>
        </>
      )}
      <line
        x1={h1X}
        y1={row4Y + boxH}
        x2={h1X}
        y2={row5Y}
        stroke={edgeStroke}
        strokeWidth={1.5}
        markerEnd="url(#arrow-dom-shared)"
      />
      <line
        x1={p1X}
        y1={row4Y + boxH}
        x2={p1X}
        y2={row5Y}
        stroke={edgeStroke}
        strokeWidth={1.5}
        markerEnd="url(#arrow-dom-shared)"
      />
      {includeNewParagraph && (
        <line
          x1={p2X}
          y1={row4Y + boxH}
          x2={p2X}
          y2={row5Y}
          stroke={edgeStroke}
          strokeWidth={1.5}
          markerEnd="url(#arrow-dom-shared)"
        />
      )}
      {/* Leaf nodes */}
      <rect
        x={bodyX - 100}
        y={row5Y}
        width={84}
        height={boxH}
        rx={rx}
        ry={rx}
        fill={softFill}
        stroke={softStroke}
        strokeWidth={1}
      />
      <text x={h1X} y={row5Y + 16} textAnchor="middle" fill={softText} fontSize={7}>
        Welcome to Lerøy
      </text>
      <rect
        x={p1X - 50}
        y={row5Y}
        width={100}
        height={boxH}
        rx={rx}
        ry={rx}
        fill={softFill}
        stroke={softStroke}
        strokeWidth={1}
      />
      <text x={p1X} y={row5Y + 16} textAnchor="middle" fill={softText} fontSize={6}>
        Norsk sjømat...
      </text>
      {includeNewParagraph && (
        <>
          <rect
            x={p2X - 36}
            y={row5Y}
            width={72}
            height={boxH}
            rx={rx}
            ry={rx}
            fill={softFill}
            stroke={softStroke}
            strokeWidth={1}
          />
          <text x={p2X} y={row5Y + 16} textAnchor="middle" fill={softText} fontSize={6}>
            New paragraph.
          </text>
          {highlightNewParagraphColor && (
            <rect
              x={p2X - 38}
              y={row4Y - 3}
              width={78}
              height={row5Y - row4Y + boxH + 6}
              rx={rx + 2}
              fill="none"
              stroke={highlightNewParagraphColor}
              strokeWidth={2}
            />
          )}
        </>
      )}
    </svg>
  );
}
