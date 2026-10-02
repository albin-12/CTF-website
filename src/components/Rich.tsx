// Turns {Word} into a green word.
export default function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\{[^}]+\})/g).map((p, i) =>
        p.startsWith("{") ? <span key={i} className="text-[var(--accent)]">{p.slice(1, -1)}</span> : <span key={i}>{p}</span>
      )}
    </>
  );
}
