---
title: "如何以餐廳為例來了解網路基礎概念"
cover: "https://miro.medium.com/max/700/0*OugsE36Gqa-MEU_d"
category: "Web"
excerpt: "用一些生活例子來讓大家更了解網路知識。"
date: "2020-08-20"
published: true
featured: false
tags:
  - 中文
---

## 先打預防針

預先假設閱讀此文的人

- 長期使用網路但對相關知識沒有太多了解
- 不想花太多時間點進以下參考連結做深入了解

##### 參考連結

1. [網頁新手入門：初探網頁架構和前後端語言](https://medium.com/appworks-school/%E7%B6%B2%E9%A0%81%E6%96%B0%E6%89%8B%E5%85%A5%E9%96%80-%E5%88%9D%E6%8E%A2%E7%B6%B2%E9%A0%81%E6%9E%B6%E6%A7%8B%E5%92%8C%E5%89%8D%E5%BE%8C%E7%AB%AF%E8%AA%9E%E8%A8%80-a88a5dc86ee3)
2. [從傳紙條輕鬆學習基本網路概念](https://medium.com/@hulitw/learning-tcp-ip-http-via-sending-letter-5d3299203660)
3. [[第六週] 網路基礎-HTTP、Request、Response](https://medium.com/@miahsuwork/%E7%AC%AC%E5%85%AD%E9%80%B1-%E7%B6%B2%E8%B7%AF%E5%9F%BA%E7%A4%8E-http-request-response-7d7e0cb88ed8)
4. [常見與不常見的 HTTP Status Code](https://noob.tw/http-status-code/)
5. [駭客手法之中間人攻擊介紹 — 趨勢科技 Youtube](https://www.youtube.com/watch?v=dJALWxdV8sk)
6. [何為中間人攻擊 ？ — 三甲科技。](https://cms.aaasec.com.tw/index.php/2019/12/03/s-11/)
7. [前端三十｜ 28. [WEB] HTTP 和 HTTPS 的差別是什麼？](https://medium.com/schaoss-blog/%E5%89%8D%E7%AB%AF%E4%B8%89%E5%8D%81-28-web-http-%E5%92%8C-https-%E7%9A%84%E5%B7%AE%E5%88%A5%E6%98%AF%E4%BB%80%E9%BA%BC-21ccafb6f36f)
8. [HTTPS 是如何保证安全的？](https://www.jianshu.com/p/b894a7e1c779)

以這樣的前提來用最白話的方式講解網路基礎概念，所以當中的比喻或內容都非常粗淺，目的是讓大家能夠對網路有進一步的基礎認知且不至於中離此文章！

---

首先，從許多人最常聽到的網頁前後端開始講起，那到底代表什麼意思？

## 餐廳點餐 / 出餐

這邊先引用別人的比喻

> 網頁前端 / 後端 就像 餐廳點餐 / 出餐

> 我們可以很直觀地從字面上了解，前端 (Front-end) 是網頁本身的前台，像點餐櫃檯一樣直接面對使用者對網站的動作。而後端 (Back-end) 則是網頁的後台，接收前端的要求並提供相對應的資料，就像廚房一樣，接受點餐櫃檯傳來的客戶需求，提供相對應的餐點。
>
> 來源：[網頁新手入門：初探網頁架構和前後端語言](https://medium.com/appworks-school/%E7%B6%B2%E9%A0%81%E6%96%B0%E6%89%8B%E5%85%A5%E9%96%80-%E5%88%9D%E6%8E%A2%E7%B6%B2%E9%A0%81%E6%9E%B6%E6%A7%8B%E5%92%8C%E5%89%8D%E5%BE%8C%E7%AB%AF%E8%AA%9E%E8%A8%80-a88a5dc86ee3)

簡單的理解：

- 前端：瀏覽網頁時 看得到的 所有東西，包含文字、顏色、按鈕、選單…等
- 後端：瀏覽網頁時 看不到的 部分，例如接收關鍵字之後幫你找出相關資訊的功能

後面會持續使用餐廳這個比喻，請大家先知道 **網頁前端 / 後端 就像 餐廳點餐 / 出餐** 就好。

---

## 從點餐到出餐

小明向餐廳服務生點餐，櫃台接收到需求後會請廚房製作餐點內容，最後再由服務生出餐給小明。

以這過程類推到我們瀏覽網頁的狀況：

- 客人（小明） => Client 端，也就是使用者的瀏覽器
- 服務生 => Server 端，也就是網站的伺服器
- 廚房 => Database，也就是網站的資料庫系統
- 點餐 => Request，由 Client 端發送出來的訊息
- 出餐 => Response，由 Server 端發送出來的訊息

![](https://miro.medium.com/max/633/0*TWJsefyA70etKzrW.png)

圖源：Django Request and Response Lifecycle

想了解更多發送 Request 和 Response 之間的過程，可參考 [[第六週] 網路基礎-HTTP、Request、Response](https://medium.com/@miahsuwork/%E7%AC%AC%E5%85%AD%E9%80%B1-%E7%B6%B2%E8%B7%AF%E5%9F%BA%E7%A4%8E-http-request-response-7d7e0cb88ed8)

---

## 客人與店家之間的溝通方式

在點餐出餐的過程中可能因為兩方表達方式不同而無法互相溝通，舉例說明：

有天小明去一家小店想要點 `法式蒜香雞丁佐羅勒`，但是餐廳服務生覺得小明來亂的，因為他們沒有這種高級料理，那小明就要換個說法和服務生點`鹹酥雞不要辣加蒜頭跟九層塔`，這樣服務生才會知道小明要什麼，也才能正常出餐給他。

所以客人和店家之間要達成一種默契，就像瀏覽網頁時 Client 端和 Server 端之間存在一種通訊協定（Protocol），而這個通訊協定就是 **HTTP** (HyperText Transfer Protocol)，中文譯作 超文本傳輸協定。

這個 HTTP 我想大家應該不陌生，最常出現在轉貼網址給別人的時候，例如轉貼 Google 網址給別人會出現 https://www.google.com/。

如果你沒恍神的話應該會有疑問：

> 欸？怎麼長得不太一樣，轉貼的網址是 HTTPS 而非 HTTP？

沒錯喔，兩者確實有差異而且加 s 很重要，就連吳宗憲的兒子都知道。

![](https://miro.medium.com/max/700/0*MAnYLSeG6s0ZKBeX.jpg)

來源：[鹿希派被吳宗憲痛罵 卻教起英文：who care 要加 s](https://www.youtube.com/watch?v=xJR0kLHRR6g)

關於 HTTPS 和 HTTP 這兩者的差異，後面會再說明。總而言之，這邊可以簡單理解為

> HTTP 是 Client 和 Server 溝通的語言

想了解 HTTP 更多，可參考 從傳紙條輕鬆學習基本網路概念。

---

## 店家回應的情況

即使小明用正確的方式與服務生溝通，服務生仍會根據實際狀況來給你不同的回應，這邊的回應有可能是 點餐成功給你餐點 也可能是 這邊沒有這道料理。

所以用餐廳的比喻來類推到瀏覽網頁上，服務生的回應類型就可以對應到 HTTP 狀態碼，也就是 **HTTP Status Code**。

- 點餐成功給你餐點 => HTTP Status Code: `200 OK`
- 這邊沒有這道料理 => HTTP Status Code: `404 Not Found`
- 相信你應該也對 404 這東西不陌生，它就是網頁請求失敗時出現的 `404 Not Found`。

![Google 的 404 頁面](https://miro.medium.com/max/698/0*GUXfkCVb8PJW_M-7.JPG)

Google 的 404 頁面

這邊只列兩個 Status Code，當然實際上不只有兩種，有興趣可以參考 [常見與不常見的 HTTP Status Code](https://noob.tw/http-status-code/)。

---

## 外送取餐可能遇到的問題

在疫情肆虐的時期，長期海外留學的但丁因故返台而被要求居家檢疫，為了盡量少接觸其他家人，但媽和但丁約定好想要買什麼東西就寫個便利貼貼在房門口，她看到就會去把東西買好放在房門口。（請先別管他們怎麼不用手機溝通，他們就是便利貼愛好者！）

有天，但丁在網路上看到有人推薦一家名為 FFFF 的薯條專賣店，所以在便利貼上寫了 FFFF 店大薯條一份，貼在房門口之後就倒頭大睡，睡醒來聞到薯條香味就知道但媽已經幫他買好了。

當但丁拿到餐點並享用完後，覺得薯條非常好吃但份量實在很少了！大概就是花台幣 100 元卻只買到麥當當中薯的份量，所以就算他再怎麼喜歡 FFFF 這家的薯條也不好意思要求但媽一直買。

14 天過去了，但丁終於可以出來透透氣！出來閒晃的時候剛好經過 FFFF 薯條店附近，想說來都來了就順便去買份大薯吧！在現場從店家手中拿到大薯之後覺得很不對勁

> 今天的大薯份量也太多了吧？！？！？！

當下他立刻察覺之前請但媽買的大薯一定是被偷吃過！

![](https://miro.medium.com/max/600/1*rHnWy5t5_fXN-c1Js3I9KQ.png)

經過調查之後，發現原來是但丁的哥哥但丙看到薯條擺在房門口，就偷偷抽了一把薯條出來，再放回房門口，所以但丁拿到的薯條份量才會比原本應該拿到的還少！

類比到使用網路上，在資訊傳遞過程中被第三者篡改訊息的情況就叫 中間人攻擊，這邊直接引用趨勢科技的介紹：

> 駭客透過使用者電腦之間的訊息傳送時，於發送與接收端之間暗中竊聽、讀取或篡改訊息的一種網路攻擊手法。
>
> 來源：[駭客手法之中間人攻擊介紹 — 趨勢科技 Youtube](https://www.youtube.com/watch?v=dJALWxdV8sk)

另外再引用三甲科技的介紹

> 中間人攻擊相當多變，但基本上都有共通點，那便是透過冒充身分，使受害者誤認為自己是在與他們所信任的對象進行聯繫。
>
> 來源：[何為中間人攻擊 ？— 三甲科技](https://cms.aaasec.com.tw/index.php/2019/12/03/s-11/)。

---

## 防止食物被偷吃

那究竟要怎麼防止食物被偷吃（資訊被竊聽/篡改）呢？

但丁覺得增加防禦機制應該是最有效的方法，於是他請但媽準備兩把一樣的鑰匙和一個可被那兩鑰匙打開的保險箱，然後但丁和但媽兩人各收著一把鑰匙。（先別管他們為什麼要用這麼原始的方法，他們就是喜歡放東西在保險箱！）

下次再被要求居家檢疫時，但丁就可以把想要的東西寫在一張紙上然後放進保險箱並鎖起來，而但媽因為有同把鑰匙故可以開箱並知道要買什麼，之後把東西買齊再一次放進保險箱，最後但丁就可以用鑰匙開箱來拿東西。這中間過程家中其他人都沒有可以開箱的鑰匙，所以可以確保紙條/食物都沒被別人動過！

在訊息傳遞的機制上增加防禦手段，這就是前面稍微提到的 **HTTPS** (HyperText Transfer Protocol Secure) 的概念，中文譯作 超文本傳輸安全協定。

概念就類似 Client 端和 Server 端都有鑰匙，Client 端先將 Request 資訊加密再發送出來，Server 端收到 Request 再利用鑰匙解密，接著把 Response 加密再發送出來，最後 Client 端再用鑰匙解密。

而如果你用目前新版的 Chrome 來瀏覽網頁，且該網頁只用 HTTP 作為通訊協定，你的網址列就會出現 不安全 的警示。

![](https://miro.medium.com/max/528/1*J3jQUxpq4JHdv0jGJg4jIg.png)

甚至會直接在頁面顯示警示來提醒使用者目前通訊狀況不安全

![](https://miro.medium.com/max/700/0*vdvpJVcS_n-5L6Ra.png)

簡單來說，如果你用 HTTP 來瀏覽網頁，那就形同裸奔。

當然網路傳遞訊息並不真的像但丁和但媽這麼簡單的溝通方式，防止中間人攻擊的方式也複雜得多。

如果想了解 HTTPS 更多，可參考 [前端三十｜ 28. [WEB] HTTP 和 HTTPS 的差別是什麼？](https://medium.com/schaoss-blog/%E5%89%8D%E7%AB%AF%E4%B8%89%E5%8D%81-28-web-http-%E5%92%8C-https-%E7%9A%84%E5%B7%AE%E5%88%A5%E6%98%AF%E4%BB%80%E9%BA%BC-21ccafb6f36f)。

這篇文章利用比較日常的例子，帶你認識

- 網路前端/後端
- Client, Server, Database, Request, Response
- HTTP
- HTTP Status Code
- 中間人攻擊
- HTTPS

再次提醒，這篇文是嘗試用最白話的方式來讓人稍微懂一些網路基礎知識，所以前述的說明還有比喻都不是很嚴謹。如果想了解更多的話，非常推薦閱讀下列的參考連結。

希望此文對你有幫助！

---

##### 參考連結

1. [網頁新手入門：初探網頁架構和前後端語言](https://medium.com/appworks-school/%E7%B6%B2%E9%A0%81%E6%96%B0%E6%89%8B%E5%85%A5%E9%96%80-%E5%88%9D%E6%8E%A2%E7%B6%B2%E9%A0%81%E6%9E%B6%E6%A7%8B%E5%92%8C%E5%89%8D%E5%BE%8C%E7%AB%AF%E8%AA%9E%E8%A8%80-a88a5dc86ee3)
2. [從傳紙條輕鬆學習基本網路概念](https://medium.com/@hulitw/learning-tcp-ip-http-via-sending-letter-5d3299203660)
3. [[第六週] 網路基礎-HTTP、Request、Response](https://medium.com/@miahsuwork/%E7%AC%AC%E5%85%AD%E9%80%B1-%E7%B6%B2%E8%B7%AF%E5%9F%BA%E7%A4%8E-http-request-response-7d7e0cb88ed8)
4. [常見與不常見的 HTTP Status Code](https://noob.tw/http-status-code/)
5. [駭客手法之中間人攻擊介紹 — 趨勢科技 Youtube](https://www.youtube.com/watch?v=dJALWxdV8sk)
6. [何為中間人攻擊 ？ — 三甲科技。](https://cms.aaasec.com.tw/index.php/2019/12/03/s-11/)
7. [前端三十｜ 28. [WEB] HTTP 和 HTTPS 的差別是什麼？](https://medium.com/schaoss-blog/%E5%89%8D%E7%AB%AF%E4%B8%89%E5%8D%81-28-web-http-%E5%92%8C-https-%E7%9A%84%E5%B7%AE%E5%88%A5%E6%98%AF%E4%BB%80%E9%BA%BC-21ccafb6f36f)
8. [HTTPS 是如何保证安全的？](https://www.jianshu.com/p/b894a7e1c779)
