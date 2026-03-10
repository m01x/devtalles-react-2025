import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Busqueda de Super Heroe"
        description="Ingresa algún parámetro"
      />

      {/* Custom Breadcumb */}
      <CustomBreadcrumb />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and Search */}
      <SearchControls />
    </>
  );
};

export default SearchPage;
