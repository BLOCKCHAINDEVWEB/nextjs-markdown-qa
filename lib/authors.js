const authors = {
  authors: [
    { slug: 'ygoalen', name: 'Yannick Goalen', introduction: 'Developper Web et Web mobile / Javascript / React' }
  ]
}

const authorMap = generateAuthorMap()

function generateAuthorMap() {
  let result = {}
  for (const author of authors.authors) {
    result[author.slug] = author
  }
  return result
}

export function getAuthor(slug) {
  return authorMap[slug]
}
