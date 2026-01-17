type Props = {
  onFileSelect: (file: File) => void;
};

export default function FileUploader({ onFileSelect }: Props) {
  return (
    <div className="relative">
      <input
        type="file"
        accept=".xlsx"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onFileSelect(file);
        }}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        id="file-upload"
      />
      <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-slate-700 rounded-xl hover:border-indigo-500 hover:bg-slate-800/50 transition-all cursor-pointer group"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <p className="mb-2 text-sm text-slate-300 group-hover:text-indigo-300 transition-colors">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-slate-500">Excel files (.xlsx) only</p>
        </div>
      </label>
    </div>
  );
}
