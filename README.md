# MONO-REPO
취미 공유 플랫폼 https://hoppy.kro.kr/
<br><br>

## 👀 노션 공개 URL
https://assorted-handstand-230.notion.site/b0b500ceb21c4129838ecb1d37e09f94
<br>

## 📋 공통 컨벤션
### 브랜치 관리 전략
#### 브랜치는 이슈를 기반으로 생성한다. (이슈 생성 -> 브랜치 생성)
⚙️ github-flow

![](https://lh3.googleusercontent.com/h5H7FB2-aBPVThE4ZlZt919Fl9CstlD17NlJoODMKOlMEHmEV0encsCR2KmJ4yc6JwMsqoyv7u3jWVtW17Q3EqcHzPxUya85fRwRjgDlL2BapLtarQiu-SnjpUjyC2weng-PAXwx)

| 브랜치 종류  | 설명                                                         |
| ------------ | ------------------------------------------------------------ |
| Master(main) | 테스트 서버에서 테스트가 끝나고 운영서버로 배포 할 수 있는 브랜치 |
| feature      | 하나의 기능을 개발하기 위한 브랜치                           |
| release | 이번 출시 버전을 준비하는 브랜치             |

#### 참고 자료
1. [Git 브랜칭 전략 : Git-flow와 Github-flow](https://hellowoori.tistory.com/56)
2. [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)

---

### 브랜치 네이밍
⚙️ 네이밍 패턴

브랜치 종류/(backend,frontend) 간단한 설명

Ex) backend에서 '로그인 기능' 이슈를 구현하는 브랜치를 생성하는 경우, 브랜치 이름을

*feature/backend-Login* 로 작성한다.

*feature/frontend-PostsCard* 로 작성한다.

---

### PR 규칙
구현한 기능에 대해서 최대한 상세히 설명한다.

브랜치의 기반이 되는 이슈를 Close 한다.

---

### 커밋 메시지

**⚙️ Type**

| 타입 종류 | 설명                                 |
| --------- | ------------------------------------ |
| feat      | 새로운 기능에 대한 커밋              |
| fix       | 수정에 대한 커밋                     |
| bug       | 버그에 대한 커밋                     |
| build     | 빌드 관련 파일 수정에 대한 커밋      |
| ci/cd     | 배포 커밋                            |
| docs      | 문서 수정에 대한 커밋                |
| style     | 코드 스타일 혹은 포맷 등에 관한 커밋 |
| refactor  | 코드 리팩토링에 대한 커밋            |
| test      | 테스트 코드 수정에 대한 커밋         |

<br>

## 👥 파트 및 개발 계획
### [ 팀원 & 파트 ]
#### 🎨 디자인
- 유림님
#### 🖥️ 프론트엔드
- 수현님 [Github](https://github.com/suhyeon0111)
- 윤님 [Github](https://github.com/yoona-J)
#### 🗄️ 백엔드
- 대한님 [Github](https://github.com/Choidaehankr)
- 태경님 [Github](https://github.com/seaworld0125)
- 지수님(Study) [Github](https://github.com/ezwater4528)
