import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then((res) => {
      setTasks(res.data);
    });
  }, []);

  // Delete Task
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This task will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setTasks(tasks.filter((task) => task.id !== id));
        Swal.fire("Deleted!", "Your task has been deleted.", "success");
      }
    });
  };

  // Open Edit Modal
  const openEditModal = (task) => {
    setTaskToEdit(task);
    setNewTitle(task.title);
  };

  // Edit Task
  const handleEdit = () => {
    if (!newTitle.trim()) {
      Swal.fire("Error", "Task title cannot be empty!", "error");
      return;
    }

    setTasks(
      tasks.map((task) =>
        task.id === taskToEdit.id ? { ...task, title: newTitle } : task
      )
    );
    Swal.fire("Updated!", "Your task has been updated.", "success");
    setTaskToEdit(null);
  };

  // Add New Task
  const handleAddTask = () => {
    if (!newTask.trim()) {
      Swal.fire("Error", "Task title cannot be empty!", "error");
      return;
    }

    const newTaskObj = {
      id: tasks.length + 1,
      title: newTask,
    };

    setTasks([...tasks, newTaskObj]);
    setNewTask("");
    setShowAddModal(false);
    Swal.fire("Added!", "New task has been added.", "success");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
        Your Tasks
      </h2>

      <button className="btn btn-primary mb-3" onClick={() => setShowAddModal(true)}>
        <FontAwesomeIcon icon={faPlus} className="me-2" /> Add New Task
      </button>

      <ul className="list-group shadow">
        {tasks.map((task, index) => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span className="fw-semibold">
              {index + 1}. {task.title}
            </span>
            <div>
              <button className="btn btn-warning btn-sm me-2" onClick={() => openEditModal(task)}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(task.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {taskToEdit && (
        <div className="modal fade show" style={{ display: "block" }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Task</h5>
                <button type="button" className="btn-close" onClick={() => setTaskToEdit(null)}></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  autoFocus
                />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setTaskToEdit(null)}>Cancel</button>
                <button className="btn btn-success" onClick={handleEdit}>
                  <FontAwesomeIcon icon={faCheck} className="me-2" />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showAddModal && (
        <div className="modal fade show" style={{ display: "block" }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Task</h5>
                <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter task title"
                  autoFocus
                />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
                <button className="btn btn-primary" onClick={handleAddTask}>
                  <FontAwesomeIcon icon={faPlus} className="me-2" />
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Tasks;
