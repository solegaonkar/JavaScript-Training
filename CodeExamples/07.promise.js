function badIoOperation(count, callback) {
  setTimeout(function () {
    callback(count - 1);
  }, 1000);
}

function badCode(count) {
  console.log("Bad: " + count);
  badIoOperation(count, function (c) {
    if (c > 0) {
      badCode(c);
    }
  });
}

badCode(10);

const goodIoOperation = async (count) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(count - 1), 1000)
  );
};

const goodCode = async (count) => {
  while (count > 0) {
    console.log(`Good: ${count}`);
    count = await goodIoOperation(count);
  }
  return "Complete";
};

goodCode(10).then((x) => console.log(x));
