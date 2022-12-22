import { CardList } from "../../common/CardList";
import { Search } from "../../common/Search";
import { ShoppingCart } from "../../common/ShoppingCart";

export const HomeShopping = () => {
  return (
    <div className="mt-20">
      <Search />
      <ShoppingCart />
      <CardList />
      <CardList />
    </div>
  );
};
