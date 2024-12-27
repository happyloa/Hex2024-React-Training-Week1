export default function ProductList({ products, onProductClick }) {
  return (
    <main className="col-md-6">
      <h2>產品列表</h2>
      <table className="table">
        <thead>
          <tr>
            <th>產品名稱</th>
            <th>原價</th>
            <th>售價</th>
            <th>是否啟用</th>
            <th>查看細節</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.origin_price}</td>
              <td>{item.price}</td>
              <td>{item.is_enabled ? "啟用" : "未啟用"}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => onProductClick(item)}>
                  查看細節
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
