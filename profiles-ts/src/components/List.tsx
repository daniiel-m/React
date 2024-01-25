import { Sub } from "../types";

interface Props {
  subs: Array<Sub>;
}
const List: React.FC<Props> = ({ subs }) => {
  return (
    <div className="App">
      <ul>
        {subs.map((sub) => {
          console.log(sub.avatar);
          return (
            <li key={sub.nick}>
              <img src={sub.avatar} alt={sub.nick} />
              <h4>
                {sub.nick} (<small>{sub.subMonths}</small>)
              </h4>
              <p>{sub.description?.substring(0, 50)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;