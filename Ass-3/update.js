const { client } = require("./config");

async function updateDatabase() {
    try {
        const mydatabase = client.db('school');
        const students = mydatabase.collection('students');

        const filter = {location: 'Dhaka'};
        const newData = {$set:{isCapital: true}};
        const options = { upsert: true };

        const result = await students.updateOne(filter,newData,options);
        // const result = await students.updateMany(filter,newData);

        //many
        // console.log(`Updated ${result.modifiedCount} documents`);
        //single
        console.log(
            `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
          );
    } catch (error) {
        console.log(error)
    }finally{
        await client.close();
    }
}

updateDatabase();