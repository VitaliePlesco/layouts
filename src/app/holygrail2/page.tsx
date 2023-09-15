import {
  HomeIcon,
  GearIcon,
  CubeIcon,
  BarChartIcon,
  LayersIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function HolyGrail2() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-violet-500 p-2 pt-8 text-white">
        <Link href="/">&#60; Home</Link>
        <h1 className="text-3xl ">Holy Grail Layout2</h1>
      </header>
      <div className="flex flex-col md:flex-row   flex-1">
        <nav className="bg-orange-300 flex-initial  px-4 p-2 items-center md:max-w-xs">
          <ul className="flex md:flex-col md:gap-1 justify-center pt-[18px] ">
            <li className="flex gap-2 items-center hover:bg-violet-500 hover:text-white rounded-md p-2">
              <HomeIcon /> <span className="hidden sm:inline">Home</span>
            </li>
            <li className="flex gap-2 items-center hover:bg-violet-500 hover:text-white rounded-md p-2">
              <GearIcon /> <span className="hidden sm:inline">Settings</span>
            </li>
            <li className="flex gap-2 items-center hover:bg-violet-500 hover:text-white rounded-md p-2">
              <CubeIcon /> <span className="hidden sm:inline">Products</span>
            </li>
            <li className="flex gap-2 items-center hover:bg-violet-500 hover:text-white rounded-md p-2">
              <BarChartIcon /> <span className="hidden sm:inline">Reports</span>
            </li>
            <li className="flex gap-2 items-center hover:bg-violet-500 hover:text-white rounded-md p-2">
              <LayersIcon />{" "}
              <span className="hidden sm:inline">Integrations</span>
            </li>
          </ul>
        </nav>
        <main className="bg-orange-400 w-full flex-1 p-2">
          <h2 className="text-3xl font-semibold pt-4 px-4 ">Holy Grail 2</h2>
          <p className="p-4 tracking-wide text-lg">
            The holy grail is a web page layout which has multiple equal-height
            columns that are defined with style sheets. It is commonly desired
            and implemented, but for many years, the various ways in which it
            could be implemented with available technologies all had
            drawbacks.Because of this, finding an optimal implementation was
            likened to searching for the elusive Holy Grail.
          </p>
          <p className="p-4 tracking-wide text-lg">
            The limitations of CSS and HTML, the desirability of semantically
            meaningful pages that rank well in search engines, and the
            deficiencies of various browsers combined historically to create a
            situation in which there was no way to create this type of layout
            that would be considered totally correct. As the underlying
            technologies did not provide a proper solution, web designers found
            various ways to work around the limitations.
          </p>
          <p className="p-4 tracking-wide text-lg">
            Common workarounds included changes in page structure, the addition
            of graphics, scripting, and the creative use of CSS. These methods
            were imperfect, inconvenient, and considered by some to be abuse of
            the web standards and their intent. More recent web standards have
            provided much more complete and robust solutions for implementing
            this layout. In particular, the CSS Flexible Box Layout and CSS Grid
            Layout modules have both provided full solutions
          </p>
        </main>
        <aside className="bg-orange-500 flex-initial md:w-[220px] md:max-w-xsb w-fixed">
          <div className="flex gap-4 flex-col sm:flex-row md:flex-col justify-start w-full   p-4">
            <div className="bg-white rounded-2xl  mx-auto py-8 px-4">
              <h2 className="text-6xl font-extrabold tracking-tighter sm:text-3xl">
                <span className="block text-violet-500">
                  Made with Tailwind CSS!
                </span>
              </h2>
            </div>
            <div className="bg-white rounded-2xl  mx-auto py-8 px-4">
              <h2 className="text-6xl font-extrabold tracking-tighter sm:text-3xl">
                <span className="block whitespace-normal text-violet-500">
                  Ready to dive in?
                </span>
              </h2>
            </div>
            <div className="bg-white rounded-2xl   mx-auto py-8 px-4">
              <h2 className="text-6xl font-extrabold tracking-tighter sm:text-3xl">
                <span className="block text-violet-500">
                  This is another card.
                </span>
              </h2>
            </div>
          </div>
        </aside>
      </div>
      <footer className="bg-violet-600 p-8 text-white">Footer</footer>
    </div>
  );
}
