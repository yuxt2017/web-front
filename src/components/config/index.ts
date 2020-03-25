export default {
    captain: 'WEB',
    style: {
        textColor: '#ffffff',
        activeTextColor: '#2d77e6',
        backgroundColor: '#0c253d',
    },
    headerMenus: [
        {
            title: '上菜单1',
            path: '/',
        },
        {
            title: '上菜单2',
            path: '/top',
        },
    ],

    asideMenus: [
        {
            title: '左菜单1',
            path: '/1',
            icon: 'el-icon-s-claim',
            root: true,
            children: [
                {
                    title: '左菜单11',
                    path: '/',
                },
            ],
        },
        {
            title: '左菜单2',
            path: '/2',
            icon: 'el-icon-s-claim',
            root: true,
            children: [
                {
                    title: '左菜单22',
                    path: '/21',
                },
            ],
        },
        {
            title: '左菜单3',
            path: '/3',
            icon: 'el-icon-s-flag',
        },
    ],
};

