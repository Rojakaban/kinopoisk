<template>
  <div id="app">
    <div class="form">

    
    <h1>Создание поста</h1>
    
    <div>
      <input
        v-model="title"
        type="text"
        placeholder="Название поста"
      >
    </div>
    
    <div>
      <input
        v-model="text"
        type="text"
        placeholder="Содержание поста"
      >
    </div>
    
    <div>
      <button @click="addPost">Добавить пост</button>
    </div>
    
    <div class="posts">
      <h2>Список постов</h2>
      
      <post-list></post-list>
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
    </div>
</template>

<script>
import PostList from './components/PostList.vue';
export default {
  components: { PostList },
  name: 'App',
  data() {
    return {
      title: '',
      text: '',

      posts: []
    };
  },
  methods: {
    addLike() {
      this.likes += 1
    },
    addDislike() {
      this.dislikes += 1
    },
    addPost() {
      this.posts.push({
        title: this.title,
        text: this.text,
      });
      this.title = this.text = '';
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
