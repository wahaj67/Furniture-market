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
  "skiPE3dZohAoCZv4gaooKpDZ8x3ryWPcvMBcwGeReJmgwdlvWmyr5BYfOkLGhaEV5Y3rpv3p33RTtwI5hStpq5LBOdXM0XBaZuVzLillIYWBeHIX9OmTvPml1e0a9xdTE0IGfJbRo1hyPb0vpt1fH1ZNnbkFI1z1W0cZxr9HSjSc8UB7yIOl",
  "Missing env variablae SANITY_API_TOKEN"
) 

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
