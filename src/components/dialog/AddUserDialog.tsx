import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddUserForm from "../form/AddUserForm";

export function AddUserDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button">Add User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new user</DialogTitle>
          <DialogDescription>
            Fill in all the details required for the user to be created
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <AddUserForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
