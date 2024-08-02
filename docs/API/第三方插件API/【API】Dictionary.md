> 插件由用户[冷鱼与热猫（83354）](https://dao3.fun/profile/83354)投稿
> 收录时间：2024/3/22

插件介绍：

[【字典】Dictionary](https://www.yuque.com/box3lab/doc/buge3hhi7rcfl30s?view=doc_embed)

### 构造函数

#### Dictionary() : Dictionary
**实例化一个字典管理类**


### 属性

#### datastore : [Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
**数组**


### 方法

#### Add(key:string,value:any) : void
**存入字典**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| key | _是_ | | string | 键 |
| value | _是_ | | any | 值 |


---


#### Remove(key:string) : void
**从字典剔除**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| key | _是_ | | string | 键 |


---


#### TryGetValue(key:string) : any | null
**尝试获取字典中的值**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| key | _是_ | | string | 键 |

**返回值**

| **类型** | **说明** |
| --- | --- |
| any &#124; null | 如果有数据，返回值，没有返回null |


---


#### SetValue(key:string,value:any) : boolean
**通过键修改值**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| key | _是_ | | string | 键 |
| value | _是_ | | any | 值 |

**返回值**

| **类型** | **说明** |
| --- | --- |
| boolean | 是否修改成功 |


---


#### GetKeys() : [Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
**获取所有的键**

**返回值**

| **类型** | **说明** |
| --- | --- |
| array | 键数组 |


---


#### GetValues() : [Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
**获取所有的值**

**返回值**

| **类型** | **说明** |
| --- | --- |
| array | 值数组 |


---


#### ClearAll() : void
**清空字典**
