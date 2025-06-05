// TIMER APP - Playing a beep sound after the number of seconds provided as command line arg.
const arguments = process.argv.slice(2);

for (const arg of arguments) { //loops through each arg
  const delay = Number(arg); 

  if (isNaN(delay)) { // skip if delay NaN
    continue;
  }

  
  if (delay < 0) { // skip if delay is neg
    continue;
  }


  setTimeout(() => { // beep
    process.stdout.write('\x07'); // This is the system beep sound
    console.log(`Beep after ${delay} seconds`);
  }, delay * 1000);
}
