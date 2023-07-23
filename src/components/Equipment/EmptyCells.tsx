import "./Equipment.css";

interface Props {
  cells: number;
  character:string;
}

export const EmptyCells = (props: Props) => {
  return (
    <div className={props.character}>
      {Array.from({ length: props.cells }, (value, index) => (
        <div className="cell" key={index} />
      ))}
      <div className="showItem">
        <p className="name"></p>
        <p className="price"></p>
        <img
          className={"img"}
          style={{ opacity: 0, width: 100, height: 100 }}
          alt="img"
        />
      </div>
    </div>
  );
};
