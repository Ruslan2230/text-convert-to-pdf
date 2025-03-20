import React from "react";

const Textarea = React.memo(({ value, onChange }) => {
  return (
    <textarea
      id="text-input"
      className="border p-2 w-full max-w-md mb-4"
      rows="4"
      placeholder="Введіть текст..."
      value={value}
      onChange={onChange}
    />
  );
});

export default Textarea;
