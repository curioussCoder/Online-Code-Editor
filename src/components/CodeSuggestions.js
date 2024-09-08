// CodeSuggestions.js
import React from 'react';

const CodeSuggestions = ({ suggestions }) => {
  return (
    <ul>
      {suggestions.map((suggestion, index) => (
        <li key={index}>{suggestion}</li>
      ))}
    </ul>
  );
};

export default CodeSuggestions;
