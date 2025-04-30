export default function Header() {
  return (
    <div className="mb-[250px]">
      <header className="flex justify-between">
        <div className="bg-white rounded-lg p-[10px]">
          <p className="text-3xl">DevRank</p>
        </div>
        <div className="bg-white rounded-lg p-[10px]">
          <p className="text-3xl">ОЦЕНКА</p>
        </div>
        <div className="bg-white rounded-lg p-[10px] flex gap-1">
          <p className="text-2xl">RU /</p>
          <p className="text-2xl">EN</p>
        </div>
      </header>
    </div>
  );
}
