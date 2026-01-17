"use client";
import { useState } from "react";
import { JsonData } from "../types/excel";
import { excelToJson } from "../services/excelService";

export function useExcelToJson() {
  const [data, setData] = useState<JsonData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const convert = async (file: File) => {
    setLoading(true);
    setError(null);

    try {
      const json = await excelToJson(file);
      setData(json);
    } catch {
      setError("Failed to convert file");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, convert };
}
