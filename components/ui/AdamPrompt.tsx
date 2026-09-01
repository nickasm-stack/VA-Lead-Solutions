import { Fragment } from "react";

/**
 * Renders copy, highlighting any [bracketed question] in red and prefixing it
 * with ADAM: so open questions are obvious when the site is sent over for
 * review.
 *
 * TEMPORARY, but self-clearing: it keys off the brackets themselves, so as
 * each question is answered its highlight disappears. Once every question is
 * answered this renders plain text and can be swapped back for {text} at
 * leisure.
 */
export default function AdamPrompt({ children }: { children: string }) {
  const parts: React.ReactNode[] = [];
  let cursor = 0;

  for (const match of children.matchAll(/\[([^\]]+)\]/g)) {
    const at = match.index ?? 0;
    if (at > cursor) parts.push(children.slice(cursor, at));
    parts.push(
      <span key={at} className="pending">
        <span className="pending__tag">ADAM:</span> {match[1]}
      </span>,
    );
    cursor = at + match[0].length;
  }
  if (cursor < children.length) parts.push(children.slice(cursor));

  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>{part}</Fragment>
      ))}
    </>
  );
}
