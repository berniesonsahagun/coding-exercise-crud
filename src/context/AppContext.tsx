"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Users } from "@/types"; // Ensure you have a User type

interface AppContextType {
  users: Users[];
  loading: boolean;
  fetchUsers: () => Promise<void>;
  addUser: (user: Partial<Users>) => Promise<void>;
  deleteUser: (id: string) => Promise<void>;
  editUser: (id: string, updatedData: Partial<Users>) => Promise<void>; // Add editUser
}

const AppContext = createContext<AppContextType | undefined>(undefined);
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const usersAPI = `${API_URL}/Users`;

export function AppProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch users from API
  async function fetchUsers() {
    setLoading(true);
    try {
      const res = await fetch(usersAPI);
      const data: Users[] = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
    setLoading(false);
  }

  // Add user
  async function addUser(user: Partial<Users>) {
    try {
      const res = await fetch(usersAPI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const newUser = await res.json();
      setUsers((prevUsers) => [...prevUsers, newUser]); // Update state
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  }

  // Delete user
  async function deleteUser(id: string) {
    try {
      await fetch(`${usersAPI}/${id}`, { method: "DELETE" });
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  }

  // Edit user
  async function editUser(id: string, updatedData: Partial<Users>) {
    try {
      const res = await fetch(`${usersAPI}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (!res.ok) {
        throw new Error("Failed to update user");
      }

      // Update state
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, ...updatedData } : user
        )
      );
    } catch (error) {
      console.error("Failed to edit user:", error);
    }
  }

  // Fetch users when component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <AppContext.Provider
      value={{ users, loading, fetchUsers, addUser, deleteUser, editUser }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to use the context
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
