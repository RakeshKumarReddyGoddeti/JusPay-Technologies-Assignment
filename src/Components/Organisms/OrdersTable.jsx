import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearch, setSort } from "../../Redux/orderSlice";

import { fetchOrderList } from '../../Thunks/OrderList';
import "../../Styles/orderTable.css";

function OrdersTable() {
  const dispatch = useDispatch();
  const { data, status, search, sort } = useSelector((state) => state.orders);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchOrderList());
    }
  }, [status, dispatch]);

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const handleSort = (e) => {
    dispatch(setSort(e.target.value));
  };

  const filtered = data
    .filter((item) =>
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "asc") return a.id.localeCompare(b.id);
      if (sort === "desc") return b.id.localeCompare(a.id);
      return 0;
    });

  return (
    <div className="orders-container">
      <h3 className="orders"> Orders </h3>
      <div className="controls">
        <input
          type="text"
          placeholder="Search orders..."
          value={search}
          onChange={handleSearch}
        />
        <select value={sort} onChange={handleSort}>
          <option value="none">Sort by</option>
          <option value="asc">Order ID Low → High</option>
          <option value="desc">Order ID High → Low</option>
        </select>
      </div>

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error loading orders</p>}

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Project</th>
            <th>Address</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((order) => (
            <tr key={order.id}>
              <td>#{order.id}</td>
              <td>{order.user}</td>
              <td>{order.project}</td>
              <td>{order.address}</td>
              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
