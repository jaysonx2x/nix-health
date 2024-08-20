"use client";

import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "lucide-react";
import AgencyCard, { AgencyProp } from "@/components/admin/AgencyCard";
import { useEffect, useState } from "react";
import { getAgencies } from "@/lib/actions/agency.action";
import EmptyCard from "@/components/shared/EmptyCard";
import AgencyFormModal from "@/components/admin/AgencyFormModal";

const Agencies = () => {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    async function loadData() {
      const result = await getAgencies();
      setData(result);
    }
    loadData();
  }, []);


  const refreshList = async () => {
    const updatedData = await getAgencies();
    setData(updatedData);
  };

  return (
    <>
      <Header title="Agencies" subtitle="This is the agencies page" />

      <Card className="transition-all mt-4 min-h-[730px]">
        <CardContent className="flex flex-col space-y-1.5 p-6">
          <div className="w-full">
            <div className="flex flex-1 w-full items-center justify-between space-x-2">
              <div className="flex flex-1 w-full gap-2">
                <Input
                  placeholder="Filter agency..."
                  className="focus-visible:ring-0 focus-visible:ring-offset-0 w-1/4"
                />
                <Button
                  variant="outline"
                  onClick={() => setOpenModal((openModal) => !openModal)}
                >
                  <PlusIcon />
                  New Agency
                </Button>
              </div>
            </div>

            {data.length > 0 && (
              <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-4">
                {data.map((agency: AgencyProp, index: number) => (
                  <AgencyCard
                    key={agency.agencyCode}
                    agency={agency}
                    index={index}
                    refreshList={refreshList}
                  />
                ))}
              </div>
            )}

            {data.length === 0 && <EmptyCard message="No agency found." />}

            <AgencyFormModal
              openModal={openModal}
              setOpenModal={setOpenModal}
              type="add"
              refreshList={refreshList}
            />

          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Agencies;
