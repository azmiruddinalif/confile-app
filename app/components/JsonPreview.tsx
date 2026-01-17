import { JsonData } from "../types/excel";

type Props = {
  data: JsonData;
};

export default function JsonPreview({ data }: Props) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/50 border-b border-slate-800">
        <span className="text-sm font-medium text-slate-300">JSON Preview</span>
      </div>
      <pre className="p-4 overflow-auto text-sm text-slate-300 font-mono max-h-96 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
