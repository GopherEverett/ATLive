import styled from "styled-components"

const Form = styled.form`
font-size: 1.5rem;
color: orange;

input {
  width: 100px;
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
input:focus {
    width: 400px;
  }
`
export default Form