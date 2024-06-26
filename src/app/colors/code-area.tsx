import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import React from "react";
import { copyToClipboard } from "./utils";

type TCodeArea = {
  code: string;
};

const CodeArea: React.FC<TCodeArea> = ({ code }) => {
  return (
    <div className="w-full bg-foreground rounded-md">
      <pre className="w-full relative p-6">
        <div className="absolute top-0 right-0 p-6">
          <button
            className="text-xs text-muted-foreground"
            onClick={() => copyToClipboard(code)}
          >
            <ClipboardDocumentIcon className="w-6 h-6" />
          </button>
        </div>
        <code className="text-background w-full text-sm cursor-text">
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeArea;
