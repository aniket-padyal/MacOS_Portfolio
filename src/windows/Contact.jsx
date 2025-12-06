import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { socials } from "#constants";
import { WindowControls } from "#components";

const Contact = () => {
  return (
    <>
      <div className="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="/images/aniket-3.jpg "
          alt="Aniket"
          className="w-20 rounded-full"
        />
      </div>

      <h3>Let's Connect</h3>
      <p>Feel free to reach out! any time.</p>
      <p className="my-3">anketpadyal07@gmail.com</p>

      <ul>
        {socials.map(({ id, bg, link, icon, text }) => (
          <li key={id} style={{ backgroundColor: bg }}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title={text}
            >
              <img src={icon} alt={text} className="size-5" />
              <p>{text}</p>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
