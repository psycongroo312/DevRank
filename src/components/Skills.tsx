import React from "react";

export default function Skills() {
  const [skill, setSkill] = React.useState<string>("");
  const [level, setLevel] = React.useState<string>("");

  const handleSkills = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkill(e.target.value);
  };

  const evaluateLevel = () => {
    const skillsList = skill.toLowerCase().split(" ");
    if (skillsList.includes("react") && skillsList.includes("typescript")) {
      setLevel("Middle");
    } else setLevel("Junior");
  };

  return (
    <div className="m-auto w-max">
      <div className="bg-white h-[170px] rounded-xl p-[12px] w-lg text-center">
        <h1 className="text-2xl font-bold mb-[20px]">
          Узнай свой уровень фронтендера
        </h1>
        <div className="flex gap-3.5">
          <input
            onChange={(e) => handleSkills(e)}
            className="border-1 rounded-md w-sm p-[10px]"
            type="text"
          />
          <button
            onChange={evaluateLevel}
            className="border-1 p-[5px] px-[10px] cursor-pointer hover:bg-gray-400 rounded-md"
          >
            Узнать свой уровень
          </button>
        </div>
        <h1 className="p-[25px]">{level}</h1>
      </div>
    </div>
  );
}
