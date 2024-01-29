import { useEffect, useState } from "react";
import { TaskForm as TaskFormType, Task as TaskType } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../features/tasks/taskSlice";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../app/store";

const TaskForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state: RootState) => state.tasks);
  const [task, setTask] = useState<TaskFormType>({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((el: TaskType) => el.id === params.id) as TaskType);
    }
  }, [tasks, params.id]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (params.id) {
      dispatch(updateTask(task));
    } else {
      dispatch(
        addTask({
          ...task,
          id: crypto.randomUUID(),
        })
      );
    }
    navigate("/");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
      <label htmlFor="title" className="block text-xs font-bold mb-2">
        Task:
      </label>
      <input
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
        value={task.title}
      />
      <label htmlFor="description" className="block text-xs font-bold mb-2">
        Description:
      </label>
      <textarea
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={task.description}
      ></textarea>
      <button className="bg-indigo-600 px-2 py-1 rounded-md">Save</button>
    </form>
  );
};

export default TaskForm;
