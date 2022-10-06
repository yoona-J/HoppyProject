/* eslint-disable */

import { Avatar, Button, Icon, Drawer } from 'antd'
import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import moment from 'moment'

function DetailStoryPage(props) {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const storyId = props.match.params.storyId

    const [StoryDetail, setStoryDetail] = useState([])

    const token = localStorage.getItem('Authorization')
    const headers = {
        Authorization: token
    }
    async function getStoryDetail() {
        await Axios
        .get(`https://hoppy.kro.kr/api/story/detail?id=${storyId}`, {
            headers,
            withCredentials: false
        })
        .then(response => {
            if (response.status === 200) {
                setStoryDetail(response.data.data)
            } else {
                alert("스토리를 불러오는데 실패했습니다.")
            }
        })
    }

    useEffect(() => {
      getStoryDetail()
    }, [])

    console.log(StoryDetail)

    

    let createDate = StoryDetail.createdDate + ""
    let datestr = createDate.substr(0, 10)
    let timestr = createDate.substr(11, 15)
    let datemoment = moment(datestr, 'YYYY-MM-DD').add('days').format('MM/DD')
    let timemoment = moment(timestr, 'h:mm::ss').format(' h:mm')
    let date = datemoment + timemoment

    const image = () => {
        if(StoryDetail.filename === '' || StoryDetail.filename === undefined) {
            return <>
                <Avatar shape='square' size={340} style={{display: 'none'}} />
            </>
        } else {
            return <>
                <Avatar shape='square' size={340} style={{marginBottom: '10px'}} src={StoryDetail.filename} />
            </>
        }
    }

  return (
    <div style={{width: '90%', margin: '0rem auto'}}>
        <hr style={{width: '100%', backgroundColor: '#D3BA9C', border: 0, height: '1px'}} />
        <div style={{width: '100%', display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'stretch', gap: '5px'}}>
            <Avatar size={27} style={{ marginTop: '11px'}} src={StoryDetail.profileUrl}/>
            <p style={{marginTop: '14px'}}>{StoryDetail.username}</p>
            <p style={{fontSize: '8px', marginLeft: 'auto', paddingTop: '13px'}}>{date}</p>
            <Button style={{ border: 0, outline: 0, color: '#000', padding: 0 }} onClick={showDrawer}>
                <Icon type='more' style={{paddingTop: '13px'}} />
            </Button>
            <Drawer
                title=""
                placement= 'bottom'
                closable={false}
                onClose={onClose}
                visible={visible}
                height={160}
            >
                <Button style={{width: '100%', height: '52px', borderRadius: '13px', marginBottom: '7px'}}>수정하기</Button>
                <Button style={{width: '100%', height: '52px', borderRadius: '13px'}}>삭제하기</Button>
            </Drawer>
        </div>
        <div>
            <div
                style={{
                    display: 'inline-block',
                    width: '100%',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-all',
                }}>
                <p
                    style={{
                        textAlign: 'left',
                        fontSize: '11px',
                    }}>{StoryDetail.title}</p>
                <p
                    style={{
                        textAlign: 'left',
                        fontSize: '9px'
                    }}>{StoryDetail.content}</p>
            </div>
            <div>
                {image()}
            </div>
            <div
                style={{
                    display: 'inline-flex',
                    width: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'stretch',
                    gap: '7px'
                }}>
                <Icon
                    type='heart'
                    style={{
                        fontSize: '16px',
                        marginTop: '7px'
                    }}/>
                <p style={{marginTop: '4px'}}>
                    {StoryDetail.likeCount}
                </p>
                <Icon
                    type='message'
                    style={{
                        fontSize: '16px',
                        marginTop: '7px'
                    }}/>
                <p style={{marginTop: '4px'}}>
                    {StoryDetail.replyCount}
                </p>
                <div style={{
                    fontSize: '21px',
                    marginLeft: 'auto'
                }}>
                    <Icon type='heart' />
                </div>
            </div>
            <hr style={{width: '100%', backgroundColor: '#A5A5A5', border: 0, height: '1px'}} />
        </div>
    </div>
  )
}

export default DetailStoryPage