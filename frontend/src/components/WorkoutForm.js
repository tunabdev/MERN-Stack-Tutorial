import React, { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
export default function WorkoutForm() {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = {
      title,
      load,
      reps,
    };
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      setEmptyFields([]);
      console.log("new Workout added!", json);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      <label htmlFor="title">Exercise Title:</label>
      <input
        name="title"
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      ></input>
      <label htmlFor="load">Load (in kg):</label>
      <input
        name="load"
        type="number"
        onChange={(e) => {
          setLoad(e.target.value);
        }}
        value={load}
        className={emptyFields.includes("load") ? "error" : ""}
      ></input>
      <label htmlFor="reps">Reps:</label>
      <input
        name="reps"
        type="number"
        onChange={(e) => {
          setReps(e.target.value);
        }}
        value={reps}
        className={emptyFields.includes("reps") ? "error" : ""}
      ></input>
      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
