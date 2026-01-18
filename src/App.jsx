import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, Navbar, Welcome } from "#components";
import Terminal from "#windows/Terminal";
import { Safari } from "#windows";
import Resume from "#windows/Resume";
import Finder from "#windows/Finder";


gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
    </main>
  );
};
export default App;
