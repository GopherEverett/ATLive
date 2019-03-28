import styled from 'styled-components'

const BannerStyle = styled.div`
color: orange;
display: flex;
justify-content: space-between;
align-items: center;
background: black;
max-width: 100vw;
height: 70px;
padding: 10px;
p {
  font-family: 'Rock Salt', cursive;
  font-size: 2rem;
  margin: 1.75rem;
  text-shadow: 2px 2px 8px #FF0000;
}
img {
  margin: 1.75rem;
  opacity: 0.9;
  transition: all .2s ease-in-out;
  display: block;
}
img:hover {
  transform: scale(1.1);
  opacity: 1;
}
@media (max-width: 50em) {
  .atlInfo {
  display: none;
    }
}
`
export default BannerStyle