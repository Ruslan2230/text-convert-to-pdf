import React, { useState, useContext, useCallback } from "react";
import { PdfContext } from "./context/PdfContext";
import { convertTextToPdf } from "./services/pdfService";
import Textarea from "./components/Textarea";
import Button from "./components/Button";
import PdfViewer from "./components/PdfViewer";
import HistoryList from "./components/HistoryList";

const App = () => {
  const [text, setText] = useState("");
  const { pdfUrl, setPdfUrl, addToHistory } = useContext(PdfContext);

  const handleConvert = useCallback(async () => {
    if (!text.trim()) return alert("Введіть текст для конвертації!");

    try {
      const fileUrl = await convertTextToPdf(text);
      setPdfUrl(fileUrl);
      addToHistory(text, fileUrl);
    } catch (error) {
      alert(error.message);
    }
  }, [text, setPdfUrl, addToHistory]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Конвертація тексту в PDF</h1>
      <Textarea value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={handleConvert}>Convert to PDF</Button>
      <PdfViewer pdfUrl={pdfUrl} />
      <HistoryList />
    </div>
  );
};

export default App;
