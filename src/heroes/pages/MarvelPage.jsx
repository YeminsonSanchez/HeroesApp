import { HeroList } from "../components";

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvels Commics</h1>
      <hr />
      <HeroList publisher={"Marvel Comics"} />
    </>
  );
};
