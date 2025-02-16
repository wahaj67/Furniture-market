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
  "sk0mF4N6YIYFbHzn7tCFh8Ae67DzvYtBd5paatVSWirFuf0iMPgDE45aI4B3vE5g4KDGXfDKN2AS0yQKgsuOxI9k67xLrRsMsNlZf7123NgM4yYiHkvnjTNkiZim0zqOF6Ow9a5JJbTOc2DtpU7oNKSjhA7qgHwKszXNuA6nVlPVpE6TeyQP",
  "Missing env variablae SANITY_API_TOKEN"
) 

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
