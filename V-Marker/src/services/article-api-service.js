import TokenService from './token-service';
import config from '../config';

// Handles all client API Calls
const ArticleApiService = {
  getPosts() {
    return fetch(`${config.API_ENDPOINT}/posts`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getVideos(term) {
    console.log(term)
    console.log(`https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${term}&key=AIzaSyD4o_IgejuaXmtd-fhZ6sHxOIKKp468Xqs`);

    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${term}&key=AIzaSyD4o_IgejuaXmtd-fhZ6sHxOIKKp468Xqs`)
  },
  getPost(postId) {
    return fetch(`${config.API_ENDPOINT}/posts/${postId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getPostComments(postId) {
    return fetch(`${config.API_ENDPOINT}/posts/${postId}/comments`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postComment(postId, text) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        post_id: postId,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  // This is a call to the server at localhost:8000/api/users to add new user to DB
  postPost(post) {
   console.log(post)
    return fetch (`${config.API_ENDPOINT}/posts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(post),
    })
      .then(res => 
        (!res.ok)
          ?res.json().then(e => Promise.reject(e))
          : res.json()
          )
      },

      // gets all posts
      getPosts() {
        return fetch(`${config.API_ENDPOINT}/posts`, {
          headers: {
            'authorization':`basic ${TokenService.getAuthToken()}`,
          },
        })
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          );
      },

      // get post by id
      getPost(postId) {
        return fetch(`${config.API_ENDPOINT}/posts/${postId}`, {
          headers: {
            'authorization':`bearer ${TokenService.getAuthToken()}`,
          },
        })
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          );
      },

       // get post by id
      //  getUserAccount(userName) {
      //   return fetch(`${config.API_ENDPOINT}/account/${userName}`, {
      //     headers: {
      //       'authorization':`bearer ${TokenService.getAuthToken()}`,
      //     },
      //   })
      //     .then(res =>
      //       (!res.ok)
      //         ? res.json().then(e => Promise.reject(e))
      //         : res.json()
      //     );
      // },
}

export default ArticleApiService