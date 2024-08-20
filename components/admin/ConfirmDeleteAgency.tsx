"use client";

import { Dispatch, SetStateAction, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { deleteAgency } from "@/lib/actions/agency.action";
import { useToast } from "../ui/use-toast";
import { Loader } from "lucide-react";
import { Agency } from "@/lib/db/models/agency.model";

interface ConfirmProps {
  confirmDelete: boolean;
  setConfirmDelete?: Dispatch<SetStateAction<boolean>>;
  agency?: Agency;
  refreshList: () => void;
}

const ConfirmDeleteAgency = ({
  confirmDelete,
  agency,
  setConfirmDelete,
  refreshList
}: ConfirmProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();

  const handleDeleteAgency = async (agencyId: string) => {

    setIsDeleting(true);

    try {
      const isDeleted = await deleteAgency(agencyId);
      if (isDeleted) {
        setIsDeleting(false);
        refreshList();
        toast({ title: "Agency deleted!" });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        variant: "destructive",
      });
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog open={confirmDelete} onOpenChange={setConfirmDelete}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete {agency?.agencyName}?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            agency from the database.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
          className="bg-gray-700"
            onClick={() => handleDeleteAgency(agency?._id)}
            disabled={isDeleting}
          >
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmDeleteAgency;
