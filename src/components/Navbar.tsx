import { useEffect, useState } from "react";
import Button from "./Button/Button";

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
    <nav className="bg-[#211d15]">
      <ul className="flex items-center justify-center gap-4">
        {navbarItems.map((item) => (
          <li key={item.id}>
            <Button
              sizes="lg"
              cursor="cursor-pointer"
              variants="link"
              radius="rounded-sm"
            >
              {item.name}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
