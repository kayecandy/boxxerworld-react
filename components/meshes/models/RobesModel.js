import { withSuspense } from "../withSuspense";
import BaseModel from "./BaseModel";

function RobesModel({ model, ...props }) {
  return <BaseModel {...props} model={model.models}></BaseModel>;
}

export default withSuspense(RobesModel);
