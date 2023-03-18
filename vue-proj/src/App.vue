<template>
  <div id="app">
    <post-form  @add="addPost">
    
    </post-form>
    <div class="posts">
      <h2>Список постов</h2>

      <post-list :posts="posts">
        
      </post-list>
      <!-- <div
        v-for="(post, index) in posts"
        :key="index"
        class="post"
      >
      <div style="display: flex; justify: space-between; align-items: center;">
      
      <div style="width: 90%;">
        <h4>Название поста: {{ post.title }}</h4> <br>  
        <p><strong>Содержание поста:</strong> {{ post.text }}</p>
      </div>
      
      <div>
        <button style="bo" @click="deletePost(index)">Удалить</button>
      </div>
     -->
    </div>
    </div>

</template>

<script>
import PostList from './components/PostList.vue';
import PostForm from '@/components/PostForm.vue'
export default {
  components: { PostList, PostForm 
  },
  name: 'App',
  data() {
    return {
      title: '',
      text: '',

      posts: [
        {
          id:1,
          title: 'Пост №1',
          body: 'Название поста №1',
        },
        {
          id:2,
          title: 'Пост №2',
          body: 'Название поста №2',
        }
      ]
    };
  },
  methods: {
    addPost(post) {
      this.posts.push(post);
    },
    deletePost(index) {
      this.posts.splice(index,1)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 32px;
}

</style>
