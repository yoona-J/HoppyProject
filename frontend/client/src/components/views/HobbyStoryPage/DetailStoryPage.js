import { Avatar, Icon } from 'antd'
import React from 'react'

function DetailStoryPage(props) {

    console.log(props)

    // const storyCard = StoryList.map((story, index) => {

    //     console.log('story', story)

    //     let createDate = story.createdDate
    //     let datestr = createDate.substr(0, 10)
    //     let timestr = createDate.substr(11, 15)
    //     let datemoment = moment(datestr, 'YYYY-MM-DD').add('days').format('MM/DD')
    //     let timemoment = moment(timestr, 'h:mm::ss').format(' h:mm')
    //     let date = datemoment + timemoment

    //     const image = () => {
    //         if(story.filename === '' || story.filename === undefined) {
    //             return <>
    //                 <Avatar shape='square' size={340} style={{display: 'none'}} />
    //             </>
    //         } else {
    //             return <>
    //                 <Avatar shape='square' size={340} style={{marginBottom: '13px'}} src={story.filename} />
    //             </>
    //         }
    //     }

  return (
    <div style={{width: '90%', margin: '0rem auto'}}>
        <div>
            <hr style={{width: '100%', backgroundColor: '#D3BA9C', border: 0, height: '1px'}} />
            <Avatar size={27} style={{ marginTop: '11px', float: 'left', marginRight: '8px'}}/>
            <p style={{float: 'left', marginTop: '13px'}}>나야나</p>
            <p style={{textAlign: 'right', fontSize: '8px', marginTop: '24px'}}>08/19</p>
            {/* <Icon type='more' style={{float: 'left'}} /> */}
        </div>
        <div>
            <div
                style={{
                    display: 'inline-block',
                    width: '100%',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-all'
                }}>
                <p
                    style={{
                        textAlign: 'left',
                        fontSize: '11px'
                    }}>text</p>
                <p
                    style={{
                        textAlign: 'left',
                        fontSize: '9px'
                    }}>hihihihiih</p>
                    {/* {image()} */}
            </div>
        </div>
    </div>
  )
}

export default DetailStoryPage