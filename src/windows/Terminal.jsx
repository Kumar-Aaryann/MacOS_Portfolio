import WindowWrapper from "#hoc/WindowWrapper";
import { techStack } from "#constants";
import { Check, Flag } from "lucide-react";
import WindowControls from "#components/WindowControls";

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target = "terminal" />
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@Aryan % </span>
          show tech stack
        </p>
        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>

        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-center">
              <Check className="check" size={20} />
              <h3>{category}</h3>
              <ul>
                {items.map((item, i) => (
                  <li key={i}>{item} {i < items.length - 1 ? "," : ""}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="footnote">
            <p>
                <Check size={20} /> 5 of 5 stacks loaded sucessfully.
                (100% Complete)
            </p>
            <p className="text-black">
                <Flag size={15} fill="black"/>
                Render time: 0.0234s
            </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;









// Additional Code if close bitton doesnt work:
// import WindowWrapper from "#hoc/WindowWrapper";
// import { techStack } from "#constants";
// import { Check, Flag } from "lucide-react";

// const Terminal = ({ closeWindow, focusWindow }) => {
//   return (
//     <>
//       {/* Window header with title + close button */}
//       <div
//         id="window-header"
//         className="flex justify-between items-center px-3 py-2 bg-gray-200 cursor-move"
//         onClick={focusWindow}
//       >
//         <div>
//           <p className="text-sm">Window Control</p>
//           <h2 className="text-lg font-bold">Tech Stack</h2>
//         </div>
//         <button
//           onClick={closeWindow}
//           className="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
//         >
//           ✕
//         </button>
//       </div>

//       {/* Window body */}
//       <div className="techstack p-4">
//         <p>
//           <span className="font-bold">@Aryan % </span>
//           show tech stack
//         </p>

//         <div className="label flex gap-4 mt-2">
//           <p className="w-32 font-semibold">Category</p>
//           <p className="font-semibold">Technologies</p>
//         </div>

//         <ul className="content mt-2 space-y-2">
//           {techStack.map(({ category, items }) => (
//             <li key={category} className="flex items-center gap-2">
//               <Check className="check text-green-600" size={20} />
//               <h3 className="font-medium">{category}:</h3>
//               <ul className="flex flex-wrap gap-1">
//                 {items.map((item, i) => (
//                   <li key={i}>
//                     {item}
//                     {i < items.length - 1 ? "," : ""}
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>

//         <div className="footnote mt-4 text-sm space-y-1">
//           <p className="flex items-center gap-2">
//             <Check size={20} className="text-green-600" /> 5 of 5 stacks loaded
//             successfully. (100% Complete)
//           </p>
//           <p className="flex items-center gap-2 text-black">
//             <Flag size={15} fill="black" />
//             Render time: 0.0234s
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// const TerminalWindow = WindowWrapper(Terminal, "terminal");

// export default TerminalWindow;
