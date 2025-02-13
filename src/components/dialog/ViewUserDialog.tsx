import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Users } from "@/types";
import Image from "next/image";

export function ViewUserDialog({ user }: { user: Users }) {
  const { name, address, avatar, occupation } = user;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          View User
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>View User</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="grid gap-2 py-4">
          <div className="relative w-full h-[300px]">
            <Image src={avatar} fill alt="Avatar" />
          </div>
          <h2 className="font-bold text-2xl">{name}</h2>
          <p className="text-zinc-500">{address}</p>
          <p>{occupation}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
