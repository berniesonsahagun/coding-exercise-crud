import { columns, Users } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";

export default async function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const data = await fetch(`${API_URL}/Users`);
  const users: Array<Users> = await data.json();

  return (
    <section className="max-w-[1200px] mx-auto min-h-screen grid items-center">
      <div className="max-h-[900px] overflow-y-auto">
        <DataTable columns={columns} data={users} />
      </div>
    </section>
  );
}
