import "../../Styles/topSellingProducts.css";

const products = [
  { name: "ASOS Ridley High Waist", price: 79.49, quantity: 82 },
  { name: "Marco Lightweight Shirt", price: 128.5, quantity: 37 },
  { name: "Half Sleeve  Shirt", price: 39.99, quantity: 64 },
  { name: "Lightweight Jacket", price: 20.0, quantity: 184 },
  { name: "Marco Shoes", price: 79.49, quantity: 64 },
];

const TopSellingProducts = () => {
  return (
    <div className="table-container">
      <h3 className="table-title">Top Selling Products</h3>
      <table className="product-table">
        <thead>
          <tr>
            <th className="align-left">Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, idx) => {
            const amount = (item.price * item.quantity).toFixed(2);
            return (
              <tr key={idx}>
                <td className="align-left">{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>${amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TopSellingProducts;
