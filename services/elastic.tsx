import { Client as ElasticsearchClient } from "https://deno.land/x/elasticsearch@v8.3.3/mod.ts";
import type { SearchResponse } from "https://deno.land/x/elasticsearch@v8.3.3/mod.ts";

import { config } from "https://deno.land/x/dotenv/mod.ts";
console.log(config());

import "https://deno.land/x/dotenv/load.ts";


// const ELASTICSEARCH_HOSTS =Deno.env.get("ELASTICSEARCH_HOSTS") || '';
const ELASTICSEARCH_HOSTS =Deno.env.get("ELASTICSEARCH_HOSTS") || "http://192.168.2.26:9200"
console.log("ELASTICSEARCH_HOSTS: ", ELASTICSEARCH_HOSTS)


const client = new ElasticsearchClient({
  node: ELASTICSEARCH_HOSTS,
});

export default client;
