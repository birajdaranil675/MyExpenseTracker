import { app } from "./app.js";


app.listen(process.env.PORT, ()=>{
    console.log(`server is running on ${process.env.PORT}`);
});

// app.listen('/hello', (req, res)=>{
//     res.json({
//         msg: 'helllooooo'
//     });
// });