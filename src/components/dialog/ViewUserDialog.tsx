import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export function DeleteUserDialog() {
  function handleDelete() {
    console.log("User deleted!");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem
          className="text-red-700 focus:text-red-700"
          onSelect={(e) => e.preventDefault()}
        >
          Delete user
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete user</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this user?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <form action={handleDelete}>
            <Button type="submit" variant="destructive">
              Delete User
            </Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
