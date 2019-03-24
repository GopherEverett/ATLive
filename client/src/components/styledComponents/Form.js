import styled from "styled-components"

const Form = styled.div`
font-size: 1.5rem;
color: orange;

input {
  width: 200px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding: 5px 5px 5px 5px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  display: block;
  margin: 0 auto;
}
input :focus {
    width: 100%;
  }
`
export default Form