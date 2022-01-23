/* eslint-disable */
import React, {useState} from 'react';
import styled from 'styled-components'

const Nav = () => {

    const [subTitle, setSubTitle] = useState(['하체 운동','가슴 운동','어깨 운동'])
    const [like, setLike] = useState(0);
    const [active, setActive] = useState(false)

    const modal = ['로그인','로그아웃','프로필']

    const modalControl = () =>{
        if(active){
            setActive(false);
        }else{
            setActive(true);
        }
    }

    // const handleClick = () =>{
    //     subTitle.sort()
    //     let newArry = [...subTitle];
    //     newArry[0] = '상체 운동';
    //     setSubTitle(newArry)
    // }
    return (
        <Wrap>
        <div className='black-nav'>
            <div className='title-name'>
                개발 blog
            </div>
        </div>
        <div className='sub-title'>
            <h3>{subTitle[0]} <span className='like-btn' onClick={()=>{setLike(like+1)}}>👍</span>{like}</h3>
            <p>2월 20일</p>
            <hr/>
        </div>
        <div className='sub-title'>
            <h3>{subTitle[1]}</h3>
            <p>2월 21일</p>
            <hr/>
        </div>
        <div className='sub-title'>
            <h3 onClick={()=>{setActive(true)}}>{subTitle[2]}</h3>
            <p>2월 22일</p>
            <hr/>
        </div>
        <button onClick={()=>{setActive(true)}}>벝흔</button>
        {active &&(
            <div className='footer-wrap'>
                <h2>회원</h2>
                {modal.map((mo,i)=>{
                return(
                    <p
                    className='footer-mo'
                    key={i}
                    onClick={
                        modalControl
                    }
                    >
                        {mo}
                    </p>
                )
                })}
            </div>
        )}
        </Wrap>
    );
};

export default Nav;

const Wrap = styled.div`
 .black-nav{
     background-color: black;
     width: 100%;
     display: flex;
     color: white;
     padding: 20px;
     font-weight: bold;
     font-size: 20px;
     .title-name{
         color: coral;
         font-size: 20px;
     }
 }
 .sub-title{
     .like-btn{
         cursor: pointer;
     }
     h3{
         text-align: left;
     }
     p{
         text-align: left;
     }
 }
 .footer-wrap{
     margin: 0 auto;
     margin-top: 20px;
     border: 1px solid gray;
     width: 200px;
     border-radius: 5px;
     .footer-mo{
         width: 100%;
         height: 25px;
         cursor: pointer;
         &:hover{
             color: white;
             background-color: coral;
         }
     }
    }
`