"use client"
import React, { useState } from "react";
import { FiClipboard } from "react-icons/fi";

const EmbedCodeGenerator: React.FC = () => {
  const [code, setCode] = useState<string>(""); // State for input code
  const [embedCode, setEmbedCode] = useState<string>(""); // State for generated embed code

  const handleGenerateEmbedCode = () => {
    if (!code.trim()) {
      alert("Please enter some code before generating embed code.");
      return;
    }

    // Escape special HTML characters
    const escapedCode = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

    // Generate the embeddable HTML snippet
    const embedSnippet = `<pre style="background-color: #1e1e1e; color: #f8f8f2; padding: 10px; border-radius: 5px;"><code class="language-html">\n${escapedCode}\n</code></pre>`;
    setEmbedCode(embedSnippet);
  };

  const handleCopy = () => {
    if (embedCode) {
      navigator.clipboard.writeText(embedCode);
      alert("Embed code copied to clipboard!");
    }
  };

  return (
    <div className="max-w-3xl pt-32  pb-20 mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-white">Code to Embed</h1>
      <textarea
        placeholder="Write your HTML, CSS, or JS code here..."
        value={code}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setCode(e.target.value)
        }
        className="w-full h-48 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4 font-mono text-sm"
      ></textarea>
      <button
        onClick={handleGenerateEmbedCode}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Generate Embed Code
      </button>
      {embedCode && (
        <div className="relative mt-6">
          <h2 className="text-xl font-semibold mb-2 text-white">Generated Embed Code</h2>
          <textarea
            readOnly
            value={embedCode}
            className="w-full h-48 p-4 border border-gray-300 rounded-md font-mono text-sm"
          ></textarea>
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
          >
            <FiClipboard className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default EmbedCodeGenerator;
