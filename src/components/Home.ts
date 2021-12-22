import styled from 'styled-components';

export const Header = styled.div`
    display:flex;
    justify-content:center;
    height:677px;
`;

export const Container = styled.div`
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    

    .content-left {
        width: 45%;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }
    .title {
        font-size: 90px;
        font-family: 'PT Serif', serif;
        line-height: 80px;
    }
    .copy {
        width:  500px;
        font-size: 20px;
        margin: 20px 0px;
    }

    .content-right {
        width: 55%;
        height: 500px;
        // background-image: url('./src/images/time.jpg');
        // background-position: center;
        // background-size: cover;

        display: flex;
        justify-content: right;
        align-items: center;
    }
    .content-right img {
        width: 90%;
        /* height: 70%; */
    }
    .contact {
        diplay: flex;
    }
    .seejobs {
        background-color: #55BDD8;
        padding: 10px 40px;
        color: #FFF;
        margin-right: 20px;
        font-family: 'PT Serif', serif;
        font-size: 17px;
        font-weight: bold;
    }
    .gocontact a {
        background-color: #FFF;
        padding: 7px 40px;
        color: #55BDD8;
        border: 3px solid #55BDD8;
        font-family: 'PT Serif', serif;
        font-size: 17px;
        font-weight: bold;
    }
    .gocontact a:hover{
        background-color: #55BDD8;
        color: #FFF;
    }
    @media (max-width: 1190px) {
        .title {
            font-size: 75px;
        }
        .copy {
            width: 450px;
        }
    }
    @media (max-width: 1123px) {
        .seejobs {
            margin-right: 10px;
        }
    }

   
    @media (max-width: 1095px) {
         .contact {
            justify-content: center;
            align-items: center;
            margin-left: 100px;
        }
        .seejobs {
            margin-bottom: 20px;
            margin-left: 20px;
        }
    }
    @media(max-width: 1044px) {
        flex-direction: column;
        text-align: center;
        .content-right {
            width: 100%;
            
        }
        .content-left {
            width: 100%;
            
        }
        .content-right img {
            display: none;
        }
        .title {
            margin-top: 120px;
        }
        .copy {
            margin-top: 40px;
            width: 100%;
        }
        .seejobs {
            margin-top: 40px;
            margin-left: -110px;
        }
        
    }

    @media (max-width: 1024px) {
        .title {
            font-size: 60px;
        }
        .copy {
            width: 350px;
            font-size: 15px;
        }
        .content-right img {
            margin-top: 100px;
        }
        .seejobs{
            margin-bottom: 40px;
        }
    
        @media (max-width: 1256px) {
            .content-left{
                background-color: black;
            }
    }
    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 100px;
        justify-content: center;
        align-items: center;
        text-align: center;
        .title {
            width: 500px;
            font-size: 40px;
            margin-left: -85px; 
        }
        .content-right img {
            display: none;
        }
        
    }
`;

export const OurJobs = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .content-jobs-title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 42px;
    }
    .jobs {
        width: 100%;
        height: 500px;
        background-color: #50B7D8;
        margin-top: -400px;
    }
    .jobs-demo {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        position: relative;
    }
    .modelo {
        width: 300px;
        height: 250px;
        background-color: #FFF;
        margin-right: 40px;
        margin-bottom: 40px;
        border-radius: 5px;
        box-shadow: 2px 5px 8px #606266;
        display: flex;
        align-items: center;
        flex-direction: column;

        .modeloHeader1 {
            width: 100%;
            height: 70%;
            background-image: url('./src/images/01.jpg');
            background-position: center;
            background-size: cover;
            background-position: cover;
            border-top-right-radius: 5px;
            border-top-left-radius: 5px;
            cursor: pointer;
        }
        .modeloHeader2 {
            width: 100%;
            height: 70%;
            background-image: url('./src/images/02.jpeg');
            background-position: center;
            background-size: cover;
            background-position: cover;
            border-top-right-radius: 5px;
            border-top-left-radius: 5px;
            cursor: pointer;
        }
        .modeloHeader3 {
            width: 100%;
            height: 70%;
            background-image: url('./src/images/03.jpg');
            background-position: center;
            background-size: cover;
            background-position: cover;
            border-top-right-radius: 5px;
            border-top-left-radius: 5px;
            cursor: pointer;
        }
        .modeloHeader4 {
            width: 100%;
            height: 70%;
            background-image: url('./src/images/04.jpg');
            background-position: center;
            background-size: cover;
            background-position: cover;
            border-top-right-radius: 5px;
            border-top-left-radius: 5px;
            cursor: pointer;
        }
        .modeloHeader5 {
            width: 100%;
            height: 70%;
            background-image: url('./src/images/05.jpg');
            background-position: center;
            background-size: cover;
            background-position: cover;
            border-top-right-radius: 5px;
            border-top-left-radius: 5px;
            cursor: pointer;
        }
        .modeloHeader6 {
            width: 100%;
            height: 70%;
            background-image: url('./src/images/06.jpg');
            background-position: center;
            background-size: cover;
            background-position: cover;
            border-top-right-radius: 5px;
            border-top-left-radius: 5px;
            cursor: pointer;
        }
        .modeloFooter {
            width: 60%;
            height: 20%;
            margin-top: 10px;
            background-color: #3689B8;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #FFF;
            font-size: 18px;
            cursor: pointer;
        }

    }

    @media (max-width: 1024px) {
        margin-top: -210px;
        
        .jobs-demo {
            padding-left: 40px;
        }
        .jobs {
            margin-top: -800px;
            height: 800px;
        }
    }
    @media (max-width: 1043px) {
        .jobs-demo {
            padding-left: 0px;
        }
        .jobs {
            margin-top: -700px;
            height: 700px;
        }
    }
    @media (max-width: 1044px) {
        margin-top: -100px;

        .content-jobs-title {
            margin-bottom: 30px;
        }
    }

    @media ( max-width: 1079px) {
        .jobs-demo {
            margin-left: 40px;

        }
    }
    
`;

    




