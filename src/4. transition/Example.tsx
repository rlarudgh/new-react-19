import { useState, useTransition } from "react";

// 해당 기능은 18.2에서도 사용 가능합니다.
function Example() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState<string>("home");

  function selectTab(nextTab: string) {
    // setTab 대신에 트랜지션에 상태 변경을 넣음

    startTransition(() => {
      setTab(nextTab);
    });
  }
}
