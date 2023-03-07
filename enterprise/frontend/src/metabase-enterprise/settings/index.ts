import MetabaseSettings from "metabase/lib/settings";
import type { TokenFeature } from "metabase-types/api";

export function hasPremiumFeature(feature: TokenFeature) {
  return true;
}
export function hasAnySsoPremiumFeature() {
  return true;
}
