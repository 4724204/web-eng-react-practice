import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState<number>(10);
    function handleClick() {
        setCount(count + 1);
        console.log(count);
    }
    return <button onClick={handleClick}>{count}回</button>;
}