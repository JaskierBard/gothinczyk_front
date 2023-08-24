import "./Equipment.css";

interface Props {
  cells: number;
  character: string;
}

export const EmptyCells = (props: Props) => {
  return (
    <div className={props.character}>
      {Array.from({ length: props.cells }, (value, index) => (
        <div className="cell" key={index} />
      ))}
    </div>
  );
};
