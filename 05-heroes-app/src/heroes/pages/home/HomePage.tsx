import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb";
import { getHeroByPageAction } from "@/heroes/actions/get-heroes-by-page.action";


export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "heroes" | "villains"
  >("all");

  //! Podriamos decir que utilizar Effectos para realizar llamadas http con TanStack , ya esta obsoleto.
  // useEffect(() => {
  //   getHeroByPage().then();
  // }, []);

  const { data: heroesResponse } = useQuery({
    queryKey: ['heroes'],                 // identificador de la query.
    queryFn: () => getHeroByPageAction(), //QueryFunction, axios | fetch.
    staleTime: 1000 * 60 * 5,             //5 minutos de cache en la peticion http.
  });



  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Universo de Super Heroes"
          description="Descubre y administra su poders!"
        />

        {/* Custom Breadcumb */}
        <CustomBreadcrumb/>

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              onClick={() => setActiveTab("favorites")}
              className="flex items-center gap-2"
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab("heroes")}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setActiveTab("villains")}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* Mostrar Hero Grid */}
            <HeroGrid heroes={heroesResponse?.heroes ?? [] } />
          </TabsContent>
          <TabsContent value="favorites">
            <h1>Favoritos!!!</h1>
            {/* <HeroGrid /> */}
          </TabsContent>
          <TabsContent value="heroes">
            <h1>heroes!!!</h1>
            {/* <HeroGrid /> */}
          </TabsContent>
          <TabsContent value="villains">
            <h1>villanos!!!</h1>
            {/* <HeroGrid /> */}
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={8} />
      </>
    </>
  );
};
