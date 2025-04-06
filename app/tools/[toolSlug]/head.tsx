export default function Head({ params }: { params: { toolSlug: string } }) {
  const toolMeta: Record<
    string,
    { title: string; description: string }
  > = {
    "text-case-converter": {
      title: "Text Case Converter - My Tool Hub",
      description: "Convert text to uppercase, lowercase, title case, sentence case, or camelCase.",
    },
    "url-encoder-decoder": {
      title: "URL Encoder/Decoder - My Tool Hub",
      description: "Encode or decode URLs for safe web usage.",
    },
    "color-converter": {
      title: "Color Converter - My Tool Hub",
      description: "Convert between HEX, RGB, HSL, and generate color palettes.",
    },
    "json-formatter-validator": {
      title: "JSON Formatter/Validator - My Tool Hub",
      description: "Format and validate JSON data.",
    },
    "password-generator": {
      title: "Password Generator - My Tool Hub",
      description: "Create secure, customizable passwords.",
    },
  };

  const meta = toolMeta[params.toolSlug] || {
    title: "Tool - My Tool Hub",
    description: "Online tool.",
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: meta.title,
    description: meta.description,
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </>
  );
}
