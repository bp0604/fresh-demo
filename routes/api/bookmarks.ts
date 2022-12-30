import { Handlers } from "$fresh/server.ts";

import client from "../../services/elastic.tsx";

import type { SearchResponse } from "https://deno.land/x/elasticsearch@v8.3.3/mod.ts";
interface Source {
  name: string;
  id: string;
  content: string;
}

// 返回格式定义 TODO
interface Ret {
  error?: string;
  data: Source[]
}

// Current Problem
// 1. 异常报错接不到，比如 index 不存在



// search
// GET bookmark-mysql/_search
// {
//   "query" : {
//     "match_all": {}
//   },
//   "_source": ["name","id"],
//   "size": 10
// }
export const handler: Handlers = {
  async GET(req, ctx) {

    const url = new URL(req.url);
    const query = url.searchParams.get("query") || "";
    const field = url.searchParams.get("field") || "";

    let searchParams = {
      target: "bookmark-mysql",
      body: {
        query: {
          match: {
            [field]: query,
            // name: "good",
          },
        },
        _source: ["name", "id", "content"],
        size: 10,
      },
    };

    try {
      const res: SearchResponse<Source> = await client.search<Source>(
        searchParams
      );
      // console.log(res);

      let arr: Source[] = [];
      if ("hits" in res) {
        if (res.hits.total.value > 0) {
          arr = res.hits.hits.map((hit) => {
            return {
              name: hit._source.name,
              id: hit._source.id,
              content: hit._source.content
            };
          });
        }
      }

      const ret = {
        data: arr,
      }

      return new Response(JSON.stringify(ret), {
        headers: { "Content-Type": "application/json" },
      });

    } catch (error) {
      const ret = {
        error: error.error.reason
      }
      return new Response(JSON.stringify(ret), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // res.responses.forEach((m) => {
    //   if ("hits" in m) {
    //     console.log(m.status);
    //   } else if ("error" in m) {
    //     console.log(m.error.root_cause[0].reason);
    //   }
    // });
  }
};


// http://localhost:8000/api/bookmarks?query=spring&field=name
// http://localhost:8000/api/bookmarks?query=spring&field=content

// npm
// https://www.npmjs.com/package/@elastic/elasticsearch
// https://juejin.cn/post/6844903881898459150



