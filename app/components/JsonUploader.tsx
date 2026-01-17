type Props = {
  onSubmit: (data: unknown[]) => void;
};

export default function JsonUploader({ onSubmit }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    try {
      const parsed = JSON.parse(e.target.value);
      if (Array.isArray(parsed)) {
        onSubmit(parsed);
      }
    } catch {}
  };

  return (
    <textarea
      className="w-full h-48 bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm font-mono text-slate-300 focus:outline-none focus:border-indigo-500"
      placeholder="Paste JSON array here..."
      onChange={handleChange}
    />
  );
}
