> 插件由用户[冷鱼与热猫（83354）](https://dao3.fun/profile/83354)投稿
> 收录时间：2024/5/19

插件介绍：

[👍【摄像机弹簧臂】CameraLag](https://www.yuque.com/box3lab/doc/fot9c46s0gihog24?view=doc_embed)


### 构造函数

#### CameraLag(config:[CameraLagConfig](#znJ14)) : CameraLag
**实例化一个弹簧臂控制器**

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| --- | --- | --- | --- | --- |
| config | _是_ | 

 | [CameraLagConfig](#znJ14) | 弹簧壁数据配置 |



### 属性

#### e : [GamePlayer](https://www.yuque.com/box3lab/api/inriuuvzg5yb54kv)
**玩家实体**

---


#### cameraEntity : [GameEntity ](https://www.yuque.com/box3lab/api/crnsxu2gtymwx013)
**充当摄像机的实体**

---


#### delay **: number**
**摄像机呼吸速度，数值越小，速度越快**

---


#### breatheAmplitudeY **: number**
**摄像机Y轴摆动幅度，数值越大摆动越大**

---


#### radiusMultiplierY **: number**
**摄像机Y轴摆动半径倍数，在摆动基础上×对应的倍数**

---


#### breatheAmplitudeX** : number**
**摄像机X轴摆动幅度，数值越大摆动越大**

---


#### radiusMultiplierX** : number**
**摄像机X轴摆动半径倍数，在摆动基础上×对应的倍数**

---


#### breatheAmplitudeZ** : number**
**摄像机Z轴摆动幅度，数值越大摆动越大**

---


#### radiusMultiplierZ** : number**
**摄像机Z轴摆动半径倍数，在摆动基础上×对应的倍数**

---





### 方法

#### play() : void
**开始运行动画**

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


#### setCameraEntityMeshScale(vector3:[GameVector3](https://www.yuque.com/box3lab/api/sug8utrs043aep5v)) : void
**设置摄像机视距**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| vector3 | _是_ | 

 | [GameVector3](https://www.yuque.com/box3lab/api/sug8utrs043aep5v) | 摄像机模型缩放大小 |


---


#### toCameraEntity() : void
**玩家视角切换至摄像机**

---


#### toPlayerEntity()** : void**
**玩家视角切换至玩家本身**

---


#### sete1Position()** : void**
**实体与摄像机位置同步 **


### **接口**

#### CameraLagConfig
**弹簧臂数据配置**

| 参数 | 必填 | _默认值_ | 类型 | 说明 |
| --- | --- | --- | --- | --- |
| entity | 是 | 

 | [GamePlayer](https://www.yuque.com/box3lab/api/inriuuvzg5yb54kv) | 玩家实体 |
| cameraEntity | 是 | 

 | [GameEntity ](https://www.yuque.com/box3lab/api/crnsxu2gtymwx013) | 充当摄像机的实体 |
| cameraDelay | 否 | 0.01 | number | 摄像机呼吸速度，数值越小，速度越快 |
| breatheAmplitudeY | 否 | 20 | number | 摄像机Y轴摆动幅度，数值越大摆动越大 |
| radiusMultiplierY | 否 | 0.3 | number | 摄像机Y轴摆动半径倍数，在摆动基础上×对应的倍数 |
| breatheAmplitudeX | 否 | 60 | number | 摄像机X轴摆动幅度，数值越大摆动越大 |
| radiusMultiplierX | 否 | 0.2 | number | 摄像机X轴摆动半径倍数，在摆动基础上×对应的倍数 |
| breatheAmplitudeZ | 否 | 60 | number | 摄像机Z轴摆动幅度，数值越大摆动越大 |
| radiusMultiplierZ | 否 | 0.2 | number | 摄像机Z轴摆动半径倍数，在摆动基础上×对应的倍数 |


