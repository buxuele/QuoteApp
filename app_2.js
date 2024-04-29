const express = require('express')
const app = express()
const port = 3400


// 不需要下面这么多东西。 只需要这一句就行了！
app.use("/", express.static('onePage'));
app.use("/home", express.static('onePage'));

// app.get('/', (req, res) => {
//     // res.send('Hello World!')

//     // const options = {
//     //     root: path.join(__dirname, 'onePage'),
//     //     dotfiles: 'deny',
//     //     headers: {
//     //       'x-timestamp': Date.now(),
//     //       'x-sent': true
//     //     }
//     //   }

//     // // res.sendFile("./onePage/index.html")
//     // const fileName = "index.html"
//     // res.sendFile(fileName, options, (err) => {
//     //   if (err) {
//     //     next(err)
//     //   } else {
//     //     console.log('Sent:', fileName)
//     //   }
//     // })
//     // res.render('index')
//     // res.send("index.html")

// })


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// run this file:
// node app_2.js
// http://localhost:3400

// git remote add origin https://github.com/buxuele/QuoteApp.git
// git push -u origin main