import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import LoadMore from "@/components/shared/LoadMore";
import PatientCard, { PatientProp } from "@/components/patient/PatientCard";
import CustomSelect from "@/components/shared/CustomSelect";
import { fetchPatient } from "@/lib/actions/patient.action";

async function Patients() {
  const data = await fetchPatient(1);

  return (
    <>
      <Header title="My Patients" subtitle="This is the patients page" />

      <Card className="transition-all mt-4 min-h-[740px]">
        <CardContent className="flex flex-col space-y-1.5 p-6">
          <div className="w-full">
            <div className="flex flex-1 w-full items-center justify-between space-x-2">
              <div className="flex flex-1 w-full gap-2">
                <Input
                  placeholder="Filter patients..."
                  className="focus-visible:ring-0 focus-visible:ring-offset-0 w-1/4"
                />
                <Button variant="outline" className="">
                  {/* <PlusIcon /> */}
                  New Patient
                </Button>
              </div>

              <CustomSelect
                title="Filter by"
                items={["All", "Pending", "Admitted", "Discharged"]}
              />
            </div>

            <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-4">
              {data.map((patient: PatientProp, index: number) => (
                <PatientCard key={patient.id} patient={patient} index={index} />
              ))}
            </div>
            <LoadMore />
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default Patients;
