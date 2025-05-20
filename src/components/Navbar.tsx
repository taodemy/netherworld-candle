import Link from "next/link";
import { useEffect, useState } from "react";

type NavbarItem = {
  id: number;
  name: string;
  link: string;
};

const Navbar = () => {
  const [navbarItems, setNavbarItems] = useState<NavbarItem[]>([]);
  useEffect(() => {
    const fetchNavbarItems = async () => {
      const url = "/navbar.json";
      try {
        const res = await fetch(url);
        const data = await res.json();
        setNavbarItems(data.navbarItems);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNavbarItems();
  }, []);

  return (
    <nav>
      <ul>
        {navbarItems.map((item) => (
          <li key={item.id}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
