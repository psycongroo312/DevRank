import React from "react";
import { LEVELS } from "./LevelsData";

export default function Skills() {
  const [skill, setSkill] = React.useState<string>("");
  const [level, setLevel] = React.useState<SkillLevel>("...");

  type SkillLevel = keyof typeof LEVELS | "...";

  const handleSkills = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkill(e.target.value);
  };

  const evaluateLevel = () => {
    if (!skill.trim()) {
      setLevel("...");
      return;
    }
    const skillsList = skill
      .toLowerCase()
      .split(/[, ]+/)
      .map((s) => s.trim())
      .filter((s) => s !== "");
    let detectedLevel: SkillLevel = "...";

    (Object.keys(LEVELS) as Array<keyof typeof LEVELS>).forEach((lvl) => {
      if (LEVELS[lvl].some((skill) => skillsList.includes(skill))) {
        detectedLevel = lvl;
      }
    });

    setLevel(detectedLevel);
  };

  return (
    <div className="m-auto w-max ">
      <div className="bg-white h-max rounded-xl p-[12px] text-center w-3xs sm:w-lg">
        <h1 className="text-2xl font-bold mb-[20px]">
          Проверь свой уровень во фронтенде
        </h1>
        <div className="flex flex-col sm:flex-row gap-3.5 mb-5">
          <input
            onChange={(e) => handleSkills(e)}
            className="border rounded-md w-full px-3 py-2 text-sm
              sm:w-auto sm:flex-1"
            type="text"
            placeholder="Укажите ваш стек, например: js, react"
          />
          <button
            onClick={evaluateLevel}
            className="border rounded-md px-4 py-2 cursor-pointer 
              bg-gray-100 hover:bg-gray-200 active:bg-gray-300
              transition-all active:scale-95 whitespace-nowrap
              text-sm"
          >
            Узнать свой уровень
          </button>
        </div>
        <h1 className="border-1 p-2 ">{level}</h1>
      </div>
    </div>
  );
}
