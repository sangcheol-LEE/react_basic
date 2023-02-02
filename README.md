useState에는 const [count, setCount] = useState<number>(0) 와 같이 입력한다.

div element에 pointer Event를 받겠다는 의지 받아들이겠어. <PointerEvnet<HTMLDivElement>>

인터페이스는 객체를 관리할 때 쓰는데 안에 들어가는 프로퍼티들을 넣어주면 된다 이말이야 ~ 참 쉽네
const [obj, setObj] = useState<Dots>({
   x : 0,
   y : 0
})

interface Dots {
   x: number;
   y: number;
}

와 같이 말이다 참 쉽쥬 ~?
