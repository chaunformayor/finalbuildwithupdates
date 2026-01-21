export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-soft">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-sm text-zinc-600">{label}</div>
    </div>
  );
}
