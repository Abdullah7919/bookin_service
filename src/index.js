const express=require('express');
const bodyParser=require('body-parser');
const apiRoutes=require('./routes/index');

const db=require('./models/index');

const app=express();
const { PORT }=require('./config/serverConfig');

const serverSetupeAndStart=()=>{

    app.listen(PORT,()=>{
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended:true}));
        app.use('/app',apiRoutes);

        console.log(`Server Started at PORT : ${PORT}`);
        // if(process.env.DB_SYNC){
        //     db.sequelize.sync({alter:true});
        // }
    })
}

serverSetupeAndStart();