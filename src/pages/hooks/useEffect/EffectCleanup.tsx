import { useEffect, useState } from "react";

export function EffectCleanupContent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <article>
      <h2>Effect Cleanup</h2>

      <p>
        Sometimes we need to cleanup effects, like timers or subscriptions
        events.
      </p>

      <p>
        <strong>Count increment with cleanup is {count}</strong>
      </p>
    </article>
  );
}

EffectCleanupContent.displayName = "EffectCleanupContent";
