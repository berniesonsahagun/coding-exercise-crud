"use client";

import { useAppContext } from "@/context/AppContext";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";

export default function UsersTable() {
  const { users, loading } = useAppContext();

  if (loading) return <p>Loading...</p>;

  return <DataTable columns={columns} data={users} />;
}
