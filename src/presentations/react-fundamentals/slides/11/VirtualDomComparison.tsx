import { Appear, Box } from "spectacle";
import { leroyTheme } from "@/theme/leroy";

// Colors
const vdomFill = "#dbeafe";
const vdomStroke = "#60a5fa";
const rdomFill = "#dcfce7";
const rdomStroke = "#4ade80";
const changedFill = "#fed7aa";
const changedStroke = "#fb923c";
const edgeStroke = "#94a3b8";
const textColor = "#475569";

// Compact tree component - Old Virtual DOM (no Text/Button)
function OldVirtualDOMTree() {
  const boxW = 50;
  const boxH = 22;
  const rx = 4;

  return (
    <svg viewBox="0 0 160 180" className="w-full h-full" style={{ background: "white" }}>
      <defs>
        <marker id="arrow-old" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
          <path d="M0,0 L0,4 L5,2 z" fill={edgeStroke} />
        </marker>
      </defs>

      <text x="80" y="12" textAnchor="middle" fill={textColor} fontSize="11" fontWeight="700">
        Old VDOM
      </text>

      {/* Root */}
      <rect x="65" y="25" width={boxW} height={boxH} rx={rx} fill={vdomFill} stroke={vdomStroke} strokeWidth="1.5" />
      <text x="80" y="39" textAnchor="middle" fill={textColor} fontSize="9" fontWeight="600">Root</text>

      {/* Two Divs */}
      <line x1="80" y1="47" x2="50" y2="70" stroke={edgeStroke} strokeWidth="1.2" markerEnd="url(#arrow-old)" />
      <line x1="80" y1="47" x2="110" y2="70" stroke={edgeStroke} strokeWidth="1.2" markerEnd="url(#arrow-old)" />

      <rect x="25" y="70" width={boxW} height={boxH} rx={rx} fill={vdomFill} stroke={vdomStroke} strokeWidth="1.5" />
      <text x="50" y="84" textAnchor="middle" fill={textColor} fontSize="9" fontWeight="600">Div</text>

      <rect x="85" y="70" width={boxW} height={boxH} rx={rx} fill={vdomFill} stroke={vdomStroke} strokeWidth="1.5" />
      <text x="110" y="84" textAnchor="middle" fill={textColor} fontSize="9" fontWeight="600">Div</text>

      {/* Only Span under second Div */}
      <line x1="110" y1="92" x2="110" y2="115" stroke={edgeStroke} strokeWidth="1.2" markerEnd="url(#arrow-old)" />

      <rect x="85" y="115" width={boxW} height={boxH} rx={rx} fill={vdomFill} stroke={vdomStroke} strokeWidth="1.5" />
      <text x="110" y="129" textAnchor="middle" fill={textColor} fontSize="8" fontWeight="600">Span</text>

      <line x1="110" y1="137" x2="110" y2="155" stroke={edgeStroke} strokeWidth="1.2" markerEnd="url(#arrow-old)" />

      <rect x="85" y="155" width={boxW} height={boxH} rx={rx} fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
      <text x="110" y="169" textAnchor="middle" fill={textColor} fontSize="7">"World"</text>
    </svg>
  );
}

