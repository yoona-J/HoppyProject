import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { isBrowser, BrowserView, MoblieView } from "react-device-detect";

import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";

import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import NotificationPage from "./views/NotificationPage/NotificationPage";

// import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import AuthRedirectHandler from "./views/LoginPage/KakaoLogin/AuthRedirectHandler";
import KakaoLoginPage from "./views/LoginPage/KakaoLogin/KakaoLoginPage";

import MyPage from "./views/MyPage/MyPage";
import MyStoryList from "./views/MyPage/MyStoryList/MyStoryList";

import ArtMeetingPage from "./views/ArtMeetingPage/ArtMeetingPage";
import DailyMeetingPage from "./views/DailyMeetingPage/DailyMeetingPage";
import ExerciseMeetingPage from "./views/ExerciseMeetingPage/ExerciseMeetingPage";
import FoodMeetingPage from "./views/FoodMeetingPage/FoodMeetingPage";
import MusicMeetingPage from "./views/MusicMeetingPage/MusicMeetingPage";
import TripMeetingPage from "./views/TripMeetingPage/TripMeetingPage";

import HobbyStoryPage from "./views/HobbyStoryPage/HobbyStoryPage";
import MakeMeetingPage from "./views/MakeMeetingPage/MakeMeetingPage";

import UploadExercise from "./views/MakeMeetingPage/UploadMeetingPage/UploadExercise";
import UploadArt from "./views/MakeMeetingPage/UploadMeetingPage/UploadArt";
import UploadDaily from "./views/MakeMeetingPage/UploadMeetingPage/UploadDaily";
import UploadFood from "./views/MakeMeetingPage/UploadMeetingPage/UploadFood";
import UploadMusic from "./views/MakeMeetingPage/UploadMeetingPage/UploadMusic";
import UploadTrip from "./views/MakeMeetingPage/UploadMeetingPage/UploadTrip";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  if (isBrowser) {
    return (
      <div style={{ width: "100%" }}>
        <div style={{ margin: "3rem auto" }}>
          <h1 style={{ fontSize: "60px" }}>????????? ???????????? ??????????????????</h1>
        </div>
      </div>
    );
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />

          <Route exact path="/login" component={Auth(KakaoLoginPage, false)} />
          <Route exact path="/login/oauth2/code/kakao" component={Auth(AuthRedirectHandler, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />

          <Route exact path="/notification" component={Auth(NotificationPage, null)} />

          {/* ??????????????? */}
          {/* ????????? null->true??? ?????? + userId??? ???????????? ???????????? */}
          <Route exact path="/mypage" component={Auth(MyPage, null)} />
          <Route exact path="/mypage/mystory" component={Auth(MyStoryList, null)} />

          {/* ?????? ???????????? */}
          <Route exact path="/artMeeting" component={Auth(ArtMeetingPage, null)} />
          <Route exact path="/dailyMeeting" component={Auth(DailyMeetingPage, null)} />
          <Route exact path="/exerciseMeeting" component={Auth(ExerciseMeetingPage, null)} />
          <Route exact path="/foodMeeting" component={Auth(FoodMeetingPage, null)} />
          <Route exact path="/musicMeeting" component={Auth(MusicMeetingPage, null)} />
          <Route exact path="/tripMeeting" component={Auth(TripMeetingPage, null)} />

          {/* ?????? ??????*/}
          <Route exact path="/makeMeeting" component={Auth(MakeMeetingPage, null)} />
          <Route exact path="/makeMeeting/exercise" component={Auth(UploadExercise, null)} />
          <Route exact path="/makeMeeting/art" component={Auth(UploadArt, null)} />
          <Route exact path="/makeMeeting/daily" component={Auth(UploadDaily, null)} />
          <Route exact path="/makeMeeting/food" component={Auth(UploadFood, null)} />
          <Route exact path="/makeMeeting/music" component={Auth(UploadMusic, null)} />
          <Route exact path="/makeMeeting/trip" component={Auth(UploadTrip, null)} />

          {/* ????????? */}
          <Route exact path="/hobbyStory" component={Auth(HobbyStoryPage, null)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;


// function App() {
//   if (isBrowser) {
//     return (
//       <div style={{ width: "100%" }}>
//         <div style={{ margin: "3rem auto" }}>
//           <h1 style={{ fontSize: "60px" }}>????????? ???????????? ??????????????????</h1>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <NavBar />
//       <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
//         <Switch>
//           <Route exact path="/" component={(LandingPage)} />

//           <Route exact path="/login" component={(KakaoLoginPage)} />
//           <Route exact path="/login/oauth2/code/kakao" component={(AuthRedirectHandler)} />
//           <Route exact path="/register" component={(RegisterPage)} />

//           <Route exact path="/notification" component={(NotificationPage)} />

//           {/* ??????????????? */}
//           {/* ????????? null->true??? ?????? + userId??? ???????????? ???????????? */}
//           <Route exact path="/mypage" component={(MyPage)} />
//           <Route exact path="/mypage/mystory" component={(MyStoryList)} />

//           {/* ?????? ???????????? */}
//           <Route exact path="/artMeeting" component={(ArtMeetingPage)} />
//           <Route exact path="/dailyMeeting" component={(DailyMeetingPage)} />
//           <Route exact path="/exerciseMeeting" component={(ExerciseMeetingPage)} />
//           <Route exact path="/foodMeeting" component={(FoodMeetingPage)} />
//           <Route exact path="/musicMeeting" component={(MusicMeetingPage)} />
//           <Route exact path="/tripMeeting" component={(TripMeetingPage)} />

//           {/* ?????? ??????*/}
//           <Route exact path="/makeMeeting" component={(MakeMeetingPage)} />
//           <Route exact path="/makeMeeting/exercise" component={(UploadExercise)} />
//           <Route exact path="/makeMeeting/art" component={(UploadArt)} />
//           <Route exact path="/makeMeeting/daily" component={(UploadDaily)} />
//           <Route exact path="/makeMeeting/food" component={(UploadFood)} />
//           <Route exact path="/makeMeeting/music" component={(UploadMusic)} />
//           <Route exact path="/makeMeeting/trip" component={(UploadTrip)} />

//           {/* ????????? */}
//           <Route exact path="/hobbyStory" component={(HobbyStoryPage)} />
//         </Switch>
//       </div>
//       <Footer />
//     </Suspense>
//   );
// }

// export default App;