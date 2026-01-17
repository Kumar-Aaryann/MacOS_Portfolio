import { useRef } from "react";
import { Tooltip } from "react-tooltip";
import { gsap } from "gsap";
import { dockApps } from "#constants/index";
import { useGSAP } from "@gsap/react";
import useWindowStore from "#store/window";

const Dock = () => {
    const { openWindow, closeWindow, window } = useWindowStore();
  const dockRef = useRef(null);

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return () => {};

    const icons = dock.querySelectorAll(".dock-icon");

    const animateIcon = (mouseX) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);

        const intensity = Math.exp(-(distance ** 2.5 / 2000));

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const handleMouseMove = (e) => {
      const { left } = dock.getBoundingClientRect();
      animateIcon(e.clientX - left);
    };

    const resetIcon = () => {
      icons.forEach((icon) =>
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        })
      );
    };
    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcon);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcon);
    };
  }, []);

  const toggleApp = (app) => {
    if (!app.canOpen) return;

    const win = window[app.id];

    if (!win) { console.warn(`No window config found for id: ${app.id}`); return; }

    if (window.isOpen) {
        closeWindow(app.id);
        console.log(`Closed ${app.id}`, window);
    } else {
        openWindow(app.id);
        console.log(`Opened ${app.id}`, window);
    }
  };
  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show="150"
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <img
                src={`/images/${icon}`}
                alt={name}
                loading="lazy"
                className={canOpen ? " " : "opacity-60"}
              />
            </button>
          </div>
        ))}

        <Tooltip
          id="dock-tooltip"
          place="top"
          //   effect="solid"
          className="tooltip"
        />
      </div>
    </section>
  );
};

export default Dock;
