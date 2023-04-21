const esClient = require('./client');
const insertDoc = async function(indexName, _id, data) {
    return await esClient.index({
        index: indexName,
        id: _id,
        body: data
    });
}

module.exports = insertDoc;

async function test(){
    const data ={
        title: "Learn elastic search",
        tags: ['NodeJS', 'Programming'],
        body: 'Lot of content here........................... article.......'
    }
    try{
        const resp = await insertDoc('blog', 2, data);
        console.log(resp);
    
    } catch (e) {
        console.log(e)
    }
    
}
test();