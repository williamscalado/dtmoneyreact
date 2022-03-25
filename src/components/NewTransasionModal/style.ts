import styled from "styled-components";

export const ConteinerFormModal = styled.form`

    width: 100%;

    h1{
        padding: 1rem;
        font-size: 1.7rem;
    }
    input, select{
        width: 100%;
        padding: 1rem 1rem;
        margin-top: 0.75rem;
        border-radius: 0.25rem;
        border: 0;
        background-color: #E7E9EE;
        box-sizing: border-box;

        &:focus{
            
            border: 1px solid red;
        }
    }
    
    select{

        option{
            padding: 1rem 1rem;
            color: var(--text-title);
            font-weight: 500;
            margin-top: 0.5rem;
            font-size: 1rem;
        }
    }

   
    button[class=sendbuttonmodal]{

        color:#FFF;
        width: 100%;
        border: 0;
        font-weight: 600;
        font-size: 1rem;
        border-radius: 0.5rem;
        height: 4rem;
        margin-top: 1rem;
        background-color: var(--green-select);
        transition: filter 0.3s;

        &:hover{
            filter: brightness(0.9);
        }
    }


`;

export const ConteinerTypeTransasion = styled.div`

    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    margin: 1rem 0 1rem 0;
    


    button{
        padding-top: 1rem;
        display: flex;
        justify-content:center;
        align-content: center;

        border: 1.5px solid #DDD;
        box-sizing: border-box;
        border-radius: 0.25rem;
        height: 4rem;
        font-weight: 600;
        

        img{
            width: 30px;
            height: 30px;
        }

        span{
            display: inline-block;
            margin-left: 1rem;
            color: var(--text-title);
            font-size: 1rem;
        }
    
    &:hover{
       border-color: #aaa;
    }
   
    }
    

   
    
   
`;