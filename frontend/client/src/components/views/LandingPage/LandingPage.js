import React from 'react'
// import { FaCode } from "react-icons/fa";
import {Button, Input} from 'antd'
import CharacterImg from './img/character.png'
import ArtImg from './img/art.png'
import DailyImg from './img/daily.png'
import ExerciseImg from './img/exercise.png'
import FoodImg from './img/food.png'
import HobbyStoryImg from './img/hobbyStory.png'
import MusicImg from './img/music.png'
import TripImg from './img/trip.png'

function LandingPage() {

    const {Search} = Input

    const onSearch = (value) => console.log(value);

    const hobbyBoxStyle = {
        width: '108px', 
        height: '108px', 
        border: 'solid 0.8px #A5A5A5', 
        borderRadius: '15px', 
        display: 'inline-block',
        margin: '7px',
        padding: '10px'
    }

    const hobbyImageStyle = {
        width: '62px', 
        height: '62px'
    }

    return (
        <div style={{
                textAlign: 'center',
                width: '100%'
            }}>
                <div style={{ width: '100%', margin: '3rem auto' }}>
                    <Search
                        placeholder="찾으시는 취미를 검색해보세요!"
                        onSearch={onSearch}
                        style={{
                            textAlign: 'center',
                            width: '90%'
                        }}
                        // enterButton
                        size='large' />
                    <h4 style={{ textAlign: 'left', color: '#787878', paddingTop: '30px', marginLeft: '27px' }}>취미 카테고리</h4>
                        <div style={hobbyBoxStyle}>운동<img src={ExerciseImg} style={hobbyImageStyle} /></div>
                        <div style={hobbyBoxStyle}>공예<img src={ArtImg} style={hobbyImageStyle} /></div>
                        <div style={hobbyBoxStyle}>음악<img src={MusicImg} style={hobbyImageStyle} /></div>
                        <div style={hobbyBoxStyle}>일상<img src={DailyImg} style={hobbyImageStyle} /></div>
                        <div style={hobbyBoxStyle}>음식<img src={FoodImg} style={hobbyImageStyle} /></div>
                        <div style={hobbyBoxStyle}>여행<img src={TripImg} style={hobbyImageStyle} /></div>
                    <h4 style={{ padding: '35px 0px 10px 0px', marginLeft: '27px', textAlign: 'left', color: '#787878' }}>취미를 함께 할 사람들을 찾아보세요</h4>
                    <div style={{ border: '0.8px solid #A5A5A5', width: '350px', height: '144px', borderRadius: '10px', margin: '0px auto'}}>
                        <div style={{ float: 'left', display: 'inline-block', paddingTop: '28px', paddingLeft: '36px' }}>
                            <p style={{fontSize: '19px', color: '#988165'}}>취미 모임</p>
                            <Button style={{ width: '128px', height: '38px', background: '#D3BA9C', borderRadius: '19px'}}>모임 만들기 ▷</Button>
                        </div>
                        <img src={CharacterImg} style={{ width: '126px', height: '131px', display: 'inline-block'}}/>
                    </div>
                    <h4 style={{ padding: '35px 0px 10px 0px', marginLeft: '27px', textAlign: 'left', color: '#787878' }}>취미를 기록하고 공유해보세요</h4>
                    <div style={{ border: '0.8px solid #A5A5A5', width: '350px', height: '144px', borderRadius: '10px', margin: '0px auto'}}>
                        <div style={{ float: 'left', display: 'inline-block', paddingTop: '28px', paddingLeft: '36px' }}>
                            <p style={{fontSize: '19px', color: '#988165'}}>일상을 기록하는</p>
                            <Button style={{ width: '128px', height: '38px', background: '#D3BA9C', borderRadius: '19px'}}>취미 스토리 ▷</Button>
                        </div>
                        <img src={HobbyStoryImg} style={{ width: '126px', height: '131px', display: 'inline-block'}}/>
                    </div>
                </div>
        </div> 
    )
}

export default LandingPage
