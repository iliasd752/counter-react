import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(5);

  return (
    <p
      onClick={() => {
        setCount(count + 1);
      }}
      className="count"
    >
      {count}
    </p>
  );
}
