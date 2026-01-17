import { downloadJson } from "../utils/fileUtils";
import { jsonToExcel } from "../services/jsonService";
import { ConversionMode } from "../types/excel";

type Props = {
  data: unknown;
  mode: ConversionMode;
};

export default function DownloadButton({ data, mode }: Props) {
  const handleClick = () => {
    if (mode === "EXCEL_TO_JSON") {
      downloadJson(data);
    } else {
      jsonToExcel(data as unknown[]);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-lg shadow-indigo-900/50 hover:shadow-indigo-800/50 active:scale-95"
    >
      {mode === "EXCEL_TO_JSON" ? "Download JSON" : "Download XLS"}
    </button>
  );
}
