import React from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';;

function RightMenu(props) {
  
  const logKey = props.location.search
  const splitLogKey = logKey.split('=')
  let jwtToken = splitLogKey[1].slice(0, -6)
  console.log(jwtToken)
  
  // const logoutHandler = () => {
  //   axios.get(`${USER_SERVER}/logout`).then(response => {
  //     if (response.status === 200) {
  //       props.history.push("/login");
  //     } else {
  //       alert('Log Out Failed')
  //     }
  //   });
  // };

  if (jwtToken === undefined) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="logout">
          <a href="/login">로그아웃 ▷</a>
          {/* <a onClick={logoutHandler}>로그아웃 ▷</a> */}
        </Menu.Item>
      </Menu>
    )
  } 
  else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="login">
          <a href="/login">로그인 ▷</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(RightMenu);

