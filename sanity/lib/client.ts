import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"skRQwW7c5yqSm8ALGBipBo4rNtucuohggcx7dJqJFv5FbZwCFHPdV3Gxpl4nviGNVVJvNzNZ4YI66SbiewLkuflibqB5Ay6ETjaDczmVhvziv1CMNolwQdkPYz8HJlEaQFhD19VxxLOis2RpbBygf0Xtt3vvLr32L2M9iOKQHLo1t2tCa3s8"
})
