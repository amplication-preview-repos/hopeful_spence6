import { CallLog as TCallLog } from "../api/callLog/CallLog";

export const CALLLOG_TITLE_FIELD = "id";

export const CallLogTitle = (record: TCallLog): string => {
  return record.id?.toString() || String(record.id);
};
