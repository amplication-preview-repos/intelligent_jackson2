import { ActionTypes as TActionTypes } from "../api/actionTypes/ActionTypes";

export const ACTIONTYPES_TITLE_FIELD = "action";

export const ActionTypesTitle = (record: TActionTypes): string => {
  return record.action?.toString() || String(record.id);
};
