import { createClient, type Entry, type EntryCollection } from 'contentful'

const space = process.env.CONTENTFUL_SPACE_ID || process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_DELIVERY_TOKEN || process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN

if (!space || !accessToken) {
  throw new Error('Contentful credentials are not set in environment variables.')
}

const client = createClient({
  space,
  accessToken,
})

export async function getEntries<T>(contentType: string, query?: Record<string, unknown>): Promise<T[]> {
  const entries: EntryCollection<T> = await client.getEntries<T>({
    content_type: contentType,
    ...query,
  })
  return entries.items.map(item => ({
    ...item.fields,
    sys: item.sys,
  }))
}

export async function getEntry<T>(contentType: string, uid: string): Promise<T | null> {
  const entries: EntryCollection<T> = await client.getEntries<T>({
    content_type: contentType,
    'fields.uid': uid,
    limit: 1,
  })
  const item = entries.items[0]
  if (!item) return null
  return {
    ...item.fields,
    sys: item.sys,
  }
}