import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { Button, Container } from 'react-bootstrap'
import Breadcrumb from '@layout/AdminLayout/Breadcrumb/Breadcrumb'
import HeaderFeaturedNav from '@layout/AdminLayout/Header/HeaderFeaturedNav'
import HeaderNotificationNav from '@layout/AdminLayout/Header/HeaderNotificationNav'
import HeaderProfileNav from '@layout/AdminLayout/Header/HeaderProfileNav'
import { DatePicker, Select } from 'antd';
import dayjs from 'dayjs';
type HeaderProps = {
  toggleSidebar: () => void;
  toggleSidebarMd: () => void;
}

export default function Header(props: HeaderProps) {
  const { toggleSidebar, toggleSidebarMd } = props

  return (
    <header className="header sticky-top mb-4 py-2 px-sm-2 border-bottom">
      <Container fluid className="header-navbar d-flex align-items-center">
        <Button
          variant="link"
          className="header-toggler d-md-none px-md-0 me-md-3 rounded-0 shadow-none"
          type="button"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <Button
          variant="link"
          className="header-toggler d-none d-md-inline-block px-md-0 me-md-3 rounded-0 shadow-none"
          type="button"
          onClick={toggleSidebarMd}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <Link href="/" className="header-brand d-md-none">
          <svg width="80" height="46">
            <title>CoreUI Logo</title>
            <use xlinkHref="/assets/brand/coreui.svg#full" />
          </svg>
        </Link>
        <div className="header-nav d-none d-md-flex">
          {/* <HeaderFeaturedNav /> */}
          <Container fluid>
        <Breadcrumb />
      </Container>
        </div>
        {/* make it center */}
        <div className="header-nav ms-auto">
          <img src="/assets/brand/logo.png" alt="CoreUI Logo" width={35} height={35} />
        </div>
        <div className="header-nav ms-auto">
          <HeaderNotificationNav />
        </div>
        <div className="header-nav ms-2">
          <HeaderProfileNav />
        </div>
      </Container>
      {/* <div className="header-divider border-top my-2 mx-sm-n2" /> */}
      {/* use datepicker which default is today*/}
      {/* <DatePicker defaultValue={dayjs()} /> */}
      {/* create selection */}
      {/* <Select defaultValue="CX4432" style={{ width: 120, marginLeft: 5}}>
        <Select.Option value="CX4432">CX118</Select.Option>
        <Select.Option value="CX7894">CX218</Select.Option>
        <Select.Option value="CX3284">CX346</Select.Option>
      </Select> */}



    </header>
  )
}
