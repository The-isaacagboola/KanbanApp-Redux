type Col = {
  col: {
    title: string;
  };
};
export default function Column({ col }: Col) {
  return (
    <div>
      <h1 className="uppercase text-lg">{col.title}</h1>
    </div>
  );
}
