import { Avatar, Icon } from 'antd'
import React from 'react'

function MyStoryList() {
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
            <p
                style={{
                    textAlign: 'left',
                    marginLeft: '27px',
                    fontSize: '16px'
                }}>나의 스토리</p>
                <hr style={{width: '90%', backgroundColor: '#D3BA9C'}} />
                <div style={{width: '90%', marginLeft: '20px'}}>
                    <div>
                    <Avatar size={27} style={{float: 'left'}} />
                    <p style={{float: 'left'}}>해피 쿼카</p>
                    <p style={{textAlign: 'right'}}>5/16 22:08</p>
                    </div>
                    <div>
                    <p style={{textAlign: 'left'}}>오늘의 취미 일기</p>
                    <p style={{textAlign: 'left'}}>오늘은 매주 취미활동을 했음!</p>
                    </div>
                    <div>
                    <Icon type='heart' style={{fontSize: '24px', float: 'right'}} />
                    <p>1</p>
                    <Icon type='message' style={{fontSize: '24px'}} />
                    <p>1</p>
                    </div>
                    <div style={{width: '100%', height: '8px', margin: '5px 0px 0px 0px', background: '#F1E3D2'}} />
                </div>
        </div>
    </div>
  )
}

export default MyStoryList