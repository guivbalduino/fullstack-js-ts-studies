function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Sou a promise, estou sendo resolvida.');
      resolve();
    }, 2000);
  });
}

export async function exibeResultados() {
  const data = await promise();
  return data;
}
