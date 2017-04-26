async function doStuff(){
  return new Promise((res) => {
    setTimeout(() => { res("I'm async!"); }, 1000);
  });
}

async function exec(){
  console.log("before the awesome async call");

  var result = await doStuff();
  console.log(result);

  console.log("after the coolest async call");
}

exec();
