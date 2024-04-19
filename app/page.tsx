import { AddForm, DeleteForm } from "~/components";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!);

const HomePage = async () => {
  const todos = await sql`SELECT * FROM "next-actions_todo"`;

  return (
    <main>
      <h1 className="sr-only">Todos</h1>
      <AddForm />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <DeleteForm id={todo.id} todo={todo.title} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default HomePage;
