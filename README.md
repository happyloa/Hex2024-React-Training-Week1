![](https://i.imgur.com/MUM85bA.png)

# 六角 2024 React 作品實戰冬季班第一周作業 - 從函式拆解認識設計模式

- [線上部署連結](http://hex2024-react-training-week1.worksbyaaron.com/)
- [作業範例](https://github.com/hexschool/react-training-chapter-2024)

## 使用技術

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)

## 開發環境設置

建議使用 [VSCode](https://code.visualstudio.com/) 搭配 [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## 快速開始

**專案設置（Project setup）**

將專案複製到本地端

```sh
$ git clone https://github.com/happyloa/Hex2024-React-Training-Week1.git
```

套件安裝

```sh
$ cd hex2024-react-training-week1
$ npm install
```

**執行專案（Start the server）**

```sh
$ npm run dev
```

在瀏覽器上輸入

```
http://localhost:5173/
```

即可在本地端預覽專案

## 專案結構

位於 `src`

結構說明

```
src
├── App.jsx                          引入商品資料與商品列表、商品詳細資訊元件的主要元件
├── App.css                          全域樣式。引入並使用思源黑體
└── main.jsx                         React 的主要元件
```

## 元件檔案（Components）

位於 `src/components`

結構說明

```
src/components
├── ProductDetail.jsx                商品詳細資料元件
├── ProductDetail.module.css         商品詳細資料元件的樣式
├── ProductList.jsx                  商品卡片列表元件
└── ProductList.module.css           商品卡片列表元件的樣式
```

## 靜態檔案

位於 `public` 與 `src/data`

結構說明

```
public
├── CNAME                            網站的 DNS CNAME 紀錄
└── favicon.ico                      網站 favicon
```

```
src/data
└── products.json                    所有商品靜態資料
```

## 使用的套件 & 工具

- [gh-pages](https://www.npmjs.com/package/gh-pages)
- [TinyPNG](https://tinypng.com/)
- [ChatGPT 4o](https://openai.com/)
