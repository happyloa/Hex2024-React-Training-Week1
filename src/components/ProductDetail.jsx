import styles from "./ProductDetail.module.css"; // 引入模組化 CSS，控制特定樣式

// 定義 ProductDetail 元件，接收一個 prop：
// 1. tempProduct: 被選中的產品資料，為物件格式
export default function ProductDetail({ tempProduct }) {
  return (
    // 定義側邊區塊，使用 Bootstrap 的 col-md-6 設定寬度
    <aside className="col-md-6">
      {/* 顯示標題 */}
      <h2>單一產品細節</h2>

      {/* 判斷是否有選中的產品資料 */}
      {tempProduct ? (
        // 如果有選中產品，顯示產品細節內容
        <div className="card h-100">
          {/* 主產品圖片 */}
          <img
            src={tempProduct.imageUrl} // 主圖片的來源
            className={styles.detailImg} // 使用自定義樣式
            alt={tempProduct.title} // 圖片替代文字
          />
          {/* 產品主要內容 */}
          <div className="card-body">
            {/* 產品標題和分類 */}
            <h5 className="card-title d-flex align-items-center">
              {tempProduct.title}
              <span className="badge bg-primary ms-2">
                {tempProduct.category}
              </span>
            </h5>
            {/* 使用 ul 和 li 列表來顯示產品的其他細節 */}
            <ul className="list-group list-group-flush">
              {/* 商品描述 */}
              <li className="list-group-item">描述：{tempProduct.category}</li>
              {/* 商品內容 */}
              <li className="list-group-item">內容：{tempProduct.content}</li>
              {/* 價格資訊 */}
              <li className="list-group-item">
                原價：<del>{tempProduct.origin_price}</del> 元
              </li>
              <li className="list-group-item">
                售價：<strong>{tempProduct.price}</strong> 元
              </li>
            </ul>
          </div>
          {/* 顯示更多圖片 */}
          <div className="card-body">
            <h5>更多圖片：</h5>
            <div className="d-flex flex-wrap">
              {/* 動態渲染其他圖片 */}
              {tempProduct.imagesUrl.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`其他圖片 ${index + 1}`}
                  className="rounded me-2 mb-2"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        // 如果沒有選中產品，顯示提示訊息
        <p className="text-secondary">請選擇一個商品來查看</p>
      )}
    </aside>
  );
}
