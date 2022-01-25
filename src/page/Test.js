/* eslint-disable */
import React, {useState} from 'react';
import styled from 'styled-components'

const Test = () => {

    const [subTitle, setSubTitle] = useState(['하체 운동', '가슴 운동', '어깨 운동'])
    const [like, setLike] = useState([]);
    // map으로 데이터를 돌릴때 각각의 state값을 관리하고자 배열로 디폴트 값을 넣어주고 클릭함수를 만들었다.
    const [active, setActive] = useState(false);
    // 모달 활성화 비활성화를 만들고자 defalut 값을 false로 지정해주고 누를 때마다 항상 반대가 되도록
    // 하였다.(setActive(!active))
    const [clickTitle, setClickTitle] = useState(0);

    // input 입력 값을 state에 저장
    const [inputValue, setInputValue] = useState('')

    const modal = ['로그인', '로그아웃', '프로필'];

    // 불변성 때문에 원본데이터는 건드리면 안되므로 like 원본 배열을 스프레드 문법을 사용하여 새로운 변수에 담아주고 클릭할때마다 각
    // index의 값에 +1이 되도록 하고 setLike에 담아주었다. 그럼 한번 눌릴때마다 like에 +1이 된 값이 담길 것 이다.
    const likeClick = (i) => {
        const newLikeClick = [...like,0];
        newLikeClick[i] += 1;
        setLike(newLikeClick);
    }

    // 내가 한 방법
    // e.target.value의 값을 state에 저장한뒤 스프레드 문법으로 원본 배열과 입력된 state 값을 같은 배열로 수정해 주고 setSubTitle에 
    // 새로만든 변수를 써주었다.
    const storeClick = () =>{
        const newStoreClick = [...subTitle,inputValue]
        setSubTitle(newStoreClick)
    }

    // unshift()문법을 사용한 방법 (array 맨 앞에 자료를 추가하는 문법임)
    const storeClick1 = () =>{
        const newStoreClick = [...subTitle]
        newStoreClick.unshift(inputValue)
        setSubTitle(newStoreClick)
    }


    return (
        <Wrap>
            <div className='black-nav'>
                <div className='title-name'>
                    개발 blog
                </div>
            </div>
            {
                subTitle.map((sb, i) => {
                    return (
                        <div className='sub-title'>
                            <h3
                                onClick={() => {
                                    setClickTitle(i)
                                }}>{sb}
                                <span
                                    className='like-btn'
                                    onClick={()=>{
                                        likeClick(i)
                                    }
                                    }>👍</span>
                                {like[i]}
                            </h3>
                            <p>2월 20일</p>
                            <hr/>
                        </div>
                    )
                })
            }
            {/* <button
                onClick={() => {
                    setClickTitle(0)
                }}>버튼1</button>
            <button
                onClick={() => {
                    setClickTitle(1)
                }}>버튼2</button>
            <button
                onClick={() => {
                    setClickTitle(2)
                }}>버튼3</button>
            <hr/> */}


            
            {/* <input onChange={(e)=>{setInputValue(e.target.value)}}/> */}

            
            <div className='value-store'>
                <input className='value-input' onChange={(e)=>{setInputValue(e.target.value)}}/>
                <button onClick={storeClick}> 저장1 </button>
            </div>

            
            <div className='value-store'>
                <input className='value-input' onChange={(e)=>{setInputValue(e.target.value)}}/>
                <button onClick={storeClick1}> 저장2 </button>
            </div>



            <button
                className='button-wrap'
                onClick={() => {
                    setActive(!active)
                }}>버튼입니다</button>
            {
                active && <div className='footer-wrap'>
                        <h2>{subTitle[clickTitle]}</h2>
                        {
                            modal.map((mo, i) => {
                                return (
                                    <p
                                        className='footer-mo'
                                        key={i}
                                        onClick={() => {
                                            setActive(!active)
                                        }}>
                                        {mo}
                                    </p>
                                )
                            })
                        }
                    </div>
            }
        </Wrap>
    );
};

export default Test;

const Wrap = styled.div `
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
    .value-store{
        display: flex;
        flex-direction: column;
        align-items: center;
        .value-input{
            width: 250px;
            height: 30px;
            margin-bottom: 5px;
            outline: none;
        }
        button{
            margin-bottom: 20px;
            border: 1px solid coral;
            background-color: coral;
            color: yellow;
            cursor: pointer;
            &:hover{
                background-color: yellow;
                color: coral;
            }
        }
    }
    .button-wrap{
     display: block;
     margin: auto;
     background-color: coral;
     border: 1px solid coral;
     border-radius: 2px;
     color: yellow;
     cursor: pointer;
     &:hover{
     background-color: yellow;
     color: coral;
 }
 }
`