"use client";

import { useState } from "react";

export function TextCaseConverter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const convertToUpper = () => setOutput(input.toUpperCase());
  const convertToLower = () => setOutput(input.toLowerCase());
  const convertToTitle = () =>
    setOutput(
      input.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase())
    );
  const convertToSentence = () =>
    setOutput(input.charAt(0).toUpperCase() + input.slice(1).toLowerCase());
  const convertToCamel = () =>
    setOutput(
      input
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
    );

  return (
    <div className="space-y-4">
      <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter text here" className="w-full p-2 border rounded" />
      <div className="space-x-2">
        <button onClick={convertToUpper} className="px-4 py-2 bg-blue-600 text-white rounded">Uppercase</button>
        <button onClick={convertToLower} className="px-4 py-2 bg-blue-600 text-white rounded">Lowercase</button>
        <button onClick={convertToTitle} className="px-4 py-2 bg-blue-600 text-white rounded">Title Case</button>
        <button onClick={convertToSentence} className="px-4 py-2 bg-blue-600 text-white rounded">Sentence case</button>
        <button onClick={convertToCamel} className="px-4 py-2 bg-blue-600 text-white rounded">camelCase</button>
      </div>
      <textarea value={output} readOnly placeholder="Output here" className="w-full p-2 border rounded" />
    </div>
  );
}

export function UrlEncoderDecoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encode = () => setOutput(encodeURIComponent(input));
  const decode = () => {
    try {
      setOutput(decodeURIComponent(input));
    } catch {
      setOutput("Invalid encoded URL");
    }
  };

  return (
    <div className="space-y-4">
      <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter URL or text" className="w-full p-2 border rounded" />
      <div className="space-x-2">
        <button onClick={encode} className="px-4 py-2 bg-blue-600 text-white rounded">Encode</button>
        <button onClick={decode} className="px-4 py-2 bg-blue-600 text-white rounded">Decode</button>
      </div>
      <textarea value={output} readOnly placeholder="Output here" className="w-full p-2 border rounded" />
    </div>
  );
}

export function ColorConverter() {
  const [hex, setHex] = useState("#000000");
  const [rgb, setRgb] = useState("rgb(0, 0, 0)");
  const [hsl, setHsl] = useState("hsl(0, 0%, 0%)");

  const hexToRgbHsl = (hexValue: string) => {
    let hexClean = hexValue.replace("#", "");
    if (hexClean.length === 3) {
      hexClean = hexClean.split("").map(c => c + c).join("");
    }
    const bigint = parseInt(hexClean, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    setRgb(`rgb(${r}, ${g}, ${b})`);

    const rNorm = r / 255, gNorm = g / 255, bNorm = b / 255;
    const max = Math.max(rNorm, gNorm, bNorm), min = Math.min(rNorm, gNorm, bNorm);
    let h = 0, s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case rNorm: h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0); break;
        case gNorm: h = (bNorm - rNorm) / d + 2; break;
        case bNorm: h = (rNorm - gNorm) / d + 4; break;
      }
      h /= 6;
    }
    setHsl(`hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`);
  };

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHex(value);
    if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(value)) {
      hexToRgbHsl(value);
    }
  };

  return (
    <div className="space-y-4">
      <input value={hex} onChange={handleHexChange} placeholder="#000000" className="w-full p-2 border rounded" />
      <div className="flex space-x-4">
        <div>
          <div className="font-semibold">RGB:</div>
          <div>{rgb}</div>
        </div>
        <div>
          <div className="font-semibold">HSL:</div>
          <div>{hsl}</div>
        </div>
        <div className="w-12 h-12 border rounded" style={{ backgroundColor: hex }}></div>
      </div>
    </div>
  );
}

export function JsonFormatterValidator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const formatJson = () => {
    try {
      const obj = JSON.parse(input);
      setOutput(JSON.stringify(obj, null, 2));
    } catch {
      setOutput("Invalid JSON");
    }
  };

  return (
    <div className="space-y-4">
      <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter JSON here" className="w-full p-2 border rounded" />
      <button onClick={formatJson} className="px-4 py-2 bg-blue-600 text-white rounded">Format & Validate</button>
      <textarea value={output} readOnly placeholder="Formatted JSON or error" className="w-full p-2 border rounded" rows={10} />
    </div>
  );
}

export function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let chars = lower + upper;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    let pwd = "";
    for (let i = 0; i < length; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pwd);
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-4 items-center">
        <label>
          Length:
          <input type="number" value={length} onChange={(e) => setLength(Number(e.target.value))} min={4} max={64} className="ml-2 p-1 border rounded w-16" />
        </label>
        <label>
          <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} className="mr-1" />
          Numbers
        </label>
        <label>
          <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} className="mr-1" />
          Symbols
        </label>
        <button onClick={generatePassword} className="px-4 py-2 bg-blue-600 text-white rounded">Generate</button>
      </div>
      <textarea value={password} readOnly placeholder="Generated password" className="w-full p-2 border rounded" />
    </div>
  );
}
