import { makeRequest } from '../requests'

export const getStarredReposApi = ({ limit }) => {
  const params = new URLSearchParams()
  if (limit) {
    params.append('per_page', limit)
  }
  return makeRequest({
    url: `/user/starred?${params}`
  })
}

export const starRepoApi = ({ repo, owner }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'put'
})

export const unStarRepoApi = ({ repo, owner }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'delete'
})
