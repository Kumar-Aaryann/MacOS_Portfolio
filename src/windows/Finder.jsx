import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components/index";
import { Search } from "lucide-react";
import { locations } from "#constants/index.js";
import useLocationStore from "#store/location";
import clsx from "clsx";
import useWindowStore from "#store/window";

const Finder = ({ focusWindow }) => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");
  };

  const renderList = (name, items) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              item.id === activeLocation.id ? "active" : "not-active",
            )}
          >
            <img src={item.icon} alt={item.name} className="w-4" />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <>
      {/* Header bar */}
      <div
        id="window-header"
        // className="flex justify-between items-center px-3 py-2 bg-gray-200 cursor-move"
        onClick={focusWindow}
      >
        <WindowControls target="finder" />
        <Search className="icon" />
        {/* <h2 className="text-lg font-bold">idk why its still here</h2> */}
      </div>

      {/* Body content */}
      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderList("Favorites", Object.values(locations))}
          {renderList("My Projects", locations.work.children)}
        </div>
        <ul className="content">
          {activeLocation?.children.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} className="" />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

// Wrapped it with WindowWrapper so it behaves like other windows
const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
