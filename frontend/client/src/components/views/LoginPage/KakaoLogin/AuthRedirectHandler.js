import Axios from 'axios'
import React from 'react'

Axios.defaults.withCredentials = true;

function AuthRedirectHandler(props) {

    // console.log('props', props)
    const logKey = props.location.search
    // console.log(logKey)
    const splitLogKey = logKey.split('=')
    // console.log(splitLogKey[1])
    let jwtToken = splitLogKey[1].slice(0, -6)
    console.log(jwtToken)

    const loginSuccess = () => {
      if (jwtToken === undefined) {
          console.log('로그인에 실패했습니다.')
          delete Axios.defaults.headers.common['Authorization'];
          return <React.Fragment>
            <p>로그인 실패 ㅠ</p>
            </React.Fragment>
      } else {
          console.log('로그인에 성공하였습니다.')
          Axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
          return <React.Fragment>
            <p>로그인 성공! {jwtToken}</p>
            </React.Fragment>
      }
    }

  return (
    <div>
      {loginSuccess()}
    </div>
  )
}

export default AuthRedirectHandler