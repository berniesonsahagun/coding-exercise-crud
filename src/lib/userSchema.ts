import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(8, "Name must be at least 8 characters long"),
  address: z.string().min(10, "Address must be at least 10 characters long"),
  occupation: z
    .string()
    .min(6, "Occupation must be at least 6 characters long"),
});

// Infer TypeScript types from Zod schema
export type UserFormData = z.infer<typeof userSchema>;
