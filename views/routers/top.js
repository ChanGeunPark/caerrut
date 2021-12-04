import axios from "axios";

axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by-rating').then((e)=>{
    console.log(e.data);
})