const generateRandomNumber = () => Math.round(Math.random() * 10);

const generateResolvedPromise = (timer) =>
  new Promise((resolve, reject) => {
    setTimeOUT(() => {
      const randomNumber = generateRandomNumber();
      console.log(`Promise resolvida em ${timer / 1000} segundos`);
      resolve(
        `O número ${randomNumber} foi gerado em ${timer / 1000} segundos`
      );
    }, timer);
  });
