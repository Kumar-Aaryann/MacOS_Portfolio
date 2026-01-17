import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import {
  PanelLeft,
  ChevronLeft,
  ChevronRight,
  ShieldHalf,
  Search,
  Share,
  Plus,
  Copy,
  MoveRight,
} from "lucide-react";
import { blogPosts } from "#constants";

// const Safari = () => {
//   return (
//     <>
//       <div id="windows-header">
//         <WindowControls target="safari" />

//         <PanelLeft className="ml-10 icon" />
//         <div className="flex items-center gap-1 ml-5">
//           <ChevronLeft className="icon" />
//           <ChevronRight className="icon" />
//         </div>

//         <div className="flex-1 flex-center gap-3">
//           <ShieldHalf className="icon" />

//           <div className="search mb-3">
//             <Search className="icon" />
//             <input
//               type="text"
//               placeholder="Search or enter website name"
//               className="flex-1"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
const Safari = () => {
  return (
    <>
      <div
        id="windows-header"
        className="flex items-center justify-center gap-6 px-4 py-2 bg-gray-100"
      >
        {/* Window controls on the left */}
        <WindowControls target="safari" />

        {/* Sidebar icon */}
        <PanelLeft className="icon" />

        {/* Navigation arrows */}
        <div className="flex items-center gap-2">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        {/* Centered search bar */}
        <div className="flex items-center gap-3 flex-1 max-w-md">
          <ShieldHalf className="icon" />
          <div className="flex items-center gap-2 border border-gray-300 rounded px-2 py-1 w-full">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search or enter website name"
              className="flex-1 outline-none bg-transparent"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div className="blog">
        <h2>Latest Blog</h2>

        <div className="space-y-8">
          {blogPosts.map(({ id, image, title, date, link }) => (
            <div key={id} className="blog-post">
              <div className="col-span-2">
                <img src={image} alt={title} />
              </div>
              
              <div className="content">
                <p>{date}</p>
                <h3>{title}</h3>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Read more <MoveRight className="icon-hover" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
