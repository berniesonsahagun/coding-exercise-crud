import UsersTable from "@/components/table/UsersTable";

export default async function Home() {
  return (
    <section className="max-w-[1200px] mx-auto min-h-screen grid items-center px-10">
      <div className="max-h-[900px]">
        <UsersTable />
      </div>
    </section>
  );
}
