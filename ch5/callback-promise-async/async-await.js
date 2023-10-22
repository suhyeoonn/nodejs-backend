function waitOneSecond(msg) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${msg}`), 1000);
  });
}

async function countOneToTen() {
  for (let x of [...Array(10).keys()]) {
    let result = await waitOneSecond(`${x + 1}초 대기중...`);
    console.log(result);
  }
  console.log("완료");
}
countOneToTen();
