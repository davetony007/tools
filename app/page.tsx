import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow">
        <div className="max-w-5xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-extrabold mb-4">My Tool Hub</h1>
          <p className="text-lg">A collection of free, easy-to-use online tools</p>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Our Tools</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <Link href="/tools/text-case-converter" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg border hover:border-purple-500 transition transform hover:-translate-y-1">
            <div className="text-3xl mb-2">🔠</div>
            <h3 className="text-lg font-semibold mb-2 text-blue-600">Text Case Converter</h3>
            <p className="text-sm">Convert text to uppercase, lowercase, title case, sentence case, or camelCase.</p>
          </Link>
          <Link href="/tools/url-encoder-decoder" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg border hover:border-purple-500 transition transform hover:-translate-y-1">
            <div className="text-3xl mb-2">🔗</div>
            <h3 className="text-lg font-semibold mb-2 text-blue-600">URL Encoder/Decoder</h3>
            <p className="text-sm">Encode or decode URLs for safe web usage.</p>
          </Link>
          <Link href="/tools/color-converter" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg border hover:border-purple-500 transition transform hover:-translate-y-1">
            <div className="text-3xl mb-2">🎨</div>
            <h3 className="text-lg font-semibold mb-2 text-blue-600">Color Converter</h3>
            <p className="text-sm">Convert between HEX, RGB, HSL, and generate color palettes.</p>
          </Link>
          <Link href="/tools/json-formatter-validator" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg border hover:border-purple-500 transition transform hover:-translate-y-1">
            <div className="text-3xl mb-2">🧾</div>
            <h3 className="text-lg font-semibold mb-2 text-blue-600">JSON Formatter/Validator</h3>
            <p className="text-sm">Format and validate JSON data.</p>
          </Link>
          <Link href="/tools/password-generator" className="block p-6 bg-white rounded-xl shadow hover:shadow-lg border hover:border-purple-500 transition transform hover:-translate-y-1">
            <div className="text-3xl mb-2">🔒</div>
            <h3 className="text-lg font-semibold mb-2 text-blue-600">Password Generator</h3>
            <p className="text-sm">Create secure, customizable passwords.</p>
          </Link>
        </div>
      </section>
      <footer className="bg-white border-t mt-12">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} My Tool Hub. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
