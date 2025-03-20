import React, { createContext, useState, useEffect, useCallback } from "react";

export const PdfContext = createContext();

export const PdfProvider = ({ children }) => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem("pdfHistory")) || []);
  }, []);

  const addToHistory = useCallback((text, url) => {
    setHistory((prev) => {
      const newHistory = [{ text, url }, ...prev];
      localStorage.setItem("pdfHistory", JSON.stringify(newHistory));
      return newHistory;
    });
  }, []);

  return (
    <PdfContext.Provider value={{ pdfUrl, setPdfUrl, history, addToHistory }}>
      {children}
    </PdfContext.Provider>
  );
};