// Compact tree component - New Virtual DOM (with Text/Button added)
function NewVirtualDOMTree() {
  const boxW = 50;
  const boxH = 22;
  const rx = 4;

  return (
    <svg viewBox="0 0 190 180" className="w-full h-full" style={{ background: "white" }}>
      <defs>
        <marker id="arrow-new" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
          <path d="M0,0 L0,4 L5,2 z" fill={edgeStroke} />
        </marker>
      </defs>

      <text x="80" y="12" textAnchor="middle" fill={textColor} fontSize="11" fontWeight="700">
        New VDOM
      </text>

      {/* Root */}
      <rect x="65" y="25" width={boxW} height={boxH} rx={rx} fill={vdomFill} stroke={vdomStroke} strokeWidth="1.5" />
      <text x="80" y="39" textAnchor="middle" fill={textColor} fontSize="9" fontWeight="600">Root</text>

      {/* Two Divs */}
      <line x1="80" y1="47" x2="50" y2="70" stroke={edgeStroke} strokeWidth="1.2" markerEnd="url(#arrow-new)" />
      <line x1="80" y1="47" x2="110" y2="70" stroke={edgeStroke} strokeWidth="1.2" markerEnd="url(#arrow-new)" />

      <rect x="25" y="70" width={boxW} height={boxH} rx={rx} fill={vdomFill} stroke={vdomStroke} strokeWidth="1.5" />
      <text x="50" y="84" textAnchor="middle" fill={textColor} fontSize="9" fontWeight="600">Div</text>

      <rect x="85" y="70" width={boxW} height={boxH} rx={rx} fill={vdomFill} stroke={vdomStroke} strokeWidth="1.5" />
      <text x="110" y="84" textAnchor="middle" fill={textColor} fontSize="9" fontWeight="600">Div</text>

      {/* NEW: Text and Button under first Div (ORANGE) */}
      <line x1="50" y1="92" x2="30" y2="115" stroke={changedStroke} strokeWidth="1.5" markerEnd="url(#arrow-new)" />
      <line x1="50" y1="92" x2="75" y2="115" stroke={changedStroke} strokeWidth="1.5" markerEnd="url(#arrow-new)" />

      <rect x="5" y="115" width={boxW} height={boxH} rx={rx} fill={changedFill} stroke={changedStroke} strokeWidth="2" />
      <text x="30" y="129" textAnchor="middle" fill={textColor} fontSize="8" fontWeight="700">Text</text>

      <rect x="60" y="115" width={boxW} height={boxH} rx={rx} fill={changedFill} stroke={changedStroke} strokeWidth="2" />
      <text x="85" y="129" textAnchor="middle" fill={textColor} fontSize="8" fontWeight="700">Button</text>

      <line x1="30" y1="137" x2="30" y2="155" stroke={changedStroke} strokeWidth="1.2" markerEnd="url(#arrow-new)" />
      <line x1="85" y1="137" x2="85" y2="155" stroke={changedStroke} strokeWidth="1.2" markerEnd="url(#arrow-new)" />

      <rect x="5" y="155" width={boxW} height={boxH} rx={rx} fill="#fff7ed" stroke={changedStroke} strokeWidth="1.5" />
      <text x="30" y="169" textAnchor="middle" fill={textColor} fontSize="7">"Hello"</text>

      <rect x="60" y="155" width={boxW} height={boxH} rx={rx} fill="#fff7ed" stroke={changedStroke} strokeWidth="1.5" />
      <text x="85" y="169" textAnchor="middle" fill={textColor} fontSize="7">"Click"</text>

      {/* Span under second Div */}
      <line x1="110" y1="92" x2="130" y2="115" stroke={edgeStroke} strokeWidth="1.2" markerEnd="url(#arrow-new)" />

      <rect x="115" y="115" width={boxW} height={boxH} rx={rx} fill={vdomFill} stroke={vdomStroke} strokeWidth="1.5" />
      <text x="140" y="129" textAnchor="middle" fill={textColor} fontSize="8" fontWeight="600">Span</text>

      <line x1="140" y1="137" x2="140" y2="155" stroke={edgeStroke} strokeWidth="1.2" markerEnd="url(#arrow-new)" />

      <rect x="115" y="155" width={boxW} height={boxH} rx={rx} fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
      <text x="140" y="169" textAnchor="middle" fill={textColor} fontSize="7">"World"</text>
    </svg>
  );
}

