"use client";

import { useFormState, useFormStatus } from "react-dom";
import { deleteTodo } from "~/app/actions";

const initialState = {
  message: "",
};

const DeleteButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Delete
    </button>
  );
};

const DeleteForm = ({ id, todo }: { id: number; todo: string }) => {
  const [state, formAction] = useFormState(deleteTodo, initialState);

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="todo" value={todo} />
      <DeleteButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
};

export default DeleteForm;
