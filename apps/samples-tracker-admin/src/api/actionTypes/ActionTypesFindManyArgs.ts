import { ActionTypesWhereInput } from "./ActionTypesWhereInput";
import { ActionTypesOrderByInput } from "./ActionTypesOrderByInput";

export type ActionTypesFindManyArgs = {
  where?: ActionTypesWhereInput;
  orderBy?: Array<ActionTypesOrderByInput>;
  skip?: number;
  take?: number;
};
