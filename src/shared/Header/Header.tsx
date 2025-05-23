import { Link } from "react-router";

export default function Header() {
  return (
    <div className="mb-[100px]">
      <header className="flex justify-between">
        <Link to={`/`}>
          <p
            className="bg-white rounded-lg p-[10px] text-3xl active:bg-gray-300
              transition-all active:scale-95 whitespace-nowrap"
          >
            DevRank
          </p>
        </Link>
        <Link to={`/test`}>
          <button
            className="bg-white rounded-lg p-[10px] text-3xl cursor-pointer active:bg-gray-300
              transition-all active:scale-95 whitespace-nowrap "
          >
            Test
          </button>
        </Link>
      </header>
    </div>
  );
}
