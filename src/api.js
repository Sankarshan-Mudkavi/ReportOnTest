
import cookie from 'react-cookie';
import fetch from 'isomorphic-fetch'
var API_URL = 'http://34.205.72.170:3000';

function timeout(ms,promise) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        reject(new Error("hmm... can't connect to the internet"))
      }, ms)
      promise.then(resolve, reject)
    })
  }

class Api {
  static async headers() {
    try {
      let DEMO_TOKEN = cookie.load('token') || '';
      return {
        'Authorization': 'Bearer ' + DEMO_TOKEN,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'dataType': 'json',
        'source':'web'
      }
    } catch (error) {
      console.log("error rerieving demo token " + error);
      return {
        'Authorization': 'Bearer ',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'dataType': 'json',
        'source':'web'
      }
    } 
  }

  static async get(route,time) {
    return this.xhr(route, null, 'GET', time);
  }

  static async put(route, params, time) {
    return this.xhr(route, params, 'PUT', time)
  }

  static  post(route, params, time) {
    
    return this.xhr(route, params, 'POST', time)
  }

  static async delete(route, params, time) {
    return this.xhr(route, params, 'DELETE', time)
  }

  static async xhr(route, params, verb, time) {
    if (!time) {
      var time = 10000;
    }
    const host = API_URL;
    const url = `${host}${route}`
    console.log('fetching ' + url);
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    options.headers =  await Api.headers();
    return timeout(time, fetch(url, options).then( respo => {
      console.log('api response for ' + url + " ");
      var json;
      if (respo.status == 401) {
        console.log("we have an unauthorized!");
        json = {
          error: 'you need to sign in'
        }
      } else {
        json = respo.json();  
      }
      
        return json;
    })).catch(function(error){
      console.log("whats the error from API? " + error.toString());
      throw error;
      console.log("aftertowr");
      return {error: error.toString()}

    })
  }
}
export default Api
