import IconAntd from '@/components/IconAntd';

export const items: any = [
  {
    label: <span data-tut="reactour__frontend">Frontend team</span>,
    type: 'group',
    children: [
      {
        label: 'Giới thiệu 📑',
        key: '/',
        icon: <IconAntd icon="NodeExpandOutlined" />,
      },
      {
        label: 'Tool 💕',
        key: 'tool',
        icon: <IconAntd icon="ToolOutlined" />,
      },
      {
        label: 'Giúp nhau code 💕',
        key: 'coding',
        icon: <IconAntd icon="CodeOutlined" />,
      },
      {
        label: 'Thành phần',
        key: 'dashboard',
        icon: <IconAntd icon="DashboardOutlined" />,
        children: [
          {
            label: 'Widget',
            key: 'dashboard/widget',
            icon: <IconAntd icon="IdcardOutlined" />,
          },
          {
            label: 'Timeline',
            key: 'dashboard/timeline',
            icon: <IconAntd icon="SlidersOutlined" />,
          },
          {
            label: 'Pricing table',
            key: 'dashboard/pricing',
            icon: <IconAntd icon="ProjectOutlined" />,
          },
          {
            label: 'Layout Form',
            key: 'dashboard/form',
            icon: <IconAntd icon="ProjectOutlined" />,
          },
        ],
      },
      {
        label: 'Component hữu ích',
        key: 'storybook',
        icon: <IconAntd icon="MacCommandOutlined" />,
      },
      {
        label: 'Git work flow',
        key: 'gitWorkFlow',
        icon: <IconAntd icon="NodeIndexOutlined" />,
      },
      {
        label: 'Hàm sử dụng nhiều',
        key: 'function',
        icon: <IconAntd icon="InteractionOutlined" />,
      },
      {
        label: 'Tài liệu',
        key: 'document',
        icon: <IconAntd icon="AccountBookOutlined" />,
      },
    ],
  },
  {
    label: <span data-tut="reactour__backend">Backend team</span>,
    type: 'group',
    key: '/backend',
  },
  {
    label: <span data-tut="reactour__mobile">Mobile team</span>,
    type: 'group',
    key: '/mobile',
  },
];
