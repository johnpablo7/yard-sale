import { CardList } from "../../common/CardList";
import { Menu } from "../../common/Menu";
import { Search } from "../../common/Search";

export const Home = () => {
  return (
    <div className="mt-20">
      <Search />
      <Menu />
      <CardList />
      <CardList />
    </div>
  );
};
