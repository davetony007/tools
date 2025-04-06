import { notFound } from "next/navigation";
import Link from "next/link";
import {
  TextCaseConverter,
  UrlEncoderDecoder,
  ColorConverter,
  JsonFormatterValidator,
  PasswordGenerator,
} from "../../../components/ToolComponents";

const toolMap: Record<
  string,
  { component: React.FC; title: string; description: string }
> = {
  "text-case-converter": {
    component: TextCaseConverter,
    title: "Text Case Converter",
    description: "Convert text to uppercase, lowercase, title case, sentence case, or camelCase.",
  },
  "url-encoder-decoder": {
    component: UrlEncoderDecoder,
    title: "URL Encoder/Decoder",
    description: "Encode or decode URLs for safe web usage.",
  },
  "color-converter": {
    component: ColorConverter,
    title: "Color Converter",
    description: "Convert between HEX, RGB, HSL, and generate color palettes.",
  },
  "json-formatter-validator": {
    component: JsonFormatterValidator,
    title: "JSON Formatter/Validator",
    description: "Format and validate JSON data.",
  },
  "password-generator": {
    component: PasswordGenerator,
    title: "Password Generator",
    description: "Create secure, customizable passwords.",
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function ToolPage(props: any) {
  const { params } = props;
  const tool = toolMap[params.toolSlug];
  if (!tool) return notFound();

  const ToolComponent = tool.component;

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow">
        <div className="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">My Tool Hub</Link>
        </div>
      </header>
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">{tool.title}</h1>
        <p className="mb-8 text-gray-600">{tool.description}</p>
        <div className="bg-white p-6 rounded-lg shadow space-y-6">
          <ToolComponent />
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
