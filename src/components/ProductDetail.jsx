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
        <div className="card">
          {/* 主產品圖片 */}
          <img
            src={tempProduct.imageUrl} // 主圖片的來源
            className={styles.detailImg} // 使用自定義樣式來控制圖片的外觀
            alt={tempProduct.title} // 圖片替代文字，對應產品名稱
          />
          {/* 產品主要內容 */}
          <div className="card-body">
            {/* 產品標題和分類 */}
            <h5 className="card-title d-flex align-items-center">
              {tempProduct.title} {/* 顯示產品名稱 */}
              <span className="badge bg-primary ms-2">
                {tempProduct.category} {/* 顯示產品分類 */}
              </span>
            </h5>
            {/* 使用 ul 和 li 列表來顯示產品的其他細節 */}
            <ul className="list-group list-group-flush">
              {/* 商品描述 */}
              <li className="list-group-item">
                描述：{tempProduct.category} {/* 簡要描述產品分類 */}
              </li>
              {/* 商品內容 */}
              <li className="list-group-item">
                內容：{tempProduct.content} {/* 產品的具體內容或規格 */}
              </li>
              {/* 價格資訊 */}
              <li className="list-group-item">
                原價：<del>{tempProduct.origin_price}</del> 元{" "}
                {/* 顯示原價並添加刪除線 */}
              </li>
              <li className="list-group-item">
                售價：<strong>{tempProduct.price}</strong> 元{" "}
                {/* 顯示售價，加強文字效果 */}
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
                  key={index} // 使用索引作為唯一 key
                  src={url} // 圖片的來源
                  alt={`其他圖片 ${index + 1}`} // 圖片的替代文字，標註序號
                  className="rounded me-2 mb-2" // 添加圓角與間距樣式
                  style={{
                    width: "80px", // 設置固定寬度
                    height: "80px", // 設置固定高度
                    objectFit: "cover", // 確保圖片比例不變
                  }}
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
