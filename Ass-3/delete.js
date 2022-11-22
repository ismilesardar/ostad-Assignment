const { client } = require("./config")

async function deleteData() {
    try {
        const mydatabase = client.db('school');
        const students = mydatabase.collection('students');

        const query = {location: "Slyte"};
        // const query = {};//Denger code

        const result = await students.deleteOne(query);
        // const result = await students.deleteMany(query);

        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
          } else {
            console.log("No documents matched the query. Deleted 0 documents.");
          }

        //Delete Many
        // console.log("Deleted " + result.deletedCount + " documents");
    } catch (error) {
        console.log(error)
    }finally{
        await client.close();
    }
}

deleteData();