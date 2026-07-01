const algoliasearch = require("algoliasearch");

const appID = process.env.ALGOLIA_APPLICATION_ID;
const apiKey = process.env.ALGOLIA_API_KEY;
const indexName = process.env.ALGOLIA_INDEX_NAME || "api-onemap8";

if (!appID || !apiKey) {
  console.warn("Algolia env vars not set, skipping indexing.");
  process.exit(0);
}

const client = algoliasearch(appID, apiKey);
const index = client.initIndex(indexName);

const record = { objectID: "object-1", name: "test record" };

index.saveObject(record).then(({ taskID }) => {
  return index.waitTask(taskID);
}).then(() => {
  return index.search("test");
}).then(({ hits }) => {
  console.log(JSON.stringify(hits));
}).catch((err) => {
  console.error("Algolia error:", err.message);
  process.exit(1);
});