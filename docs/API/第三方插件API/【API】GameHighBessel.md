> 插件由用户[冷鱼与热猫（83354）](https://dao3.fun/profile/83354)投稿
> 收录时间：2024/5/19

插件介绍：

[👍【摄像机高阶贝塞尔】GameHighBessel](https://www.yuque.com/box3lab/doc/gieso7vr1fy0oymw?view=doc_embed&inner=X9q4u)


### 构造函数

#### GameHighBessel(config:[GameHighBesselConfig](#znJ14)) : GameHighBessel
**实例化一个贝塞尔控制器**

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| --- | --- | --- | --- | --- |
| config | _是_ | 
| [GameHighBesselConfig](#znJ14) | 贝塞尔数据配置 |



### 属性

#### linear : number | null
**缓动方式：1,2,3,null  逐步加速，逐步减速等**

---


#### e : [GamePlayer](https://www.yuque.com/box3lab/api/inriuuvzg5yb54kv)[]
**批量观看该动画的玩家列表**

---


#### cameraEntity : [GameEntity ](https://www.yuque.com/box3lab/api/crnsxu2gtymwx013)
**充当摄像机的实体**

---


#### delay **: number**
**每x毫秒刷新一次摄像机位置**

---


#### offset_X** : number**
**X轴偏移量**

---


#### offset_Y** : number**
**Y轴偏移量**

---


#### offset_Z** : number**
**Z轴偏移量**


### 方法

#### play(speed:number) : void
**开始运行动画**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| speed | _否_ | _10_ | number | 每次刷新前进的速度，值越大速度越快 |


---


#### pause(b:boolean) : void
**停止运行动画**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| b | _否_ | _False_ | boolean | 是否销毁摄像机实体 |


---


#### hideMesh(b:boolean) : void
**显示隐藏摄像机实体**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| b | _否_ | _False_ | boolean | 是否隐藏摄像机实体 |


---


#### toCameraEntity() : void
**玩家视角切换至摄像机**

---


#### toPlayerEntity()** : void**
**玩家视角切换至玩家本身**

---


#### click()** : void**
**检查移动轨迹，用于测试环境中参考**

---


#### 事件onFinish(handler:() => void) : void
**获取数据内容时触发的的事件**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| handler | _是_ | 
| function | 监听得到动画播放完毕的处理的函数 |



### **接口**

#### GameHighBesselConfig
**贝塞尔数据配置**

| 参数 | 必填 | 默认值 | 类型 | 说明 |
| --- | --- | --- | --- | --- |
| entity | 是 | | [GamePlayer](https://www.yuque.com/box3lab/api/inriuuvzg5yb54kv)[] | 批量观看该动画的玩家列表 |
| cameraEntity | 是 | | [GameEntity](https://www.yuque.com/box3lab/api/crnsxu2gtymwx013)  | 充当摄像机的实体 |
| linear | | null | number | 缓动方式：1,2,3,null  逐步加速，逐步减速等 |
| delay | | 10 | number | 每x毫秒刷新一次摄像机位置 |
| offset | | [0, 0, 0] | [x,y,z] | 轴偏移量，在原本位置坐标基础上进行偏移 |