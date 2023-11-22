import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  // cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  // cilFile,
  // cilLockLocked,
  // cilSettings,
  cilTask,
  // cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'
// import Myprofile from '../Account/Myprofile'

const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-body-secondary fw-semibold py-2">Account</CDropdownHeader>
        <CDropdownItem href="http://localhost:3000/dashboard#/mycommision">
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          My Commission
          <CBadge color="success" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="http://localhost:3000/dashboard#/profile">
          <CIcon icon={cilBell} className="me-2" />Myprofile<CBadge color="info" className="ms-2">42</CBadge>
        </CDropdownItem>
        <CDropdownItem href="http://localhost:3000/dashboard#/setting">
          <CIcon icon={cilTask} className="me-2" />
          Setting
          <CBadge color="danger" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="http://localhost:3000/dashboard#/logout">
          <CIcon icon={cilCommentSquare} className="me-2" />
          logout
          <CBadge color="warning" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        {/* <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem> */}
        {/* <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem> */}
        {/* <CDropdownItem href="#">
          <CIcon icon={cilCreditCard} className="me-2" />
          Payments
          <CBadge color="secondary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem> */}
        {/* <CDropdownItem href="#">
          <CIcon icon={cilFile} className="me-2" />
          Projects
          <CBadge color="primary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem> */}
        <CDropdownDivider />
        {/* <CDropdownItem href="#">
          <CIcon icon={cilLockLocked} className="me-2" />
          Lock Account
        </CDropdownItem> */}
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
