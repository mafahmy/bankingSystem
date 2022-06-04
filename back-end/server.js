import express from 'express';

const app = express();
let port = 5001;

app.get('/', (req, res) => {
    res.send('SERVER IS RUNNING');
});
app.listen(port, () => {
    console.log(`SERVER IS RUNNING AT PORT ${port}` )
})