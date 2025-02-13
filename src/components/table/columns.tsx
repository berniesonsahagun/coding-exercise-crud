"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Users = {
  id: string;
  name: string;
  address: string;
  occupation: string;
};

export const columns: ColumnDef<Users>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },

  {
    accessorKey: "address",
    header: "Address",
  },

  {
    accessorKey: "occupation",
    header: "Occupation",
  },
];
