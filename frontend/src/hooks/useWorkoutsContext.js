import React, { useContext } from "react";
import { WorkoutsCtx } from "../context/WorkoutContext";

export const useWorkoutsContext = () => {
  const ctx = useContext(WorkoutsCtx);

  if (!ctx) {
    throw new Error(
      "useWorkoutsContext must be used inside and WorkoutsCtxProvider !!!!"
    );
  }
  return ctx;
};
