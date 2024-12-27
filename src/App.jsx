import { useState } from "react";

import productsData from "./data/products.json";

import "./App.css";

export default function App() {
  const [products] = useState(productsData);
  const [tempProduct, setTempProduct] = useState(null);

  return (
    <section className="container">
      <div className="row mt-5">
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
                      onClick={() => setTempProduct(item)}>
                      查看細節
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
        <aside className="col-md-6">
          <h2>單一產品細節</h2>
          {tempProduct ? (
            <article className="card mb-3">
              <img
                src={tempProduct.imageUrl}
                className="card-img-top primary-image"
                alt="主圖"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {tempProduct.title}
                  <span className="badge bg-primary ms-2">
                    {tempProduct.category}
                  </span>
                </h5>
                <p className="card-text">商品描述：{tempProduct.category}</p>
                <p className="card-text">商品內容：{tempProduct.content}</p>
                <div className="d-flex">
                  <p className="card-text text-secondary">
                    <del>{tempProduct.origin_price}</del>
                  </p>
                  元 / {tempProduct.price} 元
                </div>
                <h5 className="mt-3">更多圖片：</h5>
                <div className="d-flex flex-wrap">
                  {tempProduct.imagesUrl.map((url, index) => (
                    <img key={index} src={url} className="images" />
                  ))}
                </div>
              </div>
            </article>
          ) : (
            <p className="text-secondary">請選擇一個商品查看</p>
          )}
        </aside>
      </div>
    </section>
  );
}