// Compact tree component - Real DOM (will be synced with Text/Button)
function RealDOMTree() {
  const boxW = 50;
  const boxH = 22;
  const rx = 4;

  return (
    <svg viewBox="0 0 190 180" className="w-full h-full" style={{ background: "white" }}>
      <defs>
        <marker id="arrow-real" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
          <path d="M0,0 L0,4 L5,2 z" fill={edgeStroke} />
        </marker>
      </defs>

      <text x="80" y="12" textAnchor="middle" fill={textColor} fontSize="11" fontWeight="700">
        Real DOM
      </text>

      {/* Root */}
      <rect x="65" y="25" width={boxW} height={boxH} rx={rx} fill={rdomFill} stroke={rdomStroke} strokeWidth="1.5" />
      <text x="80" y="39" textAnchor="middle" fill={textColor} fontSize="9" fontWeight="600">Root</text>

      {/* Two Divs */}
      <line x1="80" y1="47" x2="50" y2="70" stroke={edgeStroke} strokeWidth="1.2" markerEnd="url(#arrow-real)" />
      <line x1="80" y1="47" x2="110" y2="70" stroke={edgeStroke} strokeWidth="1.2" markerEnd="url(#arrow-real)" />

      <rect x="25" y="70" width={boxW} height={boxH} rx={rx} fill={rdomFill} stroke={rdomStroke} strokeWidth="1.5" />
      <text x="50" y="84" textAnchor="middle" fill={textColor} fontSize="9" fontWeight="600">Div</text>

      <rect x="85" y="70" width={boxW} height={boxH} rx={rx} fill={rdomFill} stroke={rdomStroke} strokeWidth="1.5" />
      <text x="110" y="84" textAnchor="middle" fill={textColor} fontSize="9" fontWeight="600">Div</text>

      {/* SYNCED: Text and Button now in Real DOM (GREEN) */}
      <line x1="50" y1="92" x2="30" y2="115" stroke={rdomStroke} strokeWidth="1.5" markerEnd="url(#arrow-real)" />
      <line x1="50" y1="92" x2="75" y2="115" stroke={rdomStroke} strokeWidth="1.5" markerEnd="url(#arrow-real)" />

      <rect x="5" y="115" width={boxW} height={boxH} rx={rx} fill={rdomFill} stroke={rdomStroke} strokeWidth="2" />
      <text x="30" y="129" textAnchor="middle" fill={textColor} fontSize="8" fontWeight="700">Text</text>

      <rect x="60" y="115" width={boxW} height={boxH} rx={rx} fill={rdomFill} stroke={rdomStroke} strokeWidth="2" />
      <text x="85" y="129" textAnchor="middle" fill={textColor} fontSize="8" fontWeight="700">Button</text>

      <line x1="30" y1="137" x2="30" y2="155" stroke={rdomStroke} strokeWidth="1.2" markerEnd="url(#arrow-real)" />
      <line x1="85" y1="137" x2="85" y2="155" stroke={rdomStroke} strokeWidth="1.2" markerEnd="url(#arrow-real)" />

      <rect x="5" y="155" width={boxW} height={boxH} rx={rx} fill="#f0fdf4" stroke={rdomStroke} strokeWidth="1.5" />
      <text x="30" y="169" textAnchor="middle" fill={textColor} fontSize="7">"Hello"</text>

      <rect x="60" y="155" width={boxW} height={boxH} rx={rx} fill="#f0fdf4" stroke={rdomStroke} strokeWidth="1.5" />
      <text x="85" y="169" textAnchor="middle" fill={textColor} fontSize="7">"Click"</text>

      {/* Span under second Div */}
      <line x1="110" y1="92" x2="130" y2="115" stroke={edgeStroke} strokeWidth="1.2" markerEnd="url(#arrow-real)" />

      <rect x="115" y="115" width={boxW} height={boxH} rx={rx} fill={rdomFill} stroke={rdomStroke} strokeWidth="1.5" />
      <text x="140" y="129" textAnchor="middle" fill={textColor} fontSize="8" fontWeight="600">Span</text>

      <line x1="140" y1="137" x2="140" y2="155" stroke={edgeStroke} strokeWidth="1.2" markerEnd="url(#arrow-real)" />

      <rect x="115" y="155" width={boxW} height={boxH} rx={rx} fill="#f0fdf4" stroke={rdomStroke} strokeWidth="1" />
      <text x="140" y="169" textAnchor="middle" fill={textColor} fontSize="7">"World"</text>
    </svg>
  );
}

