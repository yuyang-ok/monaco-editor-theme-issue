import { useEffect, useState } from "react";
import * as monaco from "monaco-editor";
import { Editor } from "@monaco-editor/react";
monaco.editor.defineTheme("myCustomTheme", {
  base: "vs-dark",
  inherit: true,
  rules: [
    { token: "comment", foreground: "FFA500" },
    { token: "keyword", foreground: "00FF00" },
  ],
  colors: {
    "editor.foreground": "#ffffff",
    "editor.background": "#ff0000",
  },
});
monaco.editor.setTheme("vs");
const code = ` 
// this is javascirpt code 
const a = 1;
`;

function App() {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!container) {
      return;
    }
    monaco.editor.create(container, {
      value: code,
      language: "javascript",
      theme: "myCustomTheme", // 设置主题
    });
  }, [container]);
  return (
    <div>
      <div
        id="container"
        style={{ height: "300px", border: "12px solid green" }}
        ref={setContainer}
      ></div>
      <h1
        style={{ textAlign: "center", backgroundColor: "blue", color: "white" }}
      >
        I am divider
      </h1>
      <div style={{ height: "300px", border: "12px solid green" }}>
        <Editor
          value={code}
          theme="myCustomTheme"
          language="javascript"
        ></Editor>
      </div>
    </div>
  );
}

export default App;
