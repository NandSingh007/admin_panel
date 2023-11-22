import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  // cilBell,
  // cilCalculator,
  // cilChartPie,
  // cilCursor,
  // cilDescription,
  // cilDrop,
  // cilNotes,
  // cilPencil,
  cilPuzzle,
  cilSpeedometer,
  // cilStar,
} from '@coreui/icons'
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import { CNavGroup, CNavItem } from '@coreui/react'
// CNavTitle
const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  // {
  //   component: CNavTitle,
  //   name: 'Theme',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },

  {
    component: CNavGroup,
    name: 'Banking Service',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Aebs // Accordion',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'M-Money Transfer // breadcrumbs',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Kotak Bank Account // cards',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Recharge Billpayment',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Mobile',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Electricity',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Dth',
        to: '/base/cards',
      },
    ],
  },
  // {
  //   component: CNavTitle,
  //   name: 'Components',
  // },
  {
    component: CNavGroup,
    name: 'Pancard',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'uti',
        to: '/base/accordion',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Service Link',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'ICIC BANK',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'AXIS BANK',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'CENTRAL BANK OF INIDA',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'UNION BANK OF INIDA',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'ORIENTAL BANK OF COMMERCE',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'BANK OF BARODA',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'PUNJAB NATIONAL BANK',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'YES BANK',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'FEDERAL BANK',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'FINCARE SMALL FINANCE BANK',
        to: '/base/popovers',
      },
      {
        component: CNavItem,
        name: 'IDBI BANK',
        to: '/base/progress',
      },
      {
        component: CNavItem,
        name: 'ANDHRA BANK',
        to: '/base/spinners',
      },
      {
        component: CNavItem,
        name: 'RBL BANK',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'KOTAK MAHINDRA BANK',
        to: '/base/tooltips',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Member',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Master Distributor',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Distributor',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Retailer',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Registerd User',
        to: '/base/carousels',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Fund',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Transfer Return',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Request',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Load Wallet',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Request Report',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'ALL fUND Report',
        to: '/base/collapses',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Aeps Fund',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Request',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Pending Manual Req.',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Pending Payout Req.',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Request Report',
        to: '/base/carousels',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'M-Atm Fund',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Request',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Request Report',
        to: '/base/breadcrumbs',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Agent List',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Request',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Request Report',
        to: '/base/breadcrumbs',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Transfer History',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Aeps Statement',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Billpay Statement',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Money Tranfer statement',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Recharge Statement',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'Uti Pancard Statement',
        to: '/base/list-groups',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Account Statement',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Main Wallet',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Aesp Wallet',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Matm Wallet',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Setup Tools',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Bank Account',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Operator Manger',
        to: '/base/breadcrumbs',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Account Setting',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Profile Setting',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Certificate',
        to: '/base/breadcrumbs',
      },
    ],
  },
  // {
  //   component: CNavGroup,
  //   name: 'Base',
  //   to: '/base',
  //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Accordion',
  //       to: '/base/accordion',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Breadcrumb',
  //       to: '/base/breadcrumbs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Cards',
  //       to: '/base/cards',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Carousel',
  //       to: '/base/carousels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Collapse',
  //       to: '/base/collapses',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'List group',
  //       to: '/base/list-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Navs & Tabs',
  //       to: '/base/navs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Pagination',
  //       to: '/base/paginations',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Placeholders',
  //       to: '/base/placeholders',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Popovers',
  //       to: '/base/popovers',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Progress',
  //       to: '/base/progress',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Spinners',
  //       to: '/base/spinners',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tables',
  //       to: '/base/tables',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tooltips',
  //       to: '/base/tooltips',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Buttons',
  //   to: '/buttons',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Buttons',
  //       to: '/buttons/buttons',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Buttons groups',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Dropdowns',
  //       to: '/buttons/dropdowns',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Forms',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Form Control',
  //       to: '/forms/form-control',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Select',
  //       to: '/forms/select',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Checks & Radios',
  //       to: '/forms/checks-radios',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Range',
  //       to: '/forms/range',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Input Group',
  //       to: '/forms/input-group',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Floating Labels',
  //       to: '/forms/floating-labels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Layout',
  //       to: '/forms/layout',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Validation',
  //       to: '/forms/validation',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Icons',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Notifications',
  //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Toasts',
  //       to: '/notifications/toasts',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Extras',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]

export default _nav
