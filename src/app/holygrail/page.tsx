import Link from "next/link";
export default function HolyGrail() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-green-300 p-2 pt-8">
        <Link href="/">&#60; Home</Link>
        <h1 className="text-3xl ">Holy Grail Layout</h1>
      </header>
      <div className="flex flex-col flex-1 sm:flex-row sm:flex-wrap bg-green-500">
        <nav className="sm:w-sm bg-blue-300 p-2">Navigation</nav>
        <main className="flex-1  bg-blue-500 p-2 ">Main content</main>

        <aside className="sm:w-sm  bg-blue-700 p-2">Right Sidebar</aside>
      </div>
      <footer className=" bg-green-400 p-4 ">Footer</footer>
    </div>
  );
}
