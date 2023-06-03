import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCtS = [
  { id: 1, price: 5, title: "Book", description: "A book, for reading" },
  { id: 2, price: 1, title: "Pencil", description: "A pencil, for writing" },
  { id: 3, price: 3, title: "Eraser", description: "A eraser, for erasing" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCtS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            price={item.price}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
