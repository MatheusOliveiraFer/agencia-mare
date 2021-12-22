import styled from 'styled-components';

export const Header = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;

    /* border: 1px solid blue; */
    background-image:url('https://images.unsplash.com/photo-1609079332148-ce057e967197?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    background-size: contain;
    background-color: #3689B8;

    display: flex; 
    align-items:center;
    flex-direction: column;

    .white-box{
        width: 70vw;
        padding: 20px;
        background-color: white;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .header-title{
        font-weight: bold;
        font-size: 20px;
        font-family:'PT Serif', serif;
        color: black;
    }

    .cep-box {
        width: 100%;
        flex-direction: column;
        align-items: center;

        .form-box{
            display: flex;
            flex-direction: column;
        }

        label {
            font-family:'PT Serif', serif;
            font-weight:100;
            font-weight: bold;
            color: #3689B8;
            flex-direction: row;
        }
        input {
            width:100%;
            height:30px;
            border-bottom:2px solid #3689B8;
            /* border-image: linear-gradient(130deg , #3689B8 10%,#ccc 80%) 1; */
            border-radius:2px;
            
        }
        #cep{
            width: 150px;
        }

        
        .required-field{
            display: flex;
            flex-direction: row;
        }
        p{
            color: red;
        }

        .button-box{
            width: 100%;
            display: flex;
            justify-content: center;
        }
        button {
            width: 200px;
            height:40px;
            border-radius: 10px;
            background-color:#3689B8;
            color:#fff;
            box-shadow:2px 1px #ccc;
            display:flex;
            align-items:center;
            justify-content:center;
        }
    }

    .
`;