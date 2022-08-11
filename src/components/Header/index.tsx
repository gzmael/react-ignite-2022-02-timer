import logo from '../../assets/logo.svg'
import * as S from './styles'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <S.Container>
      <S.Logo>
        <img src={logo} alt="Logo" />
      </S.Logo>
      <nav>
        <NavLink to="/" title="Link">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Link">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </S.Container>
  )
}

export { Header }
