import styled from 'styled-components'

import Routes from './Routes'
import Header from './components/Header'

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Routes />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #eaeaea;
  height: 100%;
  width: 100%;
  position: absolute;
`

export default App
