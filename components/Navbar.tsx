import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem: FunctionComponent<{
  activetab: string;
  setactivetab: Function;
  name: string;
  route: string;
}> = ({ activetab, name, route, setactivetab }) => {
  return activetab !== name ? (
    <Link href={route}>
      <a>
        <span
          onClick={() => {
            setactivetab(name);
          }}
          className="hover:text-yellow-500"
        >
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activetab, setactivetab] = useState<string>("");

  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === "/") setactivetab("About");
    if (pathname === "/resume") setactivetab("Resume");
    if (pathname === "/projects") setactivetab("Projects");
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold text-yellow-500 border-b-4 border-yellow-500 md:text-2xl">
        {activetab}
      </span>
      <div className="flex space-x-5 text-lg text-red-700">
        <NavItem
          activetab={activetab}
          setactivetab={setactivetab}
          name="About"
          route="/"
        />
        <NavItem
          activetab={activetab}
          setactivetab={setactivetab}
          name="Resume"
          route="/resume"
        />
        <NavItem
          activetab={activetab}
          setactivetab={setactivetab}
          name="Projects"
          route="/projects"
        />
      </div>
    </div>
  );
};

export default Navbar;
