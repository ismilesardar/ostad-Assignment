const { client } = require("./config");

async function insertData() {
    try {
        const mydatabase = client.db('school');
        const students = mydatabase.collection('students');

        const options = { ordered: true };
        // const dos = {name: 'Abule',age: 15};
        const dosMany = [
            {name: 'Keder',age: 17,location: 'Dhaka'},
            {name: 'Babor',age: 20,location: 'Khulna'},
            {name: 'Sagol',age: 19,location: 'Rangpur'},
            {name: 'Galib',age: 14,location: 'Dhaka'},
            {name: 'Hasen',age: 18,location: 'Slyte'},
            {name: 'Rohan',age: 16,location: 'khulna'},
        ]

        // const result = await students.insertOne(dos);
        const result = await students.insertMany(dosMany,options);
        
        // console.log(`A document was inserted with the _id: ${result.insertedId}`);
        console.log(`${result.insertedCount} documents were inserted`);  
    } catch (error) {
        console.log(error)
    }finally{
        await client.close();
    }
}

insertData();