import { BrowserRouter, Routes, Route } from "react-router-dom";

import { OneWeb } from "./presentations/one-web";
import { MainGate } from "./presentations/main-gate";
import WebComponents from "./presentations/web-components";
import UniversalDesign from "./presentations/universal-design";
import DesignEchoSystem from "./presentations/design-echo-system";
import UniversalDesignChecklist from "./presentations/uu-checklist";
import NordicDesignSystem from "./presentations/nordic-design-system";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainGate />} />
        <Route path="/web-components" element={<WebComponents />} />
        <Route
          path="/design-system-echosystem"
          element={<DesignEchoSystem />}
        />
        <Route path="/nordic-design-system" element={<NordicDesignSystem />} />
        <Route path="/universal-design" element={<UniversalDesign />} />
        <Route
          path="/universal-design-checklist"
          element={<UniversalDesignChecklist />}
        />
        <Route path="/one-portal-web-architecture" element={<OneWeb />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
