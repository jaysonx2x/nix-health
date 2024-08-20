import { Button } from "../ui/button";
import { Loader } from "lucide-react";

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  buttonText: string;
  loadingText: string;
}

const SubmitButton = ({
  isLoading,
  className,
  buttonText = "Submit",
  loadingText = "Submitting",
}: ButtonProps) => {
  return (
    <Button
      type="submit"
      className={className ?? "focus-visible:ring-0 focus-visible:ring-offset-0 mt-6 bg-gray-700"}
      disabled={isLoading}
    >
      {isLoading ? (
        <>{loadingText ?? <Loader size={20} className="animate-spin ml-2" />}</>
      ) : (
        buttonText
      )}
    </Button>
  );
};

export default SubmitButton;
