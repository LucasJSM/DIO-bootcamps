// Promise: função assíncrona que pode ser resolvida ou rejeita que começa com valor desconhecido
const writeConsoleAfterPromiseResolution = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(console.log("Promise resolvida após 2 segundos"));
    reject(console.log("Promise rejeitada após 2 segundos"));
  }, 2000);
});