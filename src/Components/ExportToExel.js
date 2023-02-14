import * as XLSX from "xlsx";
import * as FileSaver from "file-saver";


export default function ExportToExcel  ({ apiData, fileName })  {
    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const exportToCSV = (apiData, fileName) => {
        //const ws1 = XLSX.utils.json_to_sheet(apiData.person);
        const ws2 = XLSX.utils.json_to_sheet(apiData.arrChild);
        //const wb1 = { Sheets: { data: ws1 }, SheetNames: ["data"] };
        const wb2 = { Sheets: { data: ws2 }, SheetNames: ["data"] };
       // const excelBuffer1 = XLSX.write(wb1, { bookType: "xlsx", type: "array" });
        const excelBuffer2 = XLSX.write(wb2, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer2], { type: fileType });
       FileSaver.saveAs(data, fileName + fileExtension);
    };

    return (
        <button onClick={(e) => exportToCSV(apiData, fileName)}>Export</button>
    );



}