import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export function useDownloadPDF() {
    const downloadPDF = async (cvRef) => {
        if (!cvRef?.current) return;

        const canvas = await html2canvas(cvRef.current, { scale: 4 });
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth()*.6;
        const pdfHeight = pdf.internal.pageSize.getHeight()*.6;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("CV.pdf");
    };

    return downloadPDF;
}