// tslint:disable
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AsideMenu extends Vue {
    @Prop({ default: [] }) data!: Array<object>;
    @Prop({ default: 'children' }) childrenField!: any;
    @Prop({ default: 'title' }) nameField!: any;
    @Prop({ default: 'path' }) indexField!: any;
    @Prop({ default: 'icon' }) iconField!: any;
    render(h: any) {
        const generateMenuItem = (item: any) => {
            return [
                h(
                    'template',
                    {
                        slot: 'title',
                    },
                    [
                        h('i', { attrs: { class: [item[this.iconField]] } }),
                        h('span', { slot: 'title' }, [item[this.nameField]]),
                    ]
                ),
            ];
        };

        const generateSubmenu = (item: any) => {
            const children = item[this.childrenField];

            if (children) {
                return h(
                    'el-submenu',
                    {
                        props: {
                            index: item[this.indexField],
                        },
                    },
                    generateMenuItem(item).concat(
                        children.map((child: any) => generateSubmenu(child))
                    )
                );
            } else {
                return h(
                    'el-menu-item',
                    {
                        props: {
                            index: item[this.indexField],
                        },
                    },
                    [h('i', { attrs: { class: item[this.iconField] } }),
                    h('span', { slot: 'title' }, [item[this.nameField]]),]
                    // generateMenuItem(item)
                );
            }
        };

        return h(
            'el-menu',
            {
                props: {
                    router: true,
                    uniqueOpened: true,
                    defaultActive: this.$route.path,
                    ...this.$attrs,
                }
            },
            this.data.map(node => generateSubmenu(node))
        );
    }
};
