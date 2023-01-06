import { CardList } from "../../common/CardList";
import { Search } from "../../shared/Search";

export const Home = () => {
  // const [products, setProducts] = useState(null)

  // useEffect(() => {
  //   axios.get("http://localhost:3001/products").then(res => setProducts(res.data))
  // }, [])

  return (
    <div className="mt-20">
      <Search />
      {/* <CardList products={products} /> */}
      <CardList />
    </div>
  );
};
