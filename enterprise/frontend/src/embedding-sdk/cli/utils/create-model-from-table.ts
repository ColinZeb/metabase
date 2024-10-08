import type { Table } from "metabase-types/api";

import { propagateErrorResponse } from "./propagate-error-response";

interface Options {
  table: Table;
  databaseId: number;

  cookie: string;
  instanceUrl: string;
}

export async function createModelFromTable(options: Options) {
  const { databaseId, table, instanceUrl, cookie = "" } = options;

  const datasetQuery = {
    type: "query",
    database: databaseId,
    query: { "source-table": table.id },
  };

  // Generate the query metadata
  let res = await fetch(`${instanceUrl}/api/dataset/query_metadata`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify(datasetQuery),
  });

  await propagateErrorResponse(res);

  const { tables } = (await res.json()) as { tables: Table[] };

  if (tables.length === 0) {
    throw new Error(`Cannot find table "${table.name}" in database.`);
  }

  // Create a new model
  res = await fetch(`${instanceUrl}/api/card`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({
      name: table.display_name,
      type: "model",
      display: "table",
      result_metadata: null,
      collection_id: null,
      collection_position: 1,
      visualization_settings: {},
      dataset_query: datasetQuery,
      description: `A model created via the embedding sdk's CLI`,
    }),
  });

  await propagateErrorResponse(res);

  const { id: modelId } = (await res.json()) as { id: number };

  return { modelId, modelName: table.display_name };
}
