function fetchFruitsData() {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve(["Apple", "Banana", "Cherry"]);
    }, 1000);
  });
}

let fruitResource = {
  data: null,
  read() {
    if (this.data !== null) return this.data;
    throw fetchFruitsData().then((result) => (this.data = result));
  },
};

export function PromiseContent() {
  const data = fruitResource.read();
  return (
    <section>
      <h1>Promise</h1>

      <ul>
        {data.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </section>
  );
}
