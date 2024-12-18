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
      <h1 className="text-[45px] mb-4 font-semibold">
        KANBAN - A SIMPLE REDUX APP
      </h1>

      <h2 className="mt-6 mb-3 font-semibold">TOOLS USED</h2>
      <div className="flex flex-col gap-2">
        {tools.map((tool, i) => (
          <div className="flex items-center gap-3 px-2" key={i}>
            <img className="w-5 h-5" src={tool.image} alt="tool image" />
            <p className="font-medium uppercase">{tool.tool}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-6 mb-3 font-semibold">THE TEAM</h2>

      <div className="flex flex-col gap-2 mb-5 ">
        {teamData.map((mate) => (
          <div
            className="flex items-center gap-3 px-2 py-3 rounded-lg cursor-pointer bg-navAcc"
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
