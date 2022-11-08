import Link from "next/link";

function Footer() {
  return (
    <div className="flex items-center justify-start h-10 gap-6 px-6 sm:justify-between sm:items-start sm:h-24">
      {/* Created by */}
      <h2 className="text-xs text-slate-600">Created by - Jacob Dunbar</h2>
      {/* Website link */}
      <Link
        className="text-xs text-orange-400 opacity-50 hover:opacity-80"
        href={"http://jacobdunbar.com/"}
      >
        www.jacobdunbar.com
      </Link>
    </div>
  );
}

export default Footer;
