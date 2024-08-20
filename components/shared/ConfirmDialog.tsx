import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"
  

  interface ConfirmProps {
    isOpen: boolean;
    onClose: () => void;
    params: {};
    btnYesText: string;
  }

const ConfirmDialog = ({ isOpen, onClose, params, btnYesText="Yes" } : ConfirmProps) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>{btnYesText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent> 
    </AlertDialog>
  );
};

export default ConfirmDialog;
