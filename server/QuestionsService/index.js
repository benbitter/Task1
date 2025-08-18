import { httpServer } from "./app.js";
import { seedDB } from "./seederScript.js";
import { connectDb } from "./db/index.js";
import axios from "axios";


const port = process.env.PORT || 3002;

connectDb().then(

    async() => {
    
        console.log("fetching..")
       
        // await seedDB(); //seeder script

        httpServer.listen(port, () => console.log(`Server is running on port ${port}`));
    }
).catch((error) => {
    console.error("Error connecting to the database:", error);
});
