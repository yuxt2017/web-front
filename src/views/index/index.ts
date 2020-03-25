// tslint:disable
import { Vue, Component } from "vue-property-decorator";
import PaginationTable from '@/components/pagination-table/pagination-table.vue'

@Component({
    components: {
        PaginationTable
    },
})
export default class Index extends Vue {
    list: Array<any> = [];
    columns: Array<any> = [
        {
            prop: "name",
            label: "员工姓名"
        },
        {
            prop: "idCard",
            label: "身份证号"
        },
        {
            label: "填报信息",
            width: 125,
            render(h: any, params: any): any {
                // return (<el-button type="text" onClick=()=>{}>123</el-button>);
                return h('el-button', {
                    props: {
                        type: 'primary',
                    },
                    on: {
                        click: () => {
                            console.log(params)
                        },
                    }
                }, '填报信息');
            }
        },
    ];
    pagination: any = {
        show: true,
        total: 0,
        pageNum: 1,
        pageSize: 10
    };
    options: any = {
        index: true, //序号
        mutiSelect: false, //序号
        initTable: true //  是否一进来就加载表格数据
    };

    mounted() {
        console.log("mounted", this.$route);
    }

    getList() {
        console.log('getList')
        this.list = [{
            name: '1111',
            idCard: '1111',
            phoneNumber: '1111',
        },{
            name: '1111',
            idCard: '1111',
            phoneNumber: '1111',
        },{
            name: '1111',
            idCard: '1111',
            phoneNumber: '1111',
        },{
            name: '1111',
            idCard: '1111',
            phoneNumber: '1111',
        },{
            name: '1111',
            idCard: '1111',
            phoneNumber: '1111',
        },{
            name: '1111',
            idCard: '1111',
            phoneNumber: '1111',
        },]
        this.pagination.total = 1;
    }
}
