import { FormHTMLAttributes } from "react";
import { useFormState, useFormStatus } from "react-dom";

function OriginalForm({
  handleAction,
}: {
  handleAction: FormHTMLAttributes<HTMLFormElement>;
}) {
  return <form action={handleAction.action} />;
}
// react18 이전 버전에서는 **경고: <form> 태그의 action 프로퍼티에 대한 잘못된 값입니다. 요소에서 값을 제거하거나, 해당 요소에 문자열 또는 숫자 값을 전달하여 DOM에 유지하세요.** 가 발생했습니다.react-19에서는 발생하지 않습니다.

function useFormStateExample() {
  const [state, formAction] = useFormState(async () => {}, null);

  console.log(state, formAction);

  return <form action={formAction} />;
}

function useFormStatusExample() {
  const { pending, data, method, action } = useFormStatus();
  // useFormStatus는 상위에 있는 <form>이 현재 제출 중인지 또는 성공적으로 제출되었는지를 알려줍니다. 폼의 하위에서 호출할 수 있으며 다음과 같은 속성을 반환하는 객체를 제공합니다.

  console.log(pending, data, method, action);

  return <></>;
}
