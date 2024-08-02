> 插件由用户[冷鱼与热猫（83354）](https://dao3.fun/profile/83354)投稿
> 收录时间：2024/3/22

插件介绍：

[【房间组队】RoomManager](https://www.yuque.com/box3lab/doc/htwm6iggge1ex98e?view=doc_embed)

### 构造函数

#### RoomManager() : RoomManager
**实例化一个房间管理类**


### 静态方法

#### getInstance() **: RoomManager**
**单例方法，实例化一个房间管理类**


### 属性

#### room : [Dictionary](https://www.yuque.com/box3lab/api/ql2rlmzsruig4w5a)
**房间字典**

---


#### maxMember : number
**单个房间最大支持的人数，满人将不可以进入。**


### 方法

#### join(id:number,entity:[GameEntity](https://www.yuque.com/box3lab/api/inriuuvzg5yb54kv)) : boolean
**配置计时器**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| id | _是_ | 

 | number | 房间ID |
| entity | _是_ | 

 | [GameEntity](https://www.yuque.com/box3lab/api/inriuuvzg5yb54kv) | 玩家对象 |

**返回值**

| **类型** | **说明** |
| --- | --- |
| boolean | 是否成功加入 |


---


#### newr(entity:[GameEntity](https://www.yuque.com/box3lab/api/inriuuvzg5yb54kv)) : number
**新增一个空房间，自己为房主。**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| entity | _是_ | 

 | [GameEntity](https://www.yuque.com/box3lab/api/inriuuvzg5yb54kv) | 玩家对象 |

**返回值**

| **类型** | **说明** |
| --- | --- |
| number | 房间id |


---


#### logout(id:number,entity:[GameEntity](https://www.yuque.com/box3lab/api/inriuuvzg5yb54kv),isHomeowner?:boolean) : void
**退出房间，房主退出将解散房间。**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| id | _是_ | 

 | number | 房间id |
| entity | _是_ | 

 | [GameEntity](https://www.yuque.com/box3lab/api/inriuuvzg5yb54kv) | 玩家对象 |
| isHomeowner | 

 | _false_ | boolean | 是否为房主，如果是将直接解散房间 |


---


#### gameOpen(id:number) : [GameEntity](https://www.yuque.com/box3lab/api/inriuuvzg5yb54kv)[] | false
**游戏开始，并解散房间。**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| id | _是_ | 

 | number | 房间ID |

**返回值**

| **类型** | **说明** |
| --- | --- |
| [GameEntity](https://www.yuque.com/box3lab/api/inriuuvzg5yb54kv)[] &#124; false | 房间里的玩家对象列表 或 无 |


---


#### getLegalRoom() : number | false
**得到最近的一个未满人房间。**

**返回值**

| **类型** | **说明** |
| --- | --- |
| number &#124; false | 房间id 或 无 |


---


#### getRoomMembers(id:number) : [GameEntity](https://www.yuque.com/box3lab/api/inriuuvzg5yb54kv)[] | false
**得到指定房间所有成员对象列表。**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| id | _是_ | 

 | number | 房间ID |

**返回值**

| **类型** | **说明** |
| --- | --- |
| [GameEntity](https://www.yuque.com/box3lab/api/inriuuvzg5yb54kv)[] &#124; false | 玩家对象列表 或 无 |


---


#### getRoomALL() : number[]
**得到当前存在的所有房间。**

**返回值**

| **类型** | **说明** |
| --- | --- |
| number[] | 房间id列表 |


---


#### isRoom(id:number) : boolean
**判断此房间是否存在和未满人。**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| id | _是_ | 

 | number | 房间ID |

**返回值**

| **类型** | **说明** |
| --- | --- |
| boolean | 是否存在此房间且未满人 |


---


#### isRoom(id:number) : boolean
**判断此房间是否存在和未满人。**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| id | _是_ | 

 | number | 房间ID |

**返回值**

| **类型** | **说明** |
| --- | --- |
| boolean | 是否存在此房间且未满人 |



