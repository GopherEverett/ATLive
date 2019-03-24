import styled from 'styled-components'

const Banner = styled.div`
color: orange;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px  solid #f2833a;
background: black;
width: 100vw;
height: 70px;
padding: 10px;
p{
  font-family: 'Rock Salt', cursive;
  font-size: 2rem;
  margin: 10px;
  text-shadow: 2px 2px 8px #FF0000;
}
}
img{
  padding: 10px;
}
@media (max-width: 50em) {
  .atlInfo {
  display: none;
    }
}
`
export default Banner