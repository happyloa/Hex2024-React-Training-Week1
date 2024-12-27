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
        <article className="card mb-3">
          {/* 主產品圖片 */}
          <img
            src={tempProduct.imageUrl} // 主圖片的來源
            className="card-img-top primary-image" // Bootstrap 樣式
            alt="主圖" // 圖片替代文字
          />

          {/* 卡片的主要內容區域 */}
          <div className="card-body">
            {/* 產品標題，包含產品名稱和分類 */}
            <h5 className="card-title">
              {tempProduct.title} {/* 產品名稱 */}
              <span className="badge bg-primary ms-2">
                {tempProduct.category} {/* 產品分類 */}
              </span>
            </h5>

            {/* 商品描述（分類名稱） */}
            <p className="card-text">商品描述：{tempProduct.category}</p>

            {/* 商品內容（尺寸或其他細節） */}
            <p className="card-text">商品內容：{tempProduct.content}</p>

            {/* 價格資訊，包括原價與售價 */}
            <div className="d-flex">
              {/* 原價，使用刪除線樣式 */}
              <p className="card-text text-secondary">
                <del>{tempProduct.origin_price}</del>
              </p>
              {/* 售價 */}元 / {tempProduct.price} 元
            </div>

            {/* 顯示更多圖片 */}
            <h5 className="mt-3">更多圖片：</h5>
            <div className="d-flex flex-wrap">
              {/* 動態渲染額外的圖片 */}
              {tempProduct.imagesUrl.map((url, index) => (
                <img
                  key={index} // 使用 index 作為唯一 key
                  src={url} // 圖片來源
                  className="images" // 自訂樣式
                  alt="更多圖片" // 替代文字
                />
              ))}
            </div>
          </div>
        </article>
      ) : (
        // 如果沒有選中產品，顯示提示訊息
        <p className="text-secondary">請選擇一個商品查看</p>
      )}
    </aside>
  );
}
