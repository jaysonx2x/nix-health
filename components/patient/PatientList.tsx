import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
// import { fetchPatient } from "@/app/actions/patients/patient.action";

const PatientList = async () => {
    
  // const data = await fetchPatient(1);
  // console.log(data);

  return (
    <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-4">
      <h1>List</h1>
      {/* {data} */}
    </div>
  );
};

export default PatientList;
