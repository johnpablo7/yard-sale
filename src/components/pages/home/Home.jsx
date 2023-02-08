import { CardList } from "../../common/CardList";
import { Banner } from "../../shared/Banner";

export const Home = () => {
  // const [products, setProducts] = useState(null)

  // useEffect(() => {
  //   axios.get("http://localhost:3001/products").then(res => setProducts(res.data))
  // }, [])

  return (
    <div>
      <Banner />
      {/* <CardList products={products} /> */}
      <CardList />
    </div>
  );
};
