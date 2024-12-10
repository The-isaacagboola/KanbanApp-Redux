type Col = {
  col: {
    title: string;
  };
};
export default function Column({ col }: Col) {
  return (
    <div className="bg-teal text-white p-3 rounded-lg">
      <h1 className="uppercase text-lg text-center">{col.title}</h1>
    </div>
  );
}
