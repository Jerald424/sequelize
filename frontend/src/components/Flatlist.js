import { render } from "@testing-library/react";
import { HeadingText } from "./Typography";

export default function Flatlist({ data, renderItem, EmptyData, ...props }) {
  if (data?.length === 0) return EmptyData;
  return <>{data?.map((res, i) => renderItem(res, i))}</>;
}
