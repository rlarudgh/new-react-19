// action이 제출되는동안 사용자 인터페이스를 낙관적으로 업데이트하는 데 사용할 수 있습니다.
import { useOptimistic, useState } from "react";

function Example<T>({ initial }: { initial: T }) {
  const [state, setState] = useState<T>(initial);
  const [optimisticState, addOptimistic] = useOptimistic(
    state,
    // 업데이트 함수
    (currentState, optimisticValue) => {
      // 현재 상태에 낙관적인 값을 합치고 새로운 상태를 반환
      console.log(currentState, optimisticValue);
    }
  );

  return <>hello</>;
}
