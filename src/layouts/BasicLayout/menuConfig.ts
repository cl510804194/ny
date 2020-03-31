const headerMenuConfig = [];

const asideMenuConfig = [
  {
    name: '能耗数据分析',
    icon: 'chart-pie',
    children: [
      {
        path: '/energy/monitor',
        name: '实时能耗监测'
      },
      {
        path: '/energy/apicheck',
        name: '能耗KPI考核'
      },
      {
        path: '/energy/carbon',
        name: '碳排放核算'
      }
    ]
  },
  {
    name: '设备健康管理',
    icon: 'set',
    children: [
      {
        path: '/collect',
        name: '设备健康管理汇总'
      },
      {
        path: 'fan',
        name: '1#风机'
      }
    ]
  },
  {
    name: '电能专项评估',
    icon: 'calendar',
    children: [
      {
        path: '/electric/collect',
        name: '电能质量监测'
      },
      {
        path: '/electric/fan',
        name: '电能质量汇总'
      }
    ]
  },
  {
    name: '负荷预测',
    icon: 'edit',
    children: [
      {
        path: '/load/forecast',
        name: '电力负荷预测'
      }
    ]
  },
  {
    name: '需量管理',
    icon: 'picture',
    children: [
      {
        path: '/need/collect',
        name: '实时需量监测'
      },
      {
        path: '/need/suggest',
        name: '月度需量建议'
      }
    ]
  },
  {
    name: '模拟工具',
    icon: 'eye',
    children: [
      {
        path: '/simulate',
        name: '模拟'
      }
    ]
  },
  {
    name: '多能互补策略',
    icon: 'account',
    children: [
      {
        path: '/tactics/users',
        name: '异常用户列表'
      }
    ]
  },
  {
    name: '地图',
    icon: 'ellipsis',
    children: [
      {
        path: '/map',
        name: '地图详情'
      }
    ]
  }

  // {
  //   name: 'About',
  //   path: '/about',
  //   icon: 'chart-pie'
  // },
  // {
  //   name: 'Angular',
  //   icon: 'set',
  //   children: [
  //     {
  //       path: '/angular',
  //       name: 'router contact'
  //     },
  //     {
  //       path: '/angular/detail',
  //       name: 'router detail'
  //     }
  //   ]
  // },
  // {
  //   name: '商家平台',
  //   icon: 'atm',
  //   children: [
  //     {
  //       path: '/seller',
  //       name: '商家首页'
  //     },
  //     {
  //       path: '/seller/list',
  //       name: '商家列表'
  //     },
  //     {
  //       path: '/seller/detail',
  //       name: '商家详情'
  //     },
  //     {
  //       path: '/seller/404',
  //       name: '商家 404'
  //     }
  //   ]
  // },
  // {
  //   name: '小二平台',
  //   icon: 'account',
  //   children: [
  //     {
  //       path: '/waiter',
  //       name: '小二首页'
  //     },
  //     {
  //       path: '/waiter/list',
  //       name: '小二列表'
  //     },
  //     {
  //       path: '/waiter/detail',
  //       name: '小二详情'
  //     },
  //     {
  //       path: '/waiter/404',
  //       name: '小二 404'
  //     }
  //   ]
  // }
];

export { headerMenuConfig, asideMenuConfig };
