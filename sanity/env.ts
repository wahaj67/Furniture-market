export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-19'

export const datasetss = assertValue(
  "production",
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectIds = assertValue(
  "dy7s2c62",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const tokenss = assertValue(
  "skL5MyCOf7XXb16TAWONNXYvsUe3UTYhvcUmHMaQw99IeCzKozK6131ItZVj7VLjFUlCjkvjhpThUmoFvu7WurAAss0ITP0q3d7mm1tk7o7sQJ8i7olexSneQLKizFMa1Tcd34t6S1YMQI99c4XufDMllHiYntl9I91eHUzZDXTiL96R9Wif",
  "Missing env variablae SANITY_API_TOKEN"
) 

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
