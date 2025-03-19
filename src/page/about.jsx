import React from 'react'

const about = () => {
  return (
    <div>.navber {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: rgb(84, 192, 219);
        backdrop-filter: blur(15px);
        padding: 5px 30px;
        height: 56px;
        color: white;
        position: sticky;
        top: 0px;
        left: 0px;
        z-index: 10;
        font-size: 1.5rem;
    }
    
    .menuContainer {
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        
    }
    
    .menuActive {
        border-bottom: 3.5px solid white;
    }
    
    .links{
        text-decoration: none;
        font-size: 1.5rem;
        font-size: 15px;
        font-weight: 600;
        padding-inline: 5px;
        color: black;
    } 
    
    @media screen and (max-width: 650px) {
        .navber {
            padding: 5px 20px;
            height: 50px;
            z-index: 10;
        }
    
        .menuContainer {
            position: absolute;
            background-color: black;
            flex-direction: column;
            width: 100%;
            left: 0;
            top: 50px;
            padding-block: 15px;
            display: none;
        }
        
        .menuContainer.active {
            display: flex;
            overflow: hidden;
            background: #121212c1;
            /* background: #121212c1;
            backdrop-filter: blur(25px);*/ 
        }
        
        .profileContainer {
            display: none;
        }
    
        .profileContainer.mobile {
            display: block;
        }
    
        .hamberger {
            display: block;
        }
    }
    
    /*.menuContainer > a {
        font-size: 15px;
        font-weight: 600;
        padding-inline: 5px;
    }*/
    
    .menuActive {
        border-bottom: 2px solid white;
    }
    
    .menuContainer Link {
        font-size: 15px;
        font-weight: 600;
        padding-inline: 5px;
        transition: 0.6s;
    }
    
    .menuContainer>Link:hover {
        color: #0ef;
    }
    
    .menuContainer Link span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: red;
        z-index: -1;
        border-bottom: 2px solid #0ef;
        border-radius: 15px;
    }
    
    /* .profileContainer {
        height: 45px;
        width: 45px;
        aspect-ratio: 1/1;
        border-radius: 50%;
    } */
    .profileContainer>img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        border: 2px solid yellow;
        padding: 3px;
    }
    
    .menu {
        position: absolute;
        background: black;
        height: 70px;
        width: 120px;
        top: 105%;
        right: 7px;
        align-items: center;
        border-radius: 5px;
    }
    
    .menu .menu-item {
        list-style: none;
        padding: 0 5px 0 10px;
        margin-top: 2px;
        cursor: pointer;
    }
    
    .menu-item:hover {
        background: white;
        color: black;
    }
    
    .loginBtn {
        height: 35px;
        padding: 8px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        background: white;
        color: black;
        text-shadow: none;
        box-shadow: 5px 5px 10px #0e0e0e4e;
        cursor: pointer;
        font-weight: 700;
    }
    </div>
  )
}

export default about