const VirtualDomComparison = () => {
  return (
    <Box padding="0.5rem 1.5rem">
      <Appear priority={2}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center", marginBottom: "1rem" }}>
          {/* Old Virtual DOM */}
          <div style={{
            width: "22%",
            height: "240px",
            border: `2px solid ${vdomStroke}`,
            borderRadius: 8,
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(96,165,250,0.15)",
            background: "white"
          }}>
            <OldVirtualDOMTree />
          </div>

          {/* Arrow: diff */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem" }}>
            <div style={{ fontSize: 32, color: leroyTheme.linkBlue }}>→</div>
            <div style={{
              background: leroyTheme.linkBlue,
              color: "white",
              padding: "4px 12px",
              borderRadius: 6,
              fontSize: 11,
              fontWeight: 600
            }}>
              diff
            </div>
          </div>

          {/* New Virtual DOM */}
          <div style={{
            width: "22%",
            height: "240px",
            border: `2px solid ${changedStroke}`,
            borderRadius: 8,
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(251,146,60,0.2)",
            background: "white"
          }}>
            <NewVirtualDOMTree />
          </div>

          {/* Arrow: compare & sync */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
            <div style={{
              background: leroyTheme.linkBlue,
              color: "white",
              padding: "6px 16px",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 700
            }}>
              REACT
            </div>
            <div style={{ fontSize: 28, color: "#FF5722", lineHeight: 0.8 }}>⇄</div>
            <div style={{
              background: "#22c55e",
              color: "white",
              padding: "4px 12px",
              borderRadius: 6,
              fontSize: 11,
              fontWeight: 600
            }}>
              sync
            </div>
          </div>

          {/* Real DOM */}
          <div style={{
            width: "22%",
            height: "240px",
            border: `2px solid ${rdomStroke}`,
            borderRadius: 8,
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(74,222,128,0.2)",
            background: "white"
          }}>
            <RealDOMTree />
          </div>
        </div>
      </Appear>

      <Appear priority={3}>
        <ul className="list-disc pl-6 text-left" style={{ fontSize: "0.9rem", color: leroyTheme.black, maxWidth: 1000, margin: "0 auto 0.75rem" }}>
          <li className="mb-2">
            <strong>Step 1:</strong> State changes → React creates a new Virtual DOM tree
          </li>
          <li className="mb-2">
            <strong>Step 2:</strong> React <strong style={{ color: leroyTheme.linkBlue }}>diffs</strong> old VDOM vs new VDOM to find changes (<span style={{ color: changedStroke, fontWeight: 700 }}>orange nodes</span>)
          </li>
          <li>
            <strong>Step 3:</strong> React <strong style={{ color: "#22c55e" }}>syncs</strong> only the changed nodes to the Real DOM - everything else stays untouched
          </li>
        </ul>
      </Appear>

      <Appear priority={4}>
        <div style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "0.75rem 1.25rem",
          background: "#eff6ff",
          border: `2px solid ${leroyTheme.linkBlue}`,
          borderRadius: 8,
          textAlign: "center"
        }}>
          <span style={{ fontSize: "1.1rem", fontWeight: 600, color: leroyTheme.linkBlue }}>
            👉 This comparison step is called <strong>Reconciliation</strong>
          </span>
        </div>
      </Appear>

      <Appear priority={5}>
        <div style={{
          maxWidth: 1000,
          margin: "0.5rem auto 0",
          fontSize: "0.75rem",
          color: leroyTheme.grey60,
          textAlign: "center"
        }}>
          <div style={{ marginBottom: "0.25rem" }}>
            <strong>Learn more:</strong>
          </div>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://legacy.reactjs.org/docs/reconciliation.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: leroyTheme.linkBlue, textDecoration: "none", borderBottom: `1px solid ${leroyTheme.linkBlue}` }}
            >
              React Reconciliation
            </a>
            <a
              href="https://react.dev/reference/rules/react-calls-components-and-hooks#never-call-component-functions-directly"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: leroyTheme.linkBlue, textDecoration: "none", borderBottom: `1px solid ${leroyTheme.linkBlue}` }}
            >
              React Component Rules
            </a>
          </div>
        </div>
      </Appear>
    </Box>
  );
};

export default VirtualDomComparison;
