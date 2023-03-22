<template>
  <div id="app">
    <post-form  @add="addPost">
    
    </post-form>
    <div class="posts">
      <h2>Список постов</h2>

      <input
        v-model="searchString"
        placeholder="Поиск поста" 
        style="margin-bottom: 20px;"
      >

      <post-list 
      :posts="searchedPosts"
       @delete-post="deletePost"
      ></post-list>
    </div>
    </div>

</template>

<script>
import PostList from './components/PostList.vue'
import PostForm from '@/components/PostForm.vue'
import axios from 'axios'

export default {
  components: { PostList, PostForm 
  },
  name: 'App',
  data() {
    return {
      title: '',
      text: '',
      posts: [],
      searchString: '',
    };
  },
  computed: {
    searchedPosts() {
      const sortedPosts = [];
      for (const post of this.posts) {
        if (post.title.includes(this.searchString)) {
          sortedPosts.push(post);
        }
      }
      return sortedPosts;
    },
  },
  methods: {
    addPost(post) {
      console.log(post);
      this.posts.push({
        ...post,
      });
    },
    deletePost(index) {
      this.posts.splice(index, 1)
    },
    async getPosts() {
      const url = 'https://jsonplaceholder.typicode.com/posts'
      try {
        const response = await axios.get(url)
        this.posts = response.data
      }
      catch(error) {
        console.error('ОШИБКА')
        console.error('Произошла оишбка при получение постов')
      }
    
    },
  },
  async created() {
    await this.getPosts()
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 20px;
  font-size: 30px;
}

</style>
