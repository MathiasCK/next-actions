"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createTodo } from "~/app/actions";

const initialState = {
  message: "",
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Add
    </button>
  );
};

const AddForm = () => {
  const [state, formAction] = useFormState(createTodo, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="todo">Enter Task</label>
      <input type="text" id="todo" name="todo" required />
      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
};

export default AddForm;
