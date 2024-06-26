import { isSyncCompleted } from "metabase/lib/syncing";
import * as Urls from "metabase/lib/urls";
import type { RecentItem } from "metabase-types/api";

export const isItemActive = ({ model, model_object }: RecentItem) => {
  if (model !== "table") {
    return true;
  }
  return isSyncCompleted(model_object);
};

export const getItemUrl = (item: RecentItem) => {
  const url = isItemActive(item) && Urls.modelToUrl(item);
  return url || undefined;
};
