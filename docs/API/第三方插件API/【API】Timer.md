> 插件由用户[冷鱼与热猫（83354）](https://dao3.fun/profile/83354)投稿
> 收录时间：2024/3/22

插件介绍：

[【计时器】Timer](https://www.yuque.com/box3lab/doc/ikmxe1bkaiesltrk?view=doc_embed)

### 构造函数

#### Timer() : Timer
**实例化一个时间控制类**


### 属性

#### loop : boolean
**是否循环**

---


#### cd : number
**循环间隔**

---


#### timecount : number
**dt时间总数**

---


#### isStop : boolean
**是否停止运行**

---





### 方法

#### setTimer(cd:number,cb:function,loop?:boolean) : void
**配置计时器**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| cd | _是_ | 

 | number | 循环间隔 |
| cb | _是_ | 

 | function | 自定义回调函数 |
| loop | 

 | _false_ | boolean | 是否开启循环 |


---


#### start() : void
**计时开始**

---


#### update(dt:number) : void
**刷新计时器**

**如果对dt不理解，或感兴趣可以访问**[Unity增量时间Time.deltaTime详解_增量时间是什么意思-CSDN博客](https://blog.csdn.net/ChinarCSDN/article/details/82914420)

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| dt | _是_ | 

 | number | 增量时间（detalTime） |

```javascript
let lastUpdateDate = Date.now();
let dt = 0;
/**主循环,循环执行时间等于 detalTime*1000 毫秒 */
setInterval(() => {
  dt = Date.now() - lastUpdateDate;   //实际刷新时间
  lastUpdateDate = Date.now();
  console.log(dt);
}, 0.0334 * 1000); //模拟30帧一秒
```

---


#### stop() : void
**停止计时器**

