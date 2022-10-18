import Axios from 'axios'
import React, {useState, useEffect} from 'react'

function MyMeetingList(props) {

  const [MyMeeting, setMyMeeting] = useState([])

  const token = localStorage.getItem('Authorization')
  const headers = {
      Authorization: token
  }

  console.log('props', props)
  const MyMeetingsList = props.UserInfo.myMeetingsId
  // console.log(MyMeetingsList)

  async function myMeetingsList() {
    if (MyMeetingsList !== undefined) {
      await Axios
        .get(`https://hoppy.kro.kr/api/meeting/${MyMeetingsList}`, {
          headers,
          withCredentials: false
        })
        .then(response => {
          console.log('response', response)
          if (response.data.status === 200) {
            setMyMeeting(response.data.data)
          }
          else {
            console.log('나의 모임 정보를 불러오지 못했어요!')
          }
        })
    }
  }

  useEffect(() => {
    myMeetingsList()
  }, [])
  

  return (
    <div>
      모임
    </div>
  )
}

export default MyMeetingList