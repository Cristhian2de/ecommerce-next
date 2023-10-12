import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"sk0BqtEw6QrfwXLePfek8RmCkKo4vRJQBhBmS1TO9SIym7Dz25JjlJpI8Bo6oGoKY7nn14AzjwdYjnJExjCF31wSHC9n7CvxRanxKHHzGCFMtxtZE8KePhkt18X4RIiQ2Lg8z5yNmfZmkFHL2W3WOgUBqEezLdeW54ul4VjrKtZETwTaARZ6"
})