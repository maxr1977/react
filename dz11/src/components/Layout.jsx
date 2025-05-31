import CustomNavLink from './CustomNavLink'

const Layout = () => {
  return (
    <nav>
      <ul>
        <li>
          <CustomNavLink parametr={'/'} end>
            Главная
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink parametr={'/articles'} end>
            Статьи
          </CustomNavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Layout
