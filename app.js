const express = require('express');
const app = express();
const nodeCron = require('node-cron');



// Define the Cron job schedule, function to state date and time every seconds
const Job = nodeCron.schedule('* * * * * *', () => {
   
  console.log(new Date().toLocaleString());
});

Job.start();


//Post endpoint to stop/delete the Cron job
app.post('/cronjob-stop', (req, res) => {
  // Stop the job
  Job.stop();

  res.send('Cron job successfully stopped/deleted');
});

const port = 3000
app.listen(port, () => {
  console.log('Server is running on port 3000');
});
