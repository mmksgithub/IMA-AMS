// assets
import {IconDeviceDesktop , IconLayout2,IconDashboard, IconLayoutGrid, IconLayoutDashboard} from '@tabler/icons-react';
// constant
const icons = { IconDashboard,IconDeviceDesktop,IconLayout2, IconLayoutGrid, IconLayoutDashboard };


// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'dashboard', // Unique ID for the new dashboard
      title: 'Website', // Display title for the new dashboard
      type: 'item',
      url: 'https://ima-ams.com', // Full external URL
      icon: icons.IconDeviceDesktop, // Reusing the same icon
      breadcrumbs: false,
      target: '_blank' // Ensures the link opens in a new tab

    },
    {
      

      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconLayoutDashboard,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
