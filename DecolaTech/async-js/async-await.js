// Exemplo funcionando apenas no browser

// Async/await são usadas com promises para tornar a função assíncrona
async function resolvePromise() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolvida");
    }, 3000);
  });

  // Espera a resolução da async function
  const resolvedPromise = await myPromise
    .then((result) => `${result} passou pelo then`)
    .then((result) => `${result} finalizando...`)
    .catch((err) => console.log(err.message));

  return resolvedPromise;
}

// Sem o await, a promise retorna outra promise
// resolvePromise();

// Precisa do await para receber o resultado
await resolvePromise();