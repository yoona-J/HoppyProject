import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
// import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import AuthRedirectHandler from './views/LoginPage/KakaoLogin/AuthRedirectHandler';
import KakaoLoginPage from './views/LoginPage/KakaoLogin/KakaoLoginPage';
import MyPage from './views/MyPage/MyPage';
import ExitPage from './views/ExitPage/ExitPage';
import ArtMeetingPage from './views/ArtMeetingPage/ArtMeetingPage'
import DailyMeetingPage from './views/DailyMeetingPage/DailyMeetingPage'
import ExerciseMeetingPage from './views/ExerciseMeetingPage/ExerciseMeetingPage'
import FoodMeetingPage from './views/FoodMeetingPage/FoodMeetingPage'
import HobbyStoryPage from './views/HobbyStoryPage/HobbyStoryPage'
import MakeMeetingPage from './views/MakeMeetingPage/MakeMeetingPage'
import MusicMeetingPage from './views/MusicMeetingPage/MusicMeetingPage'
import TripMeetingPage from './views/TripMeetingPage/TripMeetingPage'


//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />

          <Route exact path="/login" component={Auth(KakaoLoginPage, false)} />
          <Route exact path="/oauth/login/kakao" component={Auth(AuthRedirectHandler, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />

          {/* 나중에 null->true로 변경 + userId가 주소값에 할당되게 */}
          <Route exact path="/mypage" component={Auth(MyPage, null)} />
          <Route exact path="/exit" component={Auth(ExitPage, null)} />

          {/* 취미 커뮤니티 */}
          <Route exact path="/artMeeting" component={Auth(ArtMeetingPage, null)} />
          <Route exact path="/dailyMeeting" component={Auth(DailyMeetingPage, null)} />
          <Route exact path="/exerciseMeeting" component={Auth(ExerciseMeetingPage, null)} />
          <Route exact path="/foodMeeting" component={Auth(FoodMeetingPage, null)} />
          <Route exact path="/musicMeeting" component={Auth(MusicMeetingPage, null)} />
          <Route exact path="/tripMeeting" component={Auth(TripMeetingPage, null)} />

          {/* 모임 초대 및 스토리 */}
          <Route exact path="/hobbyStory" component={Auth(HobbyStoryPage, null)} />
          <Route exact path="/makeMeeting" component={Auth(MakeMeetingPage, null)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
