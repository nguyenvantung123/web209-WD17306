import { useAppDispatch, useAppSelector } from "@/app/hook";
import { increment, decrement, increase } from "@/slices/Counter";

const Counter = () => {
    const dispatch = useAppDispatch() ;
    const {count} = useAppSelector((state: any) => state.counter.count);
    return (
        <div>
           Value: {count}
            <button onClick={() => dispatch(increment())}>Click</button>
            <button onClick={() => dispatch(decrement())}>Click 2</button>
            <button onClick={() => dispatch(increase(10))}>Click 3</button>
        </div>
    );
};

export default Counter;
