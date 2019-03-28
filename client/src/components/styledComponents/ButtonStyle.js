import styled from 'styled-components'

const ButtonStyle = styled.button`
  height: 50px;
  width: 150px;
  background-color: black;
  color: white;
  font-family: 'Maven Pro', cursive;
  font-size: 18px;
  text-shadow: 2px 2px 4px #FF0000;
  border: 1px solid black;
  border-radius: 5px;
  margin: 8px;
  :hover {
    box-shadow: 0 0 3px orange;
  }
  :focus {
    outline: 0;
  }
`

export default ButtonStyle