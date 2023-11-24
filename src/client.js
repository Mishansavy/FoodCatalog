import { createClient } from "@sanity/client";
export default createClient({
  projectId: "craua8br",
  dataset: "production",
  apiVersion: "2023-11-21",
  token: "",
  useCdn: true,
});
