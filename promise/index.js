let myPromise = new Promise(function (myResolve, myReject) {
  // "Producing Code" (May take some time)
  try {
    myResolve("This is working"); // when successful
  } catch (error) {
    myReject(); // when error
  }
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function (value) {
    /* code if successful */
    console.log(value);
  },
  function (error) {
    /* code if some error */
  }
);


const promise = Promise.resolve(8)

promise.then((e) => {
   return e + 2
}).then(e => {
    document.write(e);
})