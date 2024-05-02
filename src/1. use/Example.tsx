import { use } from "react";
import { DarkModeContext } from "../contexts/$theme";

function MessageComponent({
  messagePromise,
}: {
  messagePromise: Promise<string>;
}) {
  const message = use(messagePromise);
  // use 안 parameter는 Promise or context type이여야 한다.
  // Promise<T> 타입을 사용하여 T타입으로 반환된다.

  return <div>{message}</div>;
}

function HorizontalRule({ show }: { show: boolean }) {
  if (show) {
    const theme = use(DarkModeContext);
    // 조건문 안에 context를 사용할 수 있다. 
    return <>Hello Show</>;
  }

  return false;
}
