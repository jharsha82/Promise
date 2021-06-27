const url = "https://jsonplaceholder.typicode.com/posts/1";
fetch(url)
.then(isStatus200)
.then(getPostJson)
.then(response => console.log(response))
.catch(error => console.log(error))

function isStatus200() {
   if(res.status === 200) {
       return res;
   } else {
      console.log('error fetching the data');
   }
}
function getPostJson(res) {
    return res.json()
  }