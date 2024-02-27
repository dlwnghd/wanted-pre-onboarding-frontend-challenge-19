# wanted-pre-onboarding-frontend-challenge-19

## 과제 1 todo list 만들기

### 구현 화면
![Wanted TODOLIST](https://github.com/dlwnghd/wanted-pre-onboarding-frontend-challenge-19/assets/61799492/ca7e5409-ad3c-4b36-84b7-94164b54a1e2)

### 실행
```
$ npm i
$ npm build
$ npm run start
```

<br>

### 요구 사항

- [x] 과제 제출 최상단에 개인 이력서 주소 첨부해주세요.
- [x] create-react-app 혹은 vite으로 프로젝트를 생성합니다.
- [x] 아래 과제 공통 세팅의 폴더 구조를 확인합니다.
- [x] 과제를 제출하는 방법은 본인이 작업한 github repository 주소를 [issues](https://github.com/summerdidi/wanted-pre-onboarding-frontend-challenge-19/issues)에 올리면 됩니다.
- [x] 과제물은 main 브랜치에 올립니다.
- [x] 프로젝트는 node version 20에서 실행할 수 있어야합니다.
- [x] Settings -> Codespaces -> Configuration Select branch를 main 으로 하고 제출합니다.(codespace 확인용도)
- [x] 함수형 컴포넌트를 사용해 코드를 짜주세요.

## 과제 2
1. DOM과 Virtual DOM을 설명해주세요.
- DOM(Document Object Model) : 웹 페이지에 대한 인터페이스입니다. 여러 프로그램들이 페이지의 콘텐츠 및 구조, 그리고 스타일을 읽고 조작할 수 있도록 API를 제공합니다.
- Virtual DOM(Virtual Document Object Model) : React가 가지고 있는 가상 돔, 돔의 복사본입니다. state(상태)를 react에서 구독, 만약 state에 변화가 생긴다면 그 때
  가상돔과 실제돔을 비교하여 수정된 부분만을 실제돔에 리랜더링합니다.

<br>

2. 리액트의 특징을 설명해주세요.
- CSR(Client Side Rendering) SPA(Single Page Application)에 최적화 되어있습니다.
- Component 기반의 UI라이브러리로 중복되는 코드를 번거롭게 여러번 코딩할 필요가 없습니다.
- State(상태)에 변화가 생긴다면 DOM과 Virtual DOM사이의 수정된 부분만을 실제 DOM에 리랜더링합니다.

<br>

3. flux 패턴에 대하여 설명해주세요.
- MVC(Model View Controller)의 단점(복잡성) 코드의 문제가 발생했을 시 View, Model, Controller 중 어느 것이 잘못된 것인지 묘연해지는 문제를 해결하고자 나온 패턴
- 단방향 데이터 흐름을 가지고 있습니다.

    (데이터)
    action ➡️ dispatcher ➡️ model(store) ➡️ view

        ⭐ action     ➡️ 변경할 데이터 객체, dispatcher를 통해서 store에 전달
        ⭐ dispatcher ➡️ 데이터 흐름을 관리 (통로, 전달, 매개체)
        ⭐ store      ➡️ 상태(state)의 저장소, state를 변경할 수 있는 함수 또한 가지고 있습니다.
        ⭐ view       ➡️ 화면

<br>

4. 상태관리에 대하여 설명해주세요.
- 여러 컴포넌트 간에 데이터 전달과 이벤트 통신을 한 곳에서 관리하는 것으로 React에서는 부모 컴포넌트에서 자식 컨포넌트로 props를 전달하여 선언된 상태(state)를 컨포넌트별로 공유하여 사용할 수 있습니다.
- 하지만 이러한 상태들을 컴포넌트에서 지속적으로 넘겨주다보면 불필요한 렌더링이 발생합니다.
- 전역에서 효율적으로 관리하는 Recoil, Redux, Jotai 등과 같은 전역 상태 관리 라이브러리들을 사용하여 불필요한 리랜더링과 DX(Developer Experience)를 향상 시킬 수 있습니다.

<br>

5. 궁금한 것에 대하여 알려주세요.
- 개발자 취업시장에서 신입 프론트엔드 개발자에게 요구되는 역량에 대해 알고 싶습니다.
- 프론트엔드 개발자에 맞는 좋은 이력서를 작성하는 방법에 대해 알고 이에 맞춰 이력서를 수정하고 싶습니다.
