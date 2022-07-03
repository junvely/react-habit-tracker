# Habit-tracker(React)

리액트 Habit-tracker Application

https://junvely.github.io/react-habit-tracker/

# 📝Habit-tracker

#### 📝Habit-tracker : 습관 체크하기

##### main 화면

<img src="/src/img/habit-tracker-main.jpg" alt="app-main">

# 💎Habit-tracker 기능

- React App(Class,function component)
- React Component 사용방법 익히기
- Habit들 증가, 감소, 삭제, 초기화 기능(count, +, -, delete, reset)
- 새로운 Habit 추가하기 기능(add)

<br>

# 🎮React의 개념과 컨셉

<b>리액트란 ? 컴포넌트(Component:하나의 기능을 하는 UI 한 개)들로 이루어진 UI를 만드는 라이브러리다.</b>

1. 리액트는 컴포넌트들로 이루어져있다.

2. 리액트에서는 State가 변경되면 전체가 업데이트 된다(전체 render함수가 호출된다).

<br>

# 📱React의 이해

- 리액트에서 컴포넌트를 생성하는 방법은 'Class' 컴포넌트와 'function' 컴포넌트 2가지가 있다.

- VDOM(Virtual DOM) : 가상DOM이 존재하여 업데이트 시 그 전의 VDOM과 비교해 실질적으로 업데이트가 필요한 부분만 실제 DOM에 업데이트가 된다(리액트가 성능이 좋은 이유)

- VDOM이 DOM을 관리해주지만, 컴포넌트가 무거운 로직을 수행할 경우 render함수가 호출될 때 사용자가 예상하지 못한 깜빡임을 느끼거나 불필요한 일들이 발생하는 것은 성능에 좋지 않다.

- 불필요한 전체 rendering을 방지하고 싶을 경우 해당 컴포넌트에 'PureComponent(class)'또는 'memo(function)'를 사용하면 해당 Component의 State나 Props에 변화가 없을시, render함수가 호출되지 않는다.

- 리액트에서는 State를 직접 수정하지 않는다. 항상 State 오브젝트를 불변의 오브젝트로 두고, 새 오브젝트를 생성하여 오브젝트를 업데이트 시킨다. 직접 수정할 경우 render가 호출되지 않는 경우가 발생할 수 있다(shallow comparison).

- 'PureComponent'를 사용 시, 관련 State를 직접 변경하였을 경우 필요한 rendering이 발생하지 않을 수 있다(shallow comparison : 새 오브젝트를 생성하여 오브젝트 전체를 업데이트하는 이유)

- shallow Comparison : 가장 상위 reference만 참조하여 비교한다. reference만 같다면 오브젝트 안의 데이터 값이 변경되더라도 같은 reference로 간주하여 업데이트가 발생하지 않는다.(PureComponent 내의 shouldComponentUpdate? 함수가 false를 리턴)

- 결론 : 리액트에서는 Lifecycle 메소드 중 shouldComponentUpdate를 구현하지 않았다면, State가 업데이트 될 때마다 전체 render함수가 호출된다(기본). 전체 render가 불필요할 경우 'PureComponent' or 'memo' 사용, State 오브젝트 안의 값은 직접 변경x 새 오브젝트 생성하여 state를 업데이트해야 render가 발생하지 않는 것을 방지할 수 있다(shouldComponentUpdate? false 리턴).

<br>

# 📱React Hook

- 'React Hook'이 등장하면서 Class 컴포넌트에서만 가능했던 'State'와 'Lifecycle'을 function 컴포넌트에서도 사용할 수 있게 되었다.

- 리액트 훅의 도입 배경과 장점

1. Class의 문법이 어려움(function 컴포넌트는 기존 함수형 문법을 따르기 때문에 비교적 쉽다)

2. Class에서 멤버변수에 접근할 때 this로 접근해야하는 번거로움이 없다.

3. this binding 이슈가 없다.

4. 함수형 프로그래밍의 유행

5. Lifecycle method의 상태에 따른 중복되는 코드를 줄일 수 있다(useEffect : mount + Update).

- 리액트 훅에서는 function 컴포넌트가 업데이트 될 때 마다 함수 안의 변수나 콜백함수가 계속 호출 된다(호출 될 때 마다 새 Reference를 만든다).

- 새 메모리에 할당하지 않고 저장하여 재사용할 경우 'use'를 붙여 사용한다(useRef, useCallback 등)

<br>

# ✅ Takeaway 느낀점/개선할점

- 되도록 상위 컴포넌트에서는 State를 관리, 하위 컴포넌트에 전달하고 하위 컴포넌트에서는 props을 전달받아 받은 정보로 어떤 기능만 수행하도록 만드는 것이 재사용성 및 데이터가 어디에서 온 것인지 명확히 하기에 좋다.

- 리액트에서는 DOM요소에 직접 접근,변경하지 않기 때문에 .querySelector 대신 React.createRef(Class) 또는 useRef(function)로 Ref라는 새 Object를 생성하여 연결해 준다.

- jsx(js에 xml을 추가해 확장한 문법 : 바벨을 사용해 일반 자바스크립트 코드로 변환된다.)에서는 if문을 사용할 수 없다. 대신 삼항연산자를 사용한다.

- 리액트에서는 list에 반드시 key(id)값을 설정한다.(변경사항 발생 시 id값으로 계산하여 불필요한 렌더링을 줄이고 성능을 개선한다.)

- date.Now()를 사용하면 고유의 id값을 설정하기에 좋다.(1970년 1월 1일~현재 까지의 경과시간을 밀리초로 계산한 을 반환한다.)

- 오브젝트의 가변성에 주의한다(오브젝트를 변수에 할당 시 참조값, 즉 reference를 반환한다.)

- spread operation(...object) : key와 value를 복사하여 새 오브젝트(껍데기)를 생성한다, 하지만 안에있는 내부 오브젝트는 기존 오브젝트를 그대로 복사하여 기존의 reference를 반환한다. > ...object로 복사하여 안의 데이터 값을 변경할 경우 기존의 오브젝트를 직접 변경하는 것과 같다. > PureComponent에서 업데이트가 발생하지 않을 수 있다. 때문에 map 등을 이용하여 새 오브젝트를 반환해야 한다.
