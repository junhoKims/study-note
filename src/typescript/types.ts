{
  // Array
  // 방법 string[] Array<string>
  // 방법이 두개지만 string[]같은 방식이 나음.
  // readonly같은 경우에는 string[] 방법만 되가지고 이게 더 유리함
  const printArr = (fruits: readonly string[]) => {
    console.log(fruits);
  }

  // Tuple
  // useState 생각하자
  // 별로 권장되지는 않음. 접근방법이 ar[index] 이런식이라 이게 어떤건지 잘 모름 (튜플이라 타입이 다를수있으니)
  // interface, alias, class로 대체하는게 차라리 나음
  const ar: [string, number] = ['sef', 4];
  const [krak, eind] = ar;
  console.log('krak: ', krak);
  console.log('eind: ', eind);

  // Alias
  // 일종의 타입 선언이락 볼수 있음
  type Krak = {
    name: string;
    age: number;
    option?: {
      level: number;
      isTop: boolean;
    }
  }
  const man: Krak = {
    name: 'efin',
    age: 12,
  }

  // String Literal Type
  // 타입이 아니라 값을 써주면 그 타입의 그 값만 허용되게됨
  type Test1 = 'name' | 'seinf';
  const show: Test1 = 'seinf';
  console.log(show);

  // Union Types
  // Or로 이해하면됨
  // 정해진 타입 또는 값만 가능하게됨
  // 위에 저 Literal Type이랑은 다른게 union은 타입도 가능함
  type Direction = 'left' | 'right' | 'top' | 'bottom';
  type Hello = Direction | Krak;
  const showDirection = (direction: Direction) => {
    console.log(direction);
  }
  const asdf: Hello = 'bottom'
  
  // Discriminated Union
  // 이름이 동일하되, 차별화되는 타입을 둠으로써 쉽게 구분할 수 있게 해주는 것
  // result라는걸 만들게 됨으로써 해당 타입이 하나의 변수를 똑같이 가져감
  // 이렇게되면 typescript에서 자동으로 값을 추론해주는 강력한 기능을 사용하는게 가능함
  type SuccessState = {
    result: 'success';
    response: { body: string };
  }
  type FailState = {
    result: 'fail';
    response: { reason: string };
  }
  type LoginState = SuccessState | FailState
  const login = (state: LoginState) => {
    if (state.result === 'success') console.log('good');
    if (state.result === 'fail') console.log('good');
  }

  // intersection Type
  // and와 비슷하다고 보면됨 &로 씀
  type Student = { name: string; score: number; };
  type Worker = { employeeId: string; work: () => void; }
  const intern: Student & Worker = {
    name: 'kef',
    score: 42,
    employeeId: 'seinfls',
    work: () => console.log('sefin'),
  }
  
  // enum
  // 말그대로 열거하는거
  // js에서는 object.freeze 사용해서 변경을 막아서 사용하는듯
  const Weekend_js = Object.freeze({MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2});
  console.log(Weekend_js.MONDAY)

  enum Weekend_ts {
    MONDAY,
    TUESDAY,
    WEDNESDAY
  }
  // 보면 결국은 number로 추론된 꼬라지라 42를 넣었는데 에러를 잡지않음
  // 즉, 타입이 완벽하게 보장되지가 않음.
  // string으로 하면 괜춘하긴함...
  // 차라리 enum보다는 Union을 사용하는것을 선호함
  let day: Weekend_ts = Weekend_ts.MONDAY;
  day = 41;
  console.log(day);
  

  /**
   * 타입추론? 쓰는게 좋을까?
   * 결론:: 아래에...
   */
  const isShow = false; // 이건 누가봐도 boolean인게 보임. 생략 괜춘
  const bigFoot: string = 'sef'; // 이거는 애매함. string인지 number인지 값 보기전까진 모름. 써주는게 좋음

  /**
   * Type Assertion
   * 코드는 any지만, 나는 이게 무조건 string이다! 라고 장담할 시에 사용이 가능한 문법
   * codeName as string 같은 것
   * - 하게되면 typescript 자동추론이 따라와서 편해짐
   * - 100% 확신할때만 사용하자
   */
  const jsStrFunc = (): any => {
    return 2;
  }
  // 보면 에러임. 숫자엔 .length같은게 없음
  const maybeString = jsStrFunc();
  console.log((maybeString as string).length);

}