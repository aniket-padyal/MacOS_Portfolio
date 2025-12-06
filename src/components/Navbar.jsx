import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { navLinks, navIcons } from "#constants";
import useWindowStore from "#store/window.js";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  const [time, setTime] = useState(dayjs().format("ddd MMM h:mm A"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().format("ddd MMM h:mm A"));
    }, 1000); // update every second

    // cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="apple logo" />
        <p className="font-bold">Aniket's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>

        <time>{time}</time>
      </div>
    </nav>
  );
};

export default Navbar;
