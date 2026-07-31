import { useEffect, useState } from "react";
import { EffectCleanupContent } from "./EffectCleanup";
import { HowItWorks } from "./HowItWorks";

export function UseEffectContent() {
  return (
    <section>
      <h1>useEffect</h1>

      <p>
        useEffect is useful when you want to do an API call on the first render
        or update a value watching other property change.
      </p>

      <HowItWorks />

      <EffectCleanupContent />
    </section>
  );
}

UseEffectContent.displayName = "UseEffectContent";
