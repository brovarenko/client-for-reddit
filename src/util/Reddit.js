
const API_URL = 'https://www.reddit.com';

const Reddit = {  

  async getPosts (str) {
  const query = await fetch(`${API_URL}/r/${str}/.json`, {
    type: 'text/html',
  })
  const json = await query.json()
  return json.data.children
  },
  async getPostComments (str) {
    const query = await fetch(`${API_URL}/r/${str}/.json`)
    const json = await query.json()
    
    return json[1].data.children
  },
  async getSubredditInf (str) {
    const query = await fetch(`${API_URL}/r/${str}/about/.json`)
    const json = await query.json()
   
    return json.data
  },
  async searchCommunities (str) {
    const query = await fetch(`${API_URL}/search/.json?q=${str}&type=sr`)
    const json = await query.json()
   
    return json.data.children
  },
  async getPopularPosts () {
    const query = await fetch(`${API_URL}/r/popular.json`)
    const json = await query.json()
   
    return json.data.children
  }


}
export default Reddit; 
