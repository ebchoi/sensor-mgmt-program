# 🏋🏻‍♀️바딧 기업 과제 | 감지 센서 관리 프로그램 만들기

## 1. 프로젝트 개요

- 과제 주관 : 바딧
- 작업 기간 : 2022년 10월 7일 ~ 2022년 10월 10일
- 참여 인원 : 4명 - 오창훈, 유관희, 이주리, 최은비(PO)
- 기술 스택 : HTML5, React.js, Styled-components, MUI, Chart.js, Datepicker
- 구현 사이트 : [devdoper.github.io](http://devdoper.github.io/)

## 2. 팀원 역할 분할

- 오창훈
    - 사이드 바
    - 센서 목록: 목록 나열, 정렬, on-mouse 효과, 배터리 표시
    - 그래프 대시보드: 그래프 구현, API 요청, 확대 축소 버튼화
- 유관희 - 그래프 대시보드 : 그래프 구현, 확대 축소 기능
- 이주리 - 그래프 대시보드: 확대 축소 기능 / 초기 세팅, 배포
- 최은비 - 그래프 대시보드 : csv export , 날짜별 데이터 확인, 반응형 구현

## 3. 프로젝트 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📂Graph
 ┃ ┃ ┣ 📜Calendar.component.js
 ┃ ┃ ┣ 📜ExportButton.component.js
 ┃ ┃ ┗ 📜Graph.component.js
 ┃ ┣ 📂List
 ┃ ┃ ┗ 📜SensorTable.component.js
 ┃ ┣ 📂Nav
 ┃ ┃ ┣ 📜Breadcrumbs.component.js
 ┃ ┃ ┗ 📜Sidebar.component.js
 ┃ ┗ 📜index.components.js
 ┣ 📂containers
 ┃ ┣ 📂Graph
 ┃ ┃ ┗ 📜Graphs.container.js
 ┃ ┣ 📂Nav
 ┃ ┃ ┗ 📜Nav.container.js
 ┃ ┗ 📜index.containers.js
 ┣ 📂pages
 ┃ ┣ 📜GraphDashboard.page.js
 ┃ ┗ 📜SensorList.page.js
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyles.js
 ┃ ┗ 📜Theme.js
 ┣ 📜App.js
 ┣ 📜Router.js
 ┣ 📜config.js
 ┗ 📜index.js
```

## 4. 구현 기능

### 공통

- 사이드바 구현을 통한 페이지 이동 용이화
- 반응형 구현

### 센서 목록

- fetch사용한 API 불러오기 및 에러 처리
- Material-UI 라이브러리를 통한 목록 생성, map을 통하여 데이터 조회, 조회 데이터 개수 보여주기 구현
- map, sort를 활용한 오름차순 내림차순 구현, 페이지네이션 구현
- 조건부 css통한 배터리 레벨에 따른 글자색 변화, hover를 통한 셀 배경색 변화

<img width="722" alt="Screen Shot 2022-10-10 at 2 06 06 AM" src="https://user-images.githubusercontent.com/100172541/194771799-75362a07-5f54-4bc8-ba17-32329e718586.png">
<img width="414" alt="Screen Shot 2022-10-10 at 2 06 12 AM" src="https://user-images.githubusercontent.com/100172541/194771809-0aca1e6b-2f59-4133-af60-657f6f4a67cb.png">
<img width="606" alt="Screen Shot 2022-10-10 at 2 11 03 AM" src="https://user-images.githubusercontent.com/100172541/194771814-77076639-0850-4951-b587-f6a9e2ca0735.png">


    

### 그래프 대시 보드

- Chart.js를 활용한 그래프 표시, 마우스 스크롤을 통한 확대 축소, 확대 시 좌우 스크롤 기능
- useRef를 활용하여 DOM조작을 통한 확대 축소 버튼 추가
- DatePicker를 사용한 달력 구현. 선택한 날짜에 해당하는 데이터 조회
    
<img width="583" alt="Screen Shot 2022-10-10 at 2 02 27 AM" src="https://user-images.githubusercontent.com/100172541/194771833-a7dc2692-ee4d-43b3-b298-1d1613ffa1f0.png">
<img width="379" alt="Screen Shot 2022-10-10 at 2 05 29 AM" src="https://user-images.githubusercontent.com/100172541/194771836-2104122c-5f14-4d84-8f52-5a3b578c7b5d.png">
<img width="573" alt="Screen Shot 2022-10-10 at 2 05 36 AM" src="https://user-images.githubusercontent.com/100172541/194771843-51706f32-47ff-44ea-9e18-9918cc7beceb.png">

    
