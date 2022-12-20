import { CardList } from "../../common/CardList";
import { HomeMenu } from "../../common/HomeMenu";
import { Search } from "../../common/Search";

export const Home = () => {
  return (
    <div className="mt-20">
      <Search />
      <HomeMenu />
      <CardList />
      <CardList />
    </div>
  );
};
