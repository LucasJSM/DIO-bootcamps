async function resolvePromise() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolvida");
    }, 3000);
  });

	let result;


	try {
		result = await myPromise
				.then((result) => result + ' \npassou pelo then')
				.then((result) => result + ' \nfinalizando')
	} catch(err) {
		result = err.message;
	}

	return result;
}

await resolvePromise();