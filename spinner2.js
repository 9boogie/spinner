const strings = ['\r|   ','\r/   ','\r/   ','\r\\   '];
let time = 100;

for (let i = 1; i < 5; i++) {
  for (const item of strings) {
    setTimeout(() => {
      process.stdout.write(item);
    }, time)
    time += 200;
  }
};

setTimeout(()=>console.log(''),time);