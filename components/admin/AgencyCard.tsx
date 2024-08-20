import Image from "next/image";
import { MotionDiv } from "../shared/Motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Dispatch, SetStateAction, useState } from "react";
import ConfirmDialog from "../shared/ConfirmDialog";
import AgencyFormModal from "./AgencyFormModal";
import ConfirmDeleteAgency from "./ConfirmDeleteAgency";

const stagger = 0.25;

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export interface AgencyProp {
  id: string;
  agencyCode: string;
  agencyName: string;
  logo: string;
}

interface Prop {
  agency: AgencyProp;
  index: number;
  refreshList: () => void;
}

function AgencyCard({ agency, index, refreshList }: Prop) {

  const [openEditModal, setOpenEditModal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * stagger,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full"
    >
      <Card className="transition-all hover:bg-accent">
        <CardContent className="flex flex-col space-y-1.5 p-6">
          <div className="p-0">
            <div className="space-y-8">
              <div className="flex items-center">
                <span className="relative shrink-0 overflow-hidden rounded flex h-9 w-9 items-center justify-center space-y-0 border">
                  <Image
                    src={agency.logo ? agency.logo : "/assets/icons/home.svg"}
                    alt="agency"
                    width={60}
                    height={60}
                    className="aspect-square h-full w-full p-2"
                  />
                </span>

                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {agency.agencyName}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {agency.agencyCode}
                  </p>
                </div>
                <div className="ml-auto font-medium">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex h-8 w-8 p-0 data-[state=open]:bg-muted focus-visible:ring-0 focus-visible:ring-offset-0"
                      >
                        <DotsHorizontalIcon className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem
                          onClick={() => setOpenEditModal(true)}
                        >
                          Edit
                          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setConfirmDelete(true)}
                        >
                          Delete
                          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>

          <AgencyFormModal
            openModal={openEditModal}
            setOpenModal={setOpenEditModal}
            type="edit"
            agency={agency}
            refreshList={refreshList}
          />

          <ConfirmDeleteAgency
            confirmDelete={confirmDelete}
            setConfirmDelete={setConfirmDelete}
            agency={agency}
            refreshList={refreshList}
          />
        </CardContent>
      </Card>
    </MotionDiv>
  );
}

export default AgencyCard;
