import Rich from "./Rich";
export default function Lines({ lines }: { lines: string[] }) {
  return <>{lines.map((l, i) => <span key={i} className="block"><Rich text={l} /></span>)}</>;
}
