import React, { useState } from "react";
import './styles.css';

function ChipsInput() {
  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setChips([...chips, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDelete = (indexToDelete) => {
    setChips(chips.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press Enter"
        style={{ padding: "8px", width: "200px" }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {chips.map((chip, index) => (
          <div key={index} style={{ background: "#e0e0e0", padding: "5px 10px", borderRadius: "20px", display: "flex", alignItems: "center" }}>
            <span>{chip}</span>
            <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: "8px", background: "transparent", border: "none", cursor: "pointer", fontWeight: "bold" }}
              aria-label={`Remove ${chip}`}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
