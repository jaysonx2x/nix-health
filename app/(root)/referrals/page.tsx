import LoadMore from "@/components/shared/LoadMore";
import { fetchAnime } from "./action";
import Header from "@/components/shared/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AnimeCard, { AnimeProp } from "@/components/shared/AnimeCard";

async function ReferralsPage() {
  const data = await fetchAnime(1);
  console.log(data);

  return (
    <>
      <Header title="My Patients" subtitle="This is the patients page" />

      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="text-gray-700"></CardTitle>
        </CardHeader>
        <CardContent className="w-full">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            {data.map((item: AnimeProp, index: number) => (
              <AnimeCard key={item.id} anime={item} index={index} />
            ))}
          </div>
          <LoadMore />
        </CardContent>
      </Card>
    </>
  );
}

export default ReferralsPage;
