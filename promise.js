const promise=Promise.resolve("hello")
promise.then(result=> {
    console.log(result)
})

const promise=Promise.reject("error")
promise.catch(error=> {
    console.log(error)
})

const p1 = Promise.resolve("A");
const p2 = Promise.reject("Error");
const p3 = Promise.resolve("C");

Promise.allSettled([p1, p2, p3])
  .then(result => {
    console.log(result);
  });

  const p1 = new Promise(resolve =>
  setTimeout(() => resolve("First"), 1000)
);

const p2 = new Promise(reject =>
  setTimeout(() => reject("Second"), 500)
);

Promise.race([p1, p2])
  .then(result => console.log(result));


const p1 = Promise.reject("Error 1");

const p2 = new Promise((resolve,reject) =>{
  setTimeout(() => {
    reject("error")
}, 500)
}
)

const p3 = new Promise(resolve =>
  setTimeout(() => resolve("Success 2"), 1000)
);

Promise.any([p1, p2, p3])
  .then(result => console.log(result));