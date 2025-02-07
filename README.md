# Next.js 15: Error accessing undefined dynamic route segment in [...catchall]

This repository demonstrates a runtime error that can occur in Next.js 15 when accessing dynamic route segments in a `[...catchall]` route that don't exist.

## Problem

When using a catch-all route (`[...catchall]`), if the user navigates to a route where the `catchall` array is empty (e.g., navigating to the base URL when expecting at least one segment), attempting to access elements of `params.catchall` without checking its length can lead to a runtime error.

## Solution

Always check the length of the `params.catchall` array before accessing its elements.  The provided solution shows how to handle this case gracefully.

## Setup

1. Clone this repository.
2. Navigate to the repository in your terminal.
3. Run `npm install`.
4. Run `npm run dev`.

## Reproduction

Navigate to the root URL (`/`).  The error version will throw an error, while the solution will render gracefully.
