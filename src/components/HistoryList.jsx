import React, { useContext, useMemo } from "react";
import { PdfContext } from "../context/PdfContext";

const HistoryList = React.memo(() => {
  const { history, setPdfUrl } = useContext(PdfContext);

  const historyItems = useMemo(
    () =>
      history.map((item) => (
        <li
          key={item.url}
          className="border-b p-2 cursor-pointer hover:bg-gray-200"
          onClick={() => setPdfUrl(item.url)}
        >
          {item.text}
        </li>
      )),
    [history, setPdfUrl]
  );

  return (
    <div className="w-full max-w-md mt-6">
      <h2 className="text-lg font-bold mb-2 text-blue-500">
        Історія конвертацій
      </h2>
      <ul className="border p-2 bg-white">
        {history.length === 0 ? (
          <p className="text-gray-500">Немає історії</p>
        ) : (
          historyItems
        )}
      </ul>
    </div>
  );
});

export default HistoryList;
