import { CallLogWhereInput } from "./CallLogWhereInput";
import { CallLogOrderByInput } from "./CallLogOrderByInput";

export type CallLogFindManyArgs = {
  where?: CallLogWhereInput;
  orderBy?: Array<CallLogOrderByInput>;
  skip?: number;
  take?: number;
};
