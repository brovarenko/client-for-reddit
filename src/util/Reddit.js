
const API_URL = 'https://www.reddit.com';
// const state = 'dawdwadefrfdbfe43tggdrregehez'
// const authorization_URL = `https://www.reddit.com/api/v1/authorize?client_id=e8cTIdrkMDhhOIDncp0zUw&response_type=code&
// state=dawdwadefrfdbfe43tggdrregehez&redirect_uri=http://localhost:3000&duration=permanent&scope=identity`
const initialOptions = {
  headers: {
    accept: 'application/json',
  },
};
const Reddit = {
  
   

  async getPosts (subreddit) {
  const query = await fetch(`${API_URL}/r/${subreddit}/.json`)
  const json = await query.json()
  return json.data.children
  },
  async getPostComments (sub) {
    const query = await fetch(`${API_URL}/r/${sub}.json`)
    const json = await query.json()
    
    return json[1].data.children
  },


}
export default Reddit; 
