export function LazyLoadedContent() {
  return (
    <section>
      <h1>Lazy Loaded</h1>
      <p>You can also use suspense with lazy.</p>
    </section>
  );
}

LazyLoadedContent.displayName = "LazyLoadedContent";

export default LazyLoadedContent;
