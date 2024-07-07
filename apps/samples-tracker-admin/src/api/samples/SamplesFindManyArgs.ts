import { SamplesWhereInput } from "./SamplesWhereInput";
import { SamplesOrderByInput } from "./SamplesOrderByInput";

export type SamplesFindManyArgs = {
  where?: SamplesWhereInput;
  orderBy?: Array<SamplesOrderByInput>;
  skip?: number;
  take?: number;
};
