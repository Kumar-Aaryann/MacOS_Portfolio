import WindowWrapper from "#hoc/WindowWrapper";
import { socials } from "#constants";
import WindowControls from "#components/WindowControls";

const Contact = () => {
  return (
    <>
      <div className="flex items-center justify-between px-3 py-2 bg-gray-200 window-header">
        {/* <WindowControls target= "contact" /> */}
        <div className="flex items-center gap-2">
          <WindowControls target="contact" />
        </div>
        <h2>Contact me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img src="/images/My-photo.png" alt="Aryan" className="w-20 rounded-full" />

        <h3>Let's Connect</h3>
        <p>Got an idea? A project you'd like to collaborate on? Feel free to reach out! I'm always open to discussing new opportunities and creative projects.</p>

        <ul>
            {socials.map(({ id, bg, link, icon, text }) => (
                <li key={id} style={{ backgroundColor: bg }}>
                    <a href={link} target="_blank" rel="nopener noreferrer" title={text}>
                        <img src={icon} alt={text} className="size-5"/>
                        <p>{text}</p>
                    </a>
                </li>
            ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;