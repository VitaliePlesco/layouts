import { link } from "fs";
import NavItem from "./NavItem";

export interface NavbarPath {
  name: string;
  path: string;
}
interface Links {
  links: NavbarPath[];
}
export default function Navbar({ links }: Links) {
  // const linkss = { ...links };
  // console.log(linkss);
  return (
    <div className="flex bg-slate-400 gap-4 ju justify-center ab absolute z-10 w-full ">
      {links.map((link: NavbarPath) => (
        <div key={link.name}>
          <NavItem {...link} />
        </div>
      ))}
    </div>
  );
}
