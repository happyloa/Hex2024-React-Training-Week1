// 定義 ProductList 元件，接收兩個 props：
// 1. products: 傳入的產品資料陣列
// 2. onProductClick: 用於回傳使用者點擊某個產品時的操作函式
export default function ProductList({ products, onProductClick }) {
  return (
    // 定義主要區塊，使用 Bootstrap 的 col-md-6 設定寬度
    <main className="col-md-6">
      {/* 顯示標題 */}
      <h2>產品列表</h2>
      {/* 建立表格來呈現產品資訊 */}
      <table className="table">
        {/* 表格的標題列 */}
        <thead>
          <tr>
            <th>產品名稱</th>
            <th>原價</th>
            <th>售價</th>
            <th>是否啟用</th>
            <th>查看細節</th>
          </tr>
        </thead>
        {/* 表格的資料列，根據 products 的每個項目動態生成 */}
        <tbody>
          {products.map((item) => (
            // 每個產品生成一個表格列，並使用 item.id 作為唯一 key
            <tr key={item.id}>
              {/* 顯示產品名稱 */}
              <td>{item.title}</td>
              {/* 顯示產品的原價 */}
              <td>{item.origin_price}</td>
              {/* 顯示產品的售價 */}
              <td>{item.price}</td>
              {/* 判斷產品是否啟用，啟用時顯示 "啟用"，否則顯示 "未啟用" */}
              <td>{item.is_enabled ? "啟用" : "未啟用"}</td>
              {/* 顯示查看細節的按鈕 */}
              <td>
                <button
                  className="btn btn-primary"
                  // 當按鈕被點擊時，觸發 onProductClick，並將對應的產品項目 item 傳回
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
