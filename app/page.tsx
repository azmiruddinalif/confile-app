"use client";

import { useState } from "react";
import FileUploader from "./components/FileUploader";
import JsonUploader from "./components/JsonUploader";
import JsonPreview from "./components/JsonPreview";
import DownloadButton from "./components/DownloadButton";
import ModeSwitch from "./components/ModeSwitch";
import { useExcelToJson } from "./hooks/useExcelToJson";
import { ConversionMode } from "./types/excel";

export default function Home() {
  const [mode, setMode] = useState<ConversionMode>("EXCEL_TO_JSON");
  const [jsonData, setJsonData] = useState<unknown[] | null>(null);

  const { data, loading, error, convert } = useExcelToJson();

  const activeData = mode === "EXCEL_TO_JSON" ? data : jsonData;

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight">
            Excel ⇄ JSON Converter
          </h1>
          <p className="text-slate-400 mt-2">Convert data instantly.</p>
        </header>

        <section className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-8">
          <ModeSwitch mode={mode} onChange={setMode} />

          {mode === "EXCEL_TO_JSON" ? (
            <FileUploader onFileSelect={convert} />
          ) : (
            <JsonUploader onSubmit={setJsonData} />
          )}

          {loading && (
            <p className="text-sm text-indigo-400 mt-4">
              Converting your file...
            </p>
          )}

          {error && <p className="text-sm text-red-400 mt-4">{error}</p>}

          {activeData && (
            <div className="mt-6 space-y-4">
              {mode === "EXCEL_TO_JSON" && (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                <JsonPreview data={activeData as any[]} />
              )}
              <DownloadButton data={activeData} mode={mode} />
            </div>
          )}
        </section>

        <footer className="text-center text-xs text-slate-500 mt-6">
          Your files never leave your browser.
        </footer>
      </div>
    </main>
  );
}
