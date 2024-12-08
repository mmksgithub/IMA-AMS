// assets
import { IconKey } from '@tabler/icons-react';
import { IconList } from '@tabler/icons-react';
// constant
const icons = {
  IconKey , IconList
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Members Area',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Life Members',
      type: 'collapse',
      icon: icons.IconList,

      children: [
        {
          id: 'Add New Member',
          title: 'Add New Member',
          type: 'item',
          url: '/add-member',
          breadcrumbs: true

        },


      



        {
          id: 'Edit Member',
          title: 'Edit Member',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        },
        {
          id: 'View Members',
          title: 'View Members',
          type: 'item',
          url: '/pages/login/login3',
          target: true
        },
        {
          id: 'Member Certificate',
          title: 'Member Certificate',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        }
      ]
    }
  ]
};

export default pages;
