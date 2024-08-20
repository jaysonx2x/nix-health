"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { Form } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { createAgency, updateAgency } from "@/lib/actions/agency.action";
import CustomFormField, { FormFieldType } from "../shared/CustomFormField";
import SubmitButton from "../shared/SubmitButton";
import {
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { Agency } from "@/lib/db/models/agency.model";
import { useToast } from "../ui/use-toast";

const formSchema = z.object({
  agencyCode: z.string().min(2, { message: "At least 2 characters" }),
  agencyName: z.string().min(2, { message: "At least 2 characters" }),
  address1: z.string().min(2, { message: "At least 2 characters" }),
  city: z.string().min(2, { message: "At least 2 characters" }),
  state: z.string().min(2, { message: "At least 2 characters" }),
  zip: z.string().min(2, { message: "At least 2 characters" }),
  phoneNo1: z.string().max(10).optional(),
  phoneNo2: z.string().max(10).optional(),
  email: z.string().optional(),
});

const AgencyFormModal = ({
  openModal,
  setOpenModal,
  type,
  agency,
  refreshList
} : {
  openModal: boolean;
  setOpenModal?: Dispatch<SetStateAction<boolean>>;
  type: "add" | "edit";
  agency?: Agency;
  refreshList: () => void;
}) => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      agencyCode: agency ? agency.agencyCode : "",
      agencyName: agency ? agency.agencyName : "",
      address1: agency?.contactInfos ? agency.contactInfos.address1 : "",
      city: agency?.contactInfos ? agency.contactInfos.city : "",
      state: agency?.contactInfos ? agency.contactInfos.state : "",
      zip: agency?.contactInfos ? agency.contactInfos.zip : "",
      phoneNo1: agency?.contactInfos ? agency.contactInfos.phoneNo1 : "",
      phoneNo2: agency?.contactInfos ? agency.contactInfos.phoneNo2 : "",
      email: agency?.contactInfos ? agency.contactInfos.email : "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // console.log(data);

    setIsSubmitting(true);

    try {

      const theAgency = {
        agencyCode: data.agencyCode,
        agencyName: data.agencyName,
        contactInfos: {
          address1: data.address1,
          city: data.city,
          state: data.state,
          zip: data.zip!,
          phoneNo1: data.phoneNo1!,
          phoneNo2: data.phoneNo2!,
          email: data.email!,
        },
      };

      if (type === "add") {
        // Call save function
        const newAgency = await createAgency(theAgency);

        if (newAgency) {
          toast({ title: "Agency created!" });
        }

      } else {

        // Update Agency
        const updatedAgency = await updateAgency(agency?._id, theAgency);
        if (updatedAgency) {
          toast({ title: "Agency updated!" });
        }
      }

      form.reset();
      setIsSubmitting(false);
      setOpenModal && setOpenModal(false);
      refreshList();
      
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  let buttonText = type === "add" ? "Create Agency" : "Update Agency";

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogHeader className="hidden">
        <DialogTitle>Dialog</DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
      <DialogContent className="flex w-full max-w-lg flex-col gap-6 border-none px-4 py-4">
        <Form {...form}>
          <form
            id="myform"
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full flex-col mt-2"
          >
            <div className="flex flex-col gap-2">
              <div className="flex flex-1 gap-2 justify-center">
                <h1 className="font-bold text-gray-950">
                  {type === "add" ? "Create an agency" : "Edit agency details"}
                </h1>
              </div>

              <div className="grid gap-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-2">
                <div className="mt-2">
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="agencyCode"
                    label="Agency Code"
                    placeholder="Agency Code"
                  />
                </div>
              </div>

              <div className="mt-2 pb-3">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="agencyName"
                  label="Agency Name"
                  placeholder="Agency Name"
                />
              </div>

              <div className="mt-2 ">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="address1"
                  label="Address"
                  placeholder="Address"
                />
              </div>

              <div className="mt-2 ">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="city"
                  label="City"
                  placeholder="City"
                />
              </div>

              <div className="grid gap-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-2">
                <div className="mt-2 ">
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="state"
                    label="State"
                    placeholder="State"
                  />
                </div>

                <div className="mt-2 ">
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="zip"
                    label="Zip"
                    placeholder="Zip"
                  />
                </div>
              </div>

              <div className="grid gap-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-2">
                <div className="mt-2 ">
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="phoneNo1"
                    label="Phone 1"
                    placeholder="Phone 1"
                  />
                </div>

                <div className="mt-2 ">
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="phoneNo2"
                    label="Phone 2"
                    placeholder="Phone 2"
                  />
                </div>
              </div>

              <div className="mt-2 ">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="email"
                  label="Email Address"
                  placeholder="Email Address"
                />
              </div>

              <SubmitButton
                isLoading={isSubmitting}
                buttonText={buttonText}
                loadingText="Submitting"
              />
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AgencyFormModal;
