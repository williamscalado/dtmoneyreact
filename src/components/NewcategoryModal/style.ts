import styled from "styled-components";

export const FormModalCategory = styled.form`
margin: 2rem 2rem;
width: 100%;


  input{
    margin: 1rem 0.5rem;
    padding: 0.9rem;
    border: 1px solid #CCC;
    border-radius: 0.5rem;
    width: 100%;
    
  }
  button{
    width: 100%;
    background-color: var(--green-select);
    padding: 1rem;
    border: 0px;
    border-radius: 0.5rem;
    margin: 1rem 0.5rem;

    font-size: 1rem;
    color: #FFF;
    font-weight: 600;
  }
  h1{
    margin: 1rem 0.5rem;
    font-size: 1.5rem;
  }

  .bg-red{
      background-color: var(--red-danger);
      border-color: var(--red);
  }

`;
