import * as XLSX from "xlsx";
import { JsonData } from "../types/excel";

export function excelToJson(file: File): Promise<JsonData> {
  return new Promise(async (resolve, reject) => {
    try {
      const buffer = await file.arrayBuffer();
      const workbook = XLSX.read(buffer);
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(sheet);
      resolve(json as JsonData);
    } catch (error) {
      reject(error);
    }
  });
}
