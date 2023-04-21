//creating Index in ElasticSearch

const esClient = require('./client');
const createIndex = async function(indexName) {
    return await esClient.indices.create({
        index: indexName
    });
}
module.exports = createIndex;

//function creates an index named blog
async function test() {
    try {
        const resp = await createIndex('blog');
        console.log(resp);

    } catch (e) {
        console.log(e);
    }
}

test();