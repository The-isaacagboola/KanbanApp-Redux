import Column from "./Column";

const column = [
  { title: "Backlog" },
  { title: "Design" },
  { title: "In Progress" },
  { title: "Done" },
];

export default function Project() {
  return (
    <section
      className={`md:ml-10 mt-3 grid grid-cols-${column.length} w-full gap-3`}
    >
      {column.map((col) => (
        <Column key={col.title} col={col} />
      ))}
    </section>
  );
}
