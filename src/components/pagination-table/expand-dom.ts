// tslint:disable
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue/types/umd';

@Component
export default class ExpandDom extends Vue {
    @Prop({ default: null }) row!: any;
    @Prop() renderFn!: Function;
    @Prop({ default: 0 }) index!: Number;
    @Prop({ default: null }) column!: any;

    render(h: CreateElement) {
        const params: any = {
            row: this.row,
            index: this.index
        };
        if (this.column) params.column = this.column;
        return this.renderFn(h, params);
    }
}
