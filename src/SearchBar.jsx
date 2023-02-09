//just for testing, not in use.
import { useState } from "react";
import { services } from "./data";

export default function SearchBar() {
  const [suggestion, setSuggestion] = useState(services);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const InputOnChange = (e) => {
    const value = e.target.value;
    if (value.length < 1) {
      setSuggestion(services);
    }
    const result = services.filter(
      (s) => s.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
    console.log(result);
    setSuggestion(result);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <input
        type="text"
        onChange={(e) => InputOnChange(e)}
        onFocus={() => setShowSuggestion(true)}
      />
      {showSuggestion && (
        <ul>
          {suggestion.map((s, i) => (
            <li key={i}>{s.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
