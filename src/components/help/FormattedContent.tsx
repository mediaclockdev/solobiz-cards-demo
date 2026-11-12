import React from 'react';

interface FormattedContentProps {
  content: string;
  className?: string;
}

/**
 * Parses inline formatting:
 * - **bold text** -> <strong className="font-bold text-foreground">bold text</strong>
 * - `code text` -> <code className="px-1 py-0.5 rounded bg-muted text-primary font-mono text-[11px]">code text</code>
 * - [link text](url) -> <a href="url">link text</a>
 */
export function formatInlineText(text: string): React.ReactNode[] {
  if (!text) return [];

  // Match bold (**...**), inline code (`...`), or markdown links ([...](...))
  const tokenRegex = /(\*\*[^*]+?\*\*|`[^`]+?`|\[[^\]]+?\]\([^)]+?\))/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, index) => {
    if (!part) return null;

    // Check bold **text**
    if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
      const boldText = part.slice(2, -2);
      return (
        <strong key={index} className="font-bold text-foreground">
          {boldText}
        </strong>
      );
    }

    // Check inline code `text`
    if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
      const codeText = part.slice(1, -1);
      return (
        <code 
          key={index} 
          className="px-1.5 py-0.5 rounded bg-muted text-primary font-mono text-[11px] font-medium"
        >
          {codeText}
        </code>
      );
    }

    // Check link [text](url)
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      return (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-semibold"
        >
          {label}
        </a>
      );
    }

    // Regular plain text
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

/**
 * FormattedContent component renders multi-line content with:
 * - Headings (### and ##)
 * - Numbered lists (1. 2. 3.)
 * - Bullet lists (- or *)
 * - Paragraphs with bold, code, and links
 */
export function FormattedContent({ content, className = '' }: FormattedContentProps) {
  if (!content) return null;

  const lines = content.trim().split('\n');

  return (
    <div className={`space-y-2 text-xs text-foreground/90 leading-relaxed ${className}`}>
      {lines.map((rawLine, idx) => {
        const line = rawLine.trim();

        // Empty line
        if (!line) {
          return <div key={idx} className="h-1.5" />;
        }

        // Heading 3 (###)
        if (line.startsWith('### ')) {
          const headingText = line.slice(4).trim();
          return (
            <h4 key={idx} className="text-xs sm:text-sm font-bold text-foreground pt-2 pb-0.5">
              {formatInlineText(headingText)}
            </h4>
          );
        }

        // Heading 2 (##)
        if (line.startsWith('## ')) {
          const headingText = line.slice(3).trim();
          return (
            <h3 key={idx} className="text-sm font-bold text-foreground pt-2.5 pb-0.5">
              {formatInlineText(headingText)}
            </h3>
          );
        }

        // Numbered list item: e.g. "1. **Title:** text"
        const numberedMatch = line.match(/^(\d+)\.\s+(.*)$/);
        if (numberedMatch) {
          const [, num, itemContent] = numberedMatch;
          return (
            <div key={idx} className="flex items-start gap-2 pl-0.5">
              <span className="font-bold text-primary text-[11px] shrink-0 mt-0.5">
                {num}.
              </span>
              <div className="flex-1 leading-relaxed">
                {formatInlineText(itemContent)}
              </div>
            </div>
          );
        }

        // Bullet list item: e.g. "- **Title:** text"
        if (line.startsWith('- ') || line.startsWith('* ')) {
          const itemContent = line.slice(2).trim();
          return (
            <div key={idx} className="flex items-start gap-2 pl-1">
              <span className="text-primary text-[10px] shrink-0 mt-1 select-none">
                •
              </span>
              <div className="flex-1 leading-relaxed">
                {formatInlineText(itemContent)}
              </div>
            </div>
          );
        }

        // Regular paragraph line
        return (
          <p key={idx} className="leading-relaxed">
            {formatInlineText(line)}
          </p>
        );
      })}
    </div>
  );
}
