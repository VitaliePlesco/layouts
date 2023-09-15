import Link from "next/link";
import { NavbarPath } from "./Navbar";

export default function NavItem(link: NavbarPath) {
  return (
    <>
      <Link href={`/${link.path}`}>{link.name}</Link>
    </>
  );
}
