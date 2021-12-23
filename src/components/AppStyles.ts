import styled from 'styled-components';

export const Header = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    height:120px;
    position: fixed;
    z-index: 997;
    background-color:#FFF;

    @media (max-width: 1024px) {
        .logo {
            width: 170px;
            height: 10px;
            margin-top: 100px;
        }
    }
    
`;

export const Container = styled.div`
    display:flex;
    justify-content:space-between;
    width: 85%;
    .logo {
        display:flex;
	    align-items:center;
    }
    .logo img {
        width: 120px;
        height: 100px;
    }
    @media (max-width: 768px) {
        
        .logo {
            width: 150px;
            height: 50px;
        }
    }
    @media (max-width: 1024px) {
        .logo { 
            margin: 60px;
        }
    }
    
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;

    nav ul,
    nav li {
        list-style: none;
        margin:0;
        padding:0;
    }

    nav ul {
        display:flex;
    }

    nav a {
        display:block;
        margin-left: 90px;
        padding: 15px;
        color:#000;
        font-family: 'PT Serif', serif;
        font-size: 16px;    
        &:hover {
            text-decoration: underline;
            background-color: #727272;
            color: #FFF;
            border-radius: 5px;
        }
    }
    .menuMobile {
        display:none;
        width:40px;
        height:40px;
        margin-top:40px;
        margin-bottom:40px;
        margin-right:20px;
    }
    
    .mm_line {
        height:3px;
        background-color:#39aae1;
    }
    
    @media (max-width: 1024px) {
        nav a {
            margin-left: 40px;
        }
    }
    @media (max-width: 967px) {
       
        nav a {
            padding-left: 20px;
        }
    }
    @media (max-width: 768px) {
        nav a {
            margin-left: 20px;
        }
    }
    @media (max-width: 880px){
        nav ul {
            flex-direction: column;
            display:none;
            position: absolute;
            left: 0;
            width: 100%;
            background-color: #FFFFFF;
        }
        .menuMobile {
            display:flex;
            flex-direction: column;
            justify-content:space-around;
        }
    }
`;
export const Banner = styled.section`
    
`;


