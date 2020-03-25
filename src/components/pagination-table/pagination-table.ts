// tslint:disable
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import ExpandDom from './expand-dom';

@Component({
    components: {
        ExpandDom
    }
})
export default class PaginationTable extends Vue {
    @Prop({ default: [] }) list!: Array<any>;
    @Prop({ default: {} }) options!: any;
    // @Prop() getList!: Function; // 属于属性 :getList="method"
    @Prop({ default: {} }) pagination!: any;
    @Prop({ default: {} }) columns!: any;
    /*   width:按钮列宽，
        fixed：是否固定（left,right）,
        list 按钮集合 ===
        label: 文本，
        type: 'primary', // 类型（primary / success / warning / danger / info / text
        show: true // 是否显示，
        icon：按钮图标，
        plain: true, // 是否朴素按钮，
        disabled: false, // 是否禁用，
        method：回调方法 */
    @Prop({ default: null }) operates!: any;

    // 多选
    multipleSelection: Array<any> = [];
    private defaultOptions: Object = {
        // maxHeight: 500, // 表格 max-height
        initTable: false, // 是否一进来就加载表格数据
        stripe: false, // 是否为斑马纹 table
        loading: false, // 是否添加表格loading加载动画
        highlightCurrentRow: true, // 是否支持当前行高亮显示
        mutiSelect: false, // 是否支持列表项选中功能
        border: false
    };

    created() {
        // options 处理
        if (this.options.initTable !== false) {
            this.getList()
        }
        // 表格参数默认值
        this.defaultOptions = Object.assign(this.defaultOptions, this.options)
    }
    @Emit('getList') getList(){}; // send 处理给父组件传值的逻辑

    // 切换每页显示的数量;
    handleSizeChange(size: Number) {
        this.pagination.pageSize = size;
        this.getList()
    }
    // 切换页码
    handleIndexChange(current: Number) {
        this.pagination.pageNum = current
        this.getList()
    }
    // 多行选中
    handleSelectionChange(val: any) {
        this.multipleSelection = val
        this.$emit('handleSelectionChange', val)
    }
}