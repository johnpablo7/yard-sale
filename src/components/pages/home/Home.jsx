// import { useAtomValue } from "jotai";
// import { authAtom } from "../../../store/auth";
import { CardList } from "../../common/CardList";
import { Search } from "../../common/Search";

export const Home = () => {
  // const auth = useAtomValue(authAtom);

  return (
    <div className="mt-20">
      <Search />
      <CardList />
      <CardList />
    </div>
  );
};
