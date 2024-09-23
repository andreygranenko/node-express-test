const {readFile, readFileSync} = require('fs').promises;
const express = require('express');

const app = express();

app.get('/', async (req, res) => {
  res.send(await readFile('./home.html', 'utf8'));

  // readFile('./home.html', 'utf8', (err, html) => {
  //   if (err) {
  //     res.status(500).send('Sorry, out of order');
  //   }
  //   res.send(html);
  // });
});
console.log(process.env.PORT);
app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));


// async function hello() {
//   const file = await readFile('./hello.txt', 'utf8');
// };
// console.log(hello());
// readFile('./hello.txt', 'utf8', (err, txt) => {
//   console.log(txt);
// });
// console.log('do this ASAP');