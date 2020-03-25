// tslint:disable
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavMenu extends Vue {
    @Prop({ default: [] }) data!: Array<object>;
    @Prop({ default: 'children' }) childrenField!: any;
    @Prop({ default: 'title' }) nameField!: any;
    @Prop({ default: 'path' }) indexField!: any;
    @Prop({ default: 'query' }) queryField!: any;

    onSelect(index: any) {
      this.$router.push({
        query: JSON.parse(index)
      })
    }

    render(h: any) {
      const generateMenuItem = (item: any) => {
        const children = item[this.childrenField];
        if (children) {
          return h(
            'el-submenu',
            {
              props: {
                index: JSON.stringify(item[this.queryField]),
              },
            },
            [
              h(
                'template',
                {
                  slot: 'title',
                },
                [item[this.nameField]]
              ),
            ].concat(children.map((child: any) => generateMenuItem(child)))
          );
        } else {
          return h(
            'el-menu-item',
            {
              props: {
                index: JSON.stringify(item[this.queryField]),
              },
            },
            [item[this.nameField]]
          );
        }
      };
      return h(
        'el-menu',
        {
          props: {
            router: false,
            mode: 'horizontal',
            defaultActive: JSON.stringify(this.$route.query),
            ...this.$attrs,
          },
          on: {
            select: this.onSelect
          }
        },
        this.data.map(node => generateMenuItem(node))
      );
    }
};
