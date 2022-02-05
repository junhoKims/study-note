{
  /**
   * ts -> js 명령어
   * yarn tsc ''
   * yarn tsc '' -w
   */

  /**
   * unknown
   * 어떤 타입인지 정확히 모르겠다
   * any와는 다르게 정중한 느낌의 타입
   */
  let notsure: unknown = 0;
  notsure = 'krak';
  notsure = 4;
  console.log(notsure);

  /**
   * any
   * 어떤 타입이든 모두 들어가게 된다.
   */
  let anything: any = 0;
  anything = 'krak';
  anything = 4;
  console.log(anything);

  /**
   * never
   * 함수에서는 리턴하지 않겠다는 의미
   * 예를 들면 함수 내 throw Error나, while(true)와 같은 무한순환 
   */
  const throwError = (message: string): never => {
    // message -> server (log)
    throw new Error(message);
  }

  /**
   * object
   * 객체타입은 다되기 때문에 좋다고는 볼 수 없음
   */
  let obj: object;
  obj = () => console.log('sefin');
  obj = { krak: 4 };
  obj = [];
  console.log(obj);

  /**
   * Optional Parameter
   * krak?: string -> krak: string | undefined
   */
  const printName = (name: string, krak?: string) => {
    console.log(name, krak);
  }

  /**
   * Default Parameter
   * name: string = ''
   * 재밌는점은 Optional파라미터의 경우에는 작동하지 않는다.
   * krak?: string = '' (Fail!)
   */
   const printName2 = (name: string = '', krak1?: string) => {
    console.log(name, krak1);
  }

  /**
   * Rest Parameter
   * 인자를 배열로 받아오는 것
   */
  const addNumber = (...args: number[]) => {
    return args.reduce((a,b) => a + b);
  }
  console.log(addNumber(1,2,3,14,14,14,14,14,14,14,14,14,31,31,31,31,3));
}