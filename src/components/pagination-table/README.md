参数说明


list : 表格数据

getList: 获取表格数据的方法

注意loading控制 存放在表格参数 options 里面



options：表格参数

initTable ： 是否默认加载数据 不加载则在  options 中添加为false
maxHeight ： 表格最大高度 Number 默认500
stripe ： 是否为斑马纹 默认false
loading ： 请求数据的加载动画 true

highlightCurrentRow ： 是否支持当前行高亮显示 默认true
mutiSelect ： 是否支持列表项选中功能 默认false
border: 是否为边框表格 默认false



columns ：列数据参数

prop ： 对应列内容的字段名 【必选】

label ： 显示的标题 【必选】

align ： 对齐方式
width ： 列宽度
fixed ：列固定方式
formatter ： 渲染数据的函数
render ： 渲染表格的组件的函数 jsx语法




pagination ： 分页信息

show ： 控制分页是否显示

total ： 表格数据总条数

pageNum ： 当前页码

pageSize ： 每页显示条目个数

pageSizeArr： 控制表格的每页显示条目个数




operates : 操作行

width ： 宽度
fixed ：固定位置
list : 存放按钮信息的数组

label ：按钮标签
type ： 按钮类型
icon ： icon
plain ： 是否为朴素按钮
disabled ： 是否禁用
method ： 回调方法