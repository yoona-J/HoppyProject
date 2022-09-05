import React from 'react'
import { Avatar } from 'antd'

function ViewUserPage(props) {

    console.log('props', props)
  
    return (
        <div
            style={{
                textAlign: 'center',
                width: '100%'
            }}>
            <div
                style={{
                    width: '100%',
                    margin: '3rem auto'
                }}>
                <Avatar
                    style={{
                        width: '142px',
                        height: '142px',
                        marginTop: '48px',
                        marginRight: '10px',
                        background: '#A5A5A5'
                    }}
                />
                <p style={{
                        marginTop: '16px'
                    }}>해피 쿼카</p>
                <p
                    style={{
                        textAlign: 'left',
                        margin: '30px 0px 0px 27px',
                        fontSize: '12px',
                        color: '#858585'
                    }}>다른 사람들에게 자신을 소개해주세요!</p>
                <div
                    style={{
                        width: '90%',
                        height: '117px',
                        margin: '18px 20px 0px 20px',
                        padding: '20px 24px 20px 24px',
                        fontSize: '11px',
                        color: '#464646',
                        border: '0.8px solid #A5A5A5',
                        borderRadius: '10px'
                    }}>
                    <div
                        style={{
                            display: 'block',
                            width: '100%',
                            height: '100%',
                            textAlign: 'left',
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-all',
                            overflowY: 'auto'
                        }}>
                        안녕
                    </div>
                </div>
                <p
                    style={{
                        margin: '36px 0px 0px 30px',
                        fontSize: '19px',
                        textAlign: 'left'
                    }}>가입한 모임</p>
                <a href='/mypage/mystory'>
                    <div
                        style={{
                            color: '#858585',
                            marginLeft: '30px',
                            textAlign: 'left'
                        }}>
                        <p
                            style={{
                                margin: '18px 0px 0px 0px',
                                fontSize: '12px',
                                display: 'inline-block'
                            }}>풋살 모임</p>
                        <hr
                            style={{
                                width: '90%',
                                float: 'left',
                                display: 'inline-block'
                            }}/>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ViewUserPage