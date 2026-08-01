import React, { Suspense, lazy } from "react";
import { PromiseContent } from "./PromiseContent";

const LazyLoadedContent = lazy(() => import("./LazyLoadedContent"));

export function SuspenseContent() {
  return (
    <section>
      <h1>Suspense</h1>

      <p>
        React suspense allow you display loading screens while content is being
        loaded, from external tools or a component doing some computation
      </p>

      <p>
        In the example below, the PromiseContent component uses a promise to
        fetch data and Suspense handles the loading state.
      </p>

      <Suspense fallback={<p>Loading...</p>}>
        <PromiseContent />
      </Suspense>

      <p>
        In the next example, the LazyLoadedContent component is loaded lazily
        using React.lazy and Suspense.
      </p>

      <Suspense fallback={<p>Loading Lazy...</p>}>
        <LazyLoadedContent />
      </Suspense>
    </section>
  );
}

SuspenseContent.displayName = "SuspenseContent";
