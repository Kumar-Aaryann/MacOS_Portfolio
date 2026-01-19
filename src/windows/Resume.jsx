
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components/index";
import { Download } from "lucide-react";
import { pdfjs, Document, Page } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = ({ focusWindow }) => {
  return (
      <>
      <div
        id="window-header"
        className="flex justify-between items-center px-3 py-2 bg-gray-200 cursor-move"
        onClick={focusWindow}
        >
        <WindowControls target="resume" />
        <h2 className="text-lg font-bold">Resume.pdf</h2>
        <a
          href="files/Resume.pdf"
          download
          className="cursor-pointer"
          title="Download resume"
          >
          <Download className="icon" />
        </a>
        {/* <button
          onClick={closeWindow}
          className="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
          >
          ✕
          </button> */}
      </div>

      <Document file="files/Resume.pdf">
        <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
      </Document>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;





//ignore this set of code 
// import WindowWrapper from "#hoc/WindowWrapper";
// import { WindowControls } from "#components/index";

// const Resume = () => {
//   return (
//     <>
//       <div id="window-header">
//         <WindowControls target="Resume" />
//       </div>
//     </>
//   );
// };

// const ResumeWindow = WindowWrapper(Resume, "Resume");
// export default ResumeWindow;