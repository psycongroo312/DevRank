import React from "react";

export default function Skills() {
  const [skill, setSkill] = React.useState<string>("");
  const [level, setLevel] = React.useState<string>("...");

  const handleSkills = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkill(e.target.value);
  };

  const evaluateLevel = () => {
    const skillsList = skill.toLowerCase().split(" ");
    if (
      skillsList.includes("html") ||
      skillsList.includes("css") ||
      skillsList.includes("javascript") ||
      skillsList.includes("js")
    ) {
      setLevel("Junior");
    } else {
      setLevel("...");
    }
    if (
      skillsList.includes("react") ||
      skillsList.includes("typescript") ||
      skillsList.includes("ts") ||
      skillsList.includes("redux")
    ) {
      setLevel("Middle");
    }
    if (!skill.trim()) {
      setLevel("...");
    }
  };

  return (
    <div className="m-auto w-max">
      <div className="bg-white h-max rounded-xl p-[12px] w-lg text-center">
        <h1 className="text-2xl font-bold mb-[20px]">
          Проверь свой уровень во фронтенде
        </h1>
        <div className="flex gap-3.5 mb-5">
          <input
            onChange={(e) => handleSkills(e)}
            className="border-1 rounded-md w-sm p-[10px]"
            type="text"
            placeholder="Укажите ваш стек, например: js, react"
          />
          <button
            onClick={evaluateLevel}
            className="border-1 p-[5px] px-[10px] cursor-pointer hover:bg-gray-400 rounded-md transition-all active:scale-95 active:shadow-inner"
          >
            Узнать свой уровень
          </button>
        </div>
        <h1 className="border-1 p-2 ">{level}</h1>
      </div>
    </div>
  );
}
