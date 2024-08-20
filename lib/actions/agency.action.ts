'use server';

import { revalidatePath } from "next/cache";
import Agency from "../db/models/agency.model";
import { connectToDatabase } from "../db/mongoose";
import { handleError } from "../utils";

// CREATE
export async function createAgency(agency: CreateAgencyParams) {
    try {
      await connectToDatabase();
  
      const newAgency = await Agency.create(agency);
  
      return JSON.parse(JSON.stringify(newAgency));
    } catch (error) {
      handleError(error);
    }
  }

// READ ALL
export async function getAgencies() {
    try {
        await connectToDatabase();

        const agencies = await Agency.find({});

        if (!agencies) throw new Error("No agencies found");

        return JSON.parse(JSON.stringify(agencies));
    } catch (error) {
        handleError(error);
    }
}


// READ
export async function getAgencyById(agencyId: string) {
try {
    await connectToDatabase();

    const agency = await Agency.findOne({ clerkId: agencyId });

    if (!agency) throw new Error("Agency not found");

    return JSON.parse(JSON.stringify(agency));
} catch (error) {
    handleError(error);
}
}



// UPDATE
export async function updateAgency(agencyId: string, agency: UpdateAgencyParams) {
    try {
      await connectToDatabase();
  
      const updatedAgency = await Agency.findOneAndUpdate({ _id: agencyId }, agency, {
        new: true,
      });
  
      if (!updatedAgency) throw new Error("Agency update failed");
      
      return JSON.parse(JSON.stringify(updatedAgency));
    } catch (error) {
      handleError(error);
    }
  }
  
  // DELETE
  export async function deleteAgency(agencyId: string) {
    try {
      await connectToDatabase();
  
      // Find agency to delete
      const agencyToDelete = await Agency.findOne({ _id: agencyId });
  
      if (!agencyToDelete) {
        throw new Error("Agency not found");
      }
  
      // Delete agency
      const deletedAgency = await Agency.findByIdAndDelete(agencyToDelete._id);
  
      return deletedAgency ? JSON.parse(JSON.stringify(deletedAgency)) : null;

    } catch (error) {
      handleError(error);
    }
  }