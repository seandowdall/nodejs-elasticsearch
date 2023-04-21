const esClient = require('./client');

// Define an asynchronous function to get the mapping of an Elasticsearch index
const getMapping = async function(indexName){
    // Use the client to get the mapping of the specified index
    return await esClient.indices.getMapping({
        index: indexName
    });
}

module.exports = getMapping;

// Define an asynchronous test function to demonstrate how to use the getMapping function
async function test(){
    // Specify the index name you want to retrieve the mapping for
    const indexName = 'blog';

    // Attempt to get the mapping for the specified index
    try {
        const resp = await getMapping(indexName);
        // Log the mapping information if the request is successful
        console.log(resp.body);
    } catch (e) {
        // Log the error if the request fails
        console.log(e);
    }
}

// Call the test function to demonstrate the getMapping function
test();