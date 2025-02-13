"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, UserFormData } from "@/lib/userSchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { toast } from "@/hooks/use-toast";

export default function AddUserForm() {
  const [loading, setLoading] = useState(false);
  const { addUser } = useAppContext();

  // Initialize form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  // Handle form submission
  async function onSubmit(data: UserFormData) {
    setLoading(true);
    try {
      const user = {
        avatar: "https://placehold.co/600x600",
        ...data,
      };
      addUser(user);

      reset(); // Clear form fields on success
      toast({
        title: "Added a new user",
        description: `${user.name} has been added.`,
      });
    } catch (error) {
      console.error("Error creating user:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto p-4 border rounded-lg"
    >
      {/* Name Input */}
      <div>
        <label className="block text-sm font-medium">Name</label>
        <Input {...register("name")} placeholder="Enter name" />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Address Input */}
      <div>
        <label className="block text-sm font-medium">Address</label>
        <Input {...register("address")} placeholder="Enter address" />
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address.message}</p>
        )}
      </div>

      {/* Occupation Input */}
      <div>
        <label className="block text-sm font-medium">Occupation</label>
        <Input {...register("occupation")} placeholder="Enter occupation" />
        {errors.occupation && (
          <p className="text-red-500 text-sm">{errors.occupation.message}</p>
        )}
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Create User"}
      </Button>
    </form>
  );
}
