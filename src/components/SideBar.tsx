import { teamData } from "../assets/data";
import stack from "../assets/stack.png";
const tools = [
  {
    tool: "React",
    image: stack,
  },
  {
    tool: "Tailwind",
    image: stack,
  },
  {
    tool: "Redux",
    image: stack,
  },
  {
    tool: "TypeScript",
    image: stack,
  },
];
export default function SideBar() {
  return (
    <section>
      <h1 className="text-[40px] mb-4 font-semibold">THE KANBAN PROJECT</h1>

      <h2 className="mb-3 mt-6 font-semibold">TOOLS USED</h2>
      <div className="flex flex-col gap-2">
        {tools.map((tool, i) => (
          <div className="px-2 flex gap-3 items-center" key={i}>
            <img className="w-5 h-5" src={tool.image} alt="tool image" />
            <p className="uppercase font-medium">{tool.tool}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-3 mt-6 font-semibold">THE TEAM</h2>

      <div
        className="flex flex-col gap-2 mb-5
      "
      >
        {teamData.map((mate) => (
          <div
            className="rounded-lg cursor-pointer py-3 px-2 flex gap-3 items-center bg-navAcc"
            key={mate.id}
          >
            <img
              className="w-10 h-10"
              src={mate.picture}
              alt="team member image"
            />

            <div>
              <h3 className="font-semibold uppercase">{mate.name}</h3>
              <p>{mate.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
