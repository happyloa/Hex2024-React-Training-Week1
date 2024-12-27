import styles from "./ProductList.module.css"; // 引入模組化 CSS，控制特定樣式

// 定義 ProductList 元件，接收兩個 props：
// 1. products: 傳入的產品資料陣列
// 2. onProductClick: 用於回傳使用者點擊某個產品時的操作函式
export default function ProductList({ products, onProductClick }) {
  return (
    // 外層主要容器，使用 Bootstrap 的 col-md-6 控制寬度
    <main className="col-md-6">
      {/* 顯示標題 */}
      <h2>瀏覽產品</h2>
      {/* 使用無樣式列表 (ul) 並搭配 d-flex 和 flex-wrap 排版 */}
      <ul className="list-unstyled d-flex flex-wrap align-items-start">
        {/* 動態生成每個產品的卡片，使用 map 迭代產品列表 */}
        {products.map((item) => (
          // 每個產品作為一個列表項目 (li)，並設置唯一的 key
          <li key={item.id} className="p-2 col-12 col-md-6">
            {/* 卡片結構，使用 Bootstrap 樣式 */}
            <div className="card h-100">
              {/* 卡片的圖片部分 */}
              <img
                src={item.imageUrl} // 圖片來源
                className={styles.cardListImg} // 自訂樣式
                alt={item.title} // 替代文字，對應產品名稱
              />
              {/* 卡片的內容部分 */}
              <div className="card-body">
                {/* 產品名稱 */}
                <h5 className="card-title">{item.title}</h5>
                {/* 原價區域，使用刪除線樣式 */}
                <p className="mb-1 text-muted">
                  原價：<del>{item.origin_price}</del> 元
                </p>
                {/* 售價區域，使用加粗字體 */}
                <p className="mb-1">
                  售價：<strong>{item.price}</strong> 元
                </p>
                {/* 啟用狀態標籤，動態切換樣式 */}
                <span
                  className={`badge ${
                    item.is_enabled ? "bg-success" : "bg-secondary"
                  }`}>
                  {item.is_enabled ? "啟用" : "未啟用"}
                </span>
              </div>
              {/* 卡片的底部，包含操作按鈕 */}
              <div className="card-footer text-center">
                {/* 查看細節按鈕 */}
                <button
                  className="btn btn-primary"
                  onClick={() => onProductClick(item)} // 點擊按鈕時傳入產品資料
                >
                  查看細節
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
