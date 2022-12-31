import { Client as ElasticsearchClient } from "https://deno.land/x/elasticsearch@v8.3.3/mod.ts";
import type { SearchResponse } from "https://deno.land/x/elasticsearch@v8.3.3/mod.ts";

const ELASTICSEARCH_HOSTS =Deno.env.get("ELASTICSEARCH_HOSTS") || "http://192.168.2.44:9200"
console.log("ELASTICSEARCH_HOSTS: ", ELASTICSEARCH_HOSTS)

const client = new ElasticsearchClient({
  node: ELASTICSEARCH_HOSTS,
});

export default client;
