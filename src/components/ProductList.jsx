import styles from "./ProductList.module.css";

// 定義 ProductList 元件，接收兩個 props：
// 1. products: 傳入的產品資料陣列
// 2. onProductClick: 用於回傳使用者點擊某個產品時的操作函式
export default function ProductList({ products, onProductClick }) {
  return (
    // 定義主要區塊，使用 Bootstrap 的 col-md-6 設定寬度
    <main className="col-md-6">
      {/* 顯示標題 */}
      <h2>瀏覽產品</h2>
      {/* 使用卡片布局來呈現產品列表 */}
      <div className="row g-3">
        {products.map((item) => (
          // 每個產品生成一個卡片
          <div key={item.id} className="col-12 col-md-6">
            <div className="card h-100">
              {/* 顯示產品主圖片 */}
              <img
                src={item.imageUrl}
                className={styles.cardListImg}
                alt={item.title}
              />
              <div className="card-body">
                {/* 產品名稱 */}
                <h5 className="card-title">{item.title}</h5>
                {/* 價格區域 */}
                <p className="card-text">
                  <small className="text-muted">
                    原價：<del>{item.origin_price}</del> 元
                  </small>
                </p>
                <p className="card-text">
                  售價：<strong>{item.price}</strong> 元
                </p>
                {/* 是否啟用標籤 */}
                <span
                  className={`badge ${
                    item.is_enabled ? "bg-success" : "bg-secondary"
                  }`}>
                  {item.is_enabled ? "啟用" : "未啟用"}
                </span>
              </div>
              <div className="card-footer text-center">
                {/* 查看細節按鈕 */}
                <button
                  className="btn btn-primary"
                  onClick={() => onProductClick(item)}>
                  查看細節
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
