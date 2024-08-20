"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import { fetchAnime } from "@/app/(root)/referrals/action";
import PatientCard, { PatientProp } from "../patient/PatientCard";
import CustomSkeleton from "./CustomSkeleton";

let page = 2;

function LoadMore() {
  const { ref, inView } = useInView();

  const [data, setData] = useState<PatientProp[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (inView) {
      setIsLoading(true);
      // Add a delay of 500 milliseconds
      const delay = 100;

      const timeoutId = setTimeout(() => {
        fetchAnime(page).then((res) => {
          setData([...data, ...res]);
          page++;
        });

        setIsLoading(false);
      }, delay);

      // Clear the timeout if the component is unmounted or inView becomes false
      return () => clearTimeout(timeoutId);
    }
  }, [inView, data, isLoading]);
  0;
  return (
    <>
      <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-2">
        {data.map((patient: PatientProp, index: number) => (
          <PatientCard key={patient.id} patient={patient} index={index} />
        ))}
      </div>
      
      <div className="flex justify-center items-center w-full mt-1">
        <div ref={ref}>
          {inView && isLoading && (
            <CustomSkeleton />
          )}
        </div>
      </div>
    </>
  );
}

export default LoadMore;
