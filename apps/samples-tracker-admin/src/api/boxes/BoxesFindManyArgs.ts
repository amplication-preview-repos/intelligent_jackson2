import { BoxesWhereInput } from "./BoxesWhereInput";
import { BoxesOrderByInput } from "./BoxesOrderByInput";

export type BoxesFindManyArgs = {
  where?: BoxesWhereInput;
  orderBy?: Array<BoxesOrderByInput>;
  skip?: number;
  take?: number;
};
