import { ConversionMode } from "../types/excel";

type Props = {
  mode: ConversionMode;
  onChange: (mode: ConversionMode) => void;
};

export default function ModeSwitch({ mode, onChange }: Props) {
  const isJson = mode === "EXCEL_TO_JSON";

  return (
    <div className="flex items-center justify-center mb-6">
      <div className="flex bg-slate-800 rounded-lg p-1">
        <button
          onClick={() => onChange("EXCEL_TO_JSON")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition ${
            isJson
              ? "bg-indigo-600 text-white"
              : "text-slate-400 hover:text-white"
          }`}
        >
          Excel → JSON
        </button>
        <button
          onClick={() => onChange("JSON_TO_EXCEL")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition ${
            !isJson
              ? "bg-indigo-600 text-white"
              : "text-slate-400 hover:text-white"
          }`}
        >
          JSON → XLS
        </button>
      </div>
    </div>
  );
}
