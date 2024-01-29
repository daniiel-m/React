import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { type idForm, type Task } from "../types";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

function TasksList() {
  const dispatch = useDispatch();
  const stateTasks = useSelector((state: RootState) => state.tasks);
  const handleDelete = (id: idForm): void => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1>{stateTasks.length} available tasks</h1>
        <h4>
          <Link
            to="/create"
            className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
          >
            Create Task
          </Link>
        </h4>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {stateTasks.map((el: Task) => {
          const { id, title, description } = el;
          return (
            <div key={id} className="bg-neutral-800 p-4 rounded-md">
              <header className="flex justify-between">
                <h3>{title}</h3>
                <div className="flex justify-between gap-2">
                  <Link
                    to={`/edit/${id}`}
                    className="bg-zinc-600 px-2 py-1 text-xs rounded-md"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete({ id })}
                    className="bg-red-500 px-2 py-1 text-xs rounded-md self-center"
                  >
                    Delete
                  </button>
                </div>
              </header>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TasksList;
