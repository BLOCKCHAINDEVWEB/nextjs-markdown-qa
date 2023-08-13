const tags = {
  tags: [
    { slug: 'postgres', name: 'postgres' },
    { slug: 'papertrail', name: 'papertrail' },
    { slug: 'heroku', name: 'heroku' },
    { slug: 'monitor', name: 'monitor' },
    { slug: 'bot', name: 'bot' },
    { slug: 'dapp', name: 'dapp' },
    { slug: 'high', name: 'high' },
    { slug: 'middle', name: 'middle' },
    { slug: 'low', name: 'low' },
    { slug: 'archives', name: 'archives' }
  ]
}

const tagMap = generateTagMap();

function generateTagMap() {
  let result = {}
  for (const tag of tags.tags) {
    result[tag.slug] = tag
  }
  return result
}

export function getTag(slug) {
  return tagMap[slug]
}

export function listTags() {
  return tags.tags
}
