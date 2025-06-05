// TIMER APP - Playing a beep sound after the number of seconds provided as command line arg.
const arguments = process.argv.slice(2);

for (const arg of arguments) { //loops through each arg
  const delay = Number(arg); 

  if (isNaN(delay)) { // skip if input is  NaN
    continue;
  }

  
  if (delay < 0) { // skip if input is neg
    continue;
  }

// nothing if no num provided loop shouldnt run

  setTimeout(() => { // beep
    process.stdout.write('\x07'); // This is the system beep sound
    console.log(`Beep after ${delay} seconds`);
  }, delay * 1000);
}
