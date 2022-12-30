import { Client as ElasticsearchClient } from "https://deno.land/x/elasticsearch@v8.3.3/mod.ts";
import type { SearchResponse } from "https://deno.land/x/elasticsearch@v8.3.3/mod.ts";

const client = new ElasticsearchClient({
  node: "http://localhost:9200",
});

export default client;
