
입사 과제 : 리액트 네이티브를 이용한 카카오 클론 코딩
- flatlist 컴포넌트 필수 적용

- 폴더 구조
    - components :
        - button
        - input
        - 채팅 카드 : 채팅이 왔을 때,
    - screen
        - home : 홈 화면에서 flatList를 사용하는 것은 적절하다고 보이지 않는다.
        - main
            index(bottom-tabs)
                - chat
                - people
                - search
                - more
        - data
            - 
- 추가사항
    - styled-componets 적용하기
    - flatlist 컴포넌트 사용하기[적용 완료]

- 홈페이지 UI 구성 거의 완료
- 메인 페이지 UI 구성 수정 필요
    - bottom tabbar
        - 이름 표기 제거
        - header 옵션 제거
    - 전체 레이아웃 구성하기(deviceWidth, deviceHeight에 맞춰 full page, background-color는 white)
    - 테마 또는 간단한 컬러 시스템 분할

- 2월 25일
    - dimensions의 device-with 값에 따른 화면 사이즈 설정
    - bottom-tab : 헤더 숨기기, 하단 label 숨기기
    - safeAreaView와 StatusBar를 추가하여 영역 설정
    - bottom-tab 시작 페이지 채팅 페이지로 설정
    - chats 타이틀 클릭시 홈 스크린으로 이동

- 추가할 사항
    - 테마설정(primary 컬러: black, secondary 컬러: gray)
    - navigator[routes] 폴더가 필요할 지 폴더 구조 고려해보기
    - useNavigation으로 props로 전달받는 과정 제거

- 2월 26일
    - useNavigation 적용
    - route 폴더 생성
    - 불필요한 stylesheet 정리
    - data 폴더에서 chatings 목록 표시
    - 스타일링 관련 방법은 다양한 경우의 수가 있어서 styleSheet로 구분하는 것으로 일단 제작 완료


- 추가 사항
    - alias 기능 추가하기