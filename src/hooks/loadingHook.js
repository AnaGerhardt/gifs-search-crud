import { useSelector } from "react-redux";

export default function useLoading(service) {
  const loading = useSelector((state) => state.loading);
  if (typeof service === "string") {
    return loading[service];
  } else if (service.url) {
    return loading[service.url];
  } else {
    return false;
  }
}
