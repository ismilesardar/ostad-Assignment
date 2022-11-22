const { client } = require("./config");

async function findData() {
    try {
        const mydatabase = client.db('school');
        const students = mydatabase.collection('students');

        const query = {location: "khulna"};
        // const query = {};

        const corsor = await students.findOne(query);
        // const corsor = await students.find(query);

        console.log(corsor);

        //many
        // await corsor.forEach((ele)=>{console.log(ele)});
        

    } catch (error) {
     console.log(error);   
    }finally{
        await client.close();
    }
}

findData();