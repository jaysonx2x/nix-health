import React from "react";
import { Card, CardContent } from "../ui/card";

const EmptyCard = ({message}: {message: string}) => {
  return (
    <Card className="transition-all text-center mt-4">
      <CardContent className="flex flex-col space-y-1.5 p-6">
        <div className="p-0">
          <div className="space-y-8">
            <div className="flex items-center justify-center">
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {message}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmptyCard;
