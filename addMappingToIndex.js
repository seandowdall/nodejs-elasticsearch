const esClient = require('./client');
const addmappingToIndex = async function(indexName, mapping){
    console.log(mapping);
    return await esClient.indices.putMapping({
        index: indexName,
        body: mapping
    });
}

module.exports = addmappingToIndex;


// test function to explain how to invoke.
async function test(){
    const mapping = {
        properties: {
            title: {
                type: "text"
            },
            tags: {
                type: "keyword"
            },
            body: {
                type: "text"
            },
            timestamp: {
                type: "date",
                format: "epoch_millis"
            }
        }
    }
    try {
        const resp = await addmappingToIndex('blog', mapping);
        console.log(resp);
    } catch (e) {
        console.log(e);
    }
}


test();