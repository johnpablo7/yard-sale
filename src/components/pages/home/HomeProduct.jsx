import { CardList } from "../../common/CardList";
import { ProductDetails } from "../../common/ProductDetails";
import { Search } from "../../common/Search";

export const HomeProduct = () => {
  return (
    <div className="mt-20">
      <Search />
      <ProductDetails />
      <CardList />
      <CardList />
    </div>
  );
};
