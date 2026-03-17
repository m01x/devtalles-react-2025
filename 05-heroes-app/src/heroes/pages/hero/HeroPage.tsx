import { useParams } from "react-router";

export const HeroPage = () => {

  const { idSlug = '' } = useParams(); //Parametro que llega desde url , si no viene, undefined.

  return <div>HeroPage</div>;
};
