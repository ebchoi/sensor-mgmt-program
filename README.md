# 🏋🏻‍♀️바딧 기업 과제 | 감지 센서 관리 프로그램 만들기

## 1. 프로젝트 개요

- 과제 주관 : 바딧
- 작업 기간 : 2022년 10월 7일 ~ 2022년 10월 10일
- 참여 인원 : 4명 - 오창훈, 유관희, 이주리, 최은비(PO)
- 기술 스택 : HTML5, React.js, Styled-components, MUI, Chart.js, Datepicker

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
    
    ![Screen Shot 2022-10-10 at 2.06.06 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/116acb6f-5b44-4bd1-9f80-dc0a6dd7d482/Screen_Shot_2022-10-10_at_2.06.06_AM.png)
    
    ![Screen Shot 2022-10-10 at 2.06.12 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/78c0bb2e-9527-4c9b-a64a-7dba40f2e410/Screen_Shot_2022-10-10_at_2.06.12_AM.png)
    
    ![Screen Shot 2022-10-10 at 2.11.03 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/858b313d-b26e-4371-a3c8-8092dae503fd/Screen_Shot_2022-10-10_at_2.11.03_AM.png)
    

### 그래프 대시 보드

- Chart.js를 활용한 그래프 표시, 마우스 스크롤을 통한 확대 축소, 확대 시 좌우 스크롤 기능
- useRef를 활용하여 DOM조작을 통한 확대 축소 버튼 추가
- DatePicker를 사용한 달력 구현. 선택한 날짜에 해당하는 데이터 조회
    
    ![Screen Shot 2022-10-10 at 2.02.27 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fe2269b8-7da1-4956-a739-91650531926f/Screen_Shot_2022-10-10_at_2.02.27_AM.png)
    
    ![Screen Shot 2022-10-10 at 2.05.29 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e5575d0e-a330-4d04-87eb-92775df7b4b6/Screen_Shot_2022-10-10_at_2.05.29_AM.png)
    
    ![Screen Shot 2022-10-10 at 2.05.36 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6c8bd107-bc32-4c9d-a359-fc35fdaf38fa/Screen_Shot_2022-10-10_at_2.05.36_AM.png)
