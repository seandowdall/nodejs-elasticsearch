const esClient = require('./client');
const searchDoc = async function(indexName, payload){
    return await esClient.search({
        index: indexName,
        body: payload
    });
}

module.exports = searchDoc;


async function test(){
    const body = {
        query: {
            match: {
                "title": "Learn"
            }
        }
    }
    try {
        const resp = await searchDoc('blog', body);
        console.log(resp);
    } catch (e) {
        console.log(e);
    }
}

test();

//returns items with a title of learn