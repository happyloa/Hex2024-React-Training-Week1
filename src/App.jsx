// 引入 React 的 useState hook，用於管理元件狀態
import { useState } from "react";

// 引入自訂的元件：ProductList 用於顯示產品列表，ProductDetail 用於顯示單一產品細節
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

// 引入靜態的商品資料，從 JSON 檔案中導入
import productsData from "./data/products.json";

// 引入全域樣式檔案
import "./App.css";

// 定義主應用程式元件
export default function App() {
  // 使用 useState 初始化產品資料（products），從靜態的 productsData 中取得
  const [products] = useState(productsData);

  // 使用 useState 管理選中的單一產品，初始值為 null
  const [tempProduct, setTempProduct] = useState(null);

  // 元件的 JSX 結構
  return (
    // 外層容器區塊，使用 Bootstrap 的 container 樣式
    <section className="container">
      {/* Bootstrap 的 row 樣式，用於排版 */}
      <div className="row mt-5">
        {/* 傳遞產品資料與點擊事件處理函式給 ProductList 元件 */}
        <ProductList products={products} onProductClick={setTempProduct} />

        {/* 傳遞選中的產品資料給 ProductDetail 元件 */}
        <ProductDetail tempProduct={tempProduct} />
      </div>
    </section>
  );
}
