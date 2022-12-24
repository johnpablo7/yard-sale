import { CardList } from "../../common/CardList";
import { Search } from "../../common/Search";

export const Home = () => {
  return (
    <div className="mt-20">
      <Search />
      <CardList />
      <CardList />
    </div>
  );
};
