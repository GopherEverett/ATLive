import styled from "styled-components"

const Form = styled.form`
font-size: 1.5rem;
font-family: 'Maven Pro', cursive;
text-shadow: 2px 2px 4px gray;
color: orange;

input {
text-align: center;
width: 150px;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
font-size: 24px;
padding: 5px;
-webkit-transition: width 0.4s ease-in-out;
transition: width 0.4s ease-in-out;
display: block;
margin: 5px auto;
}
input:focus {
    outline: none;
    width: 400px;
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
}
`
export default Form