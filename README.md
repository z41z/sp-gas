# sp-gas

Calc gas range

## Install

``` node
  npm i sp-gas //or yarn add sp-gas
```

## CDN

``` js
  <script src="https://unpkg.com/sp-gas/dist/index.min.js"></script>
  <script>
    let { calcGasRadius } = __Gas
  </script>
```

### Usage
``` js
  let { calcGasRadius } = require("sp-gas")
  let speed = 0 // 泄漏风速
  let radius = 0 // 泄漏开口半径
  let p1 = 3.17 //临界压力
  let p2 = 1393 //两相混合物的平均密度
  let cp = 0.957 //两相混合物比定压热容
  let t = 24.85 //两相混合物温度
  let t0 = -34.15 //液体沸点温度
  let h = 280 //液体汽化热
  let c0 = 890 // 死亡浓度
  let c1 = 300 // 重伤浓度
  let c2 = 90 // 轻伤浓度
  let c3 = 9 // 反应浓度
  let r0 = calcGasRadius(speed, c0, radius,p1, p2, cp, t, t0, h) // 致死半径
  let r1 = calcGasRadius(speed, c1, radius,p1, p2, cp, t, t0, h) // 重伤半径
  let r2 = calcGasRadius(speed, c2, radius,p1, p2, cp, t, t0, h) // 轻伤半径
  let r3 = calcGasRadius(speed, c3, radius,p1, p2, cp, t, t0, h) // 警戒半径
```
## 常见危险气体属性

|气体名|反应浓度|轻伤浓度|重伤浓度|死亡浓度|反应质量分数|重伤质量分数|致死质量分数|标准大气压密度|液化密度|两相混合物比定压热容|两相混合物摄氏度|液体沸点摄氏度|液体汽化热
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|氯气| 9mg/m3|90mg/m3|300mg/m3|890mg/m3|1.4e-7|3.5e-7|9e-4| 3.17kg/m3 | 1393kg/m3 | 0.957 | 24.85 | -34.15 | 280kj/kg |
|氨气| 3mg/m3|180mg/m3|550mg/m3|5000mg/m3|1.4e-7|3.5e-7|9e-4| 0.771kg/m3 | 880kg/m3 | 2.05 | 24.85 | -33.33 | 1336.97kj/kg |
|二氧化硫| 14mg/m3|56mg/m3|280mg/m3|1260mg/m3|1.4e-7|3.5e-7|9e-4| 2.551kg/m3 | 1030kg/m3 | 0.61 | 24.85 | -10 | 297.01kj/kg |
