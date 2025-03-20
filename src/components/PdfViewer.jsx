import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "pdfjs-dist/build/pdf.worker.entry";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PdfViewer = ({ pdfUrl }) => {
  if (!pdfUrl) return null;

  return (
    <div className="w-full max-w-2xl mt-6 border p-2">
      <h2 className="text-lg font-bold mb-2">Перегляд PDF</h2>
      <Worker workerUrl="/node_modules/pdfjs-dist/build/pdf.worker.min.js">
        <Viewer
          className="w-full max-w-lg"
          fileUrl={pdfUrl}
          onError={(error) => console.error("PDF Viewer Error:", error)}
        />
      </Worker>
    </div>
  );
};

export default PdfViewer;
