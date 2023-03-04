<template>
  <div id="app">
    <div class="form">
    <!-- <div>
    Количество лайков: {{ likes }}
    </div>
    <div>
    Количество дизлайков: {{ dislikes }}
    </div>
    <div>
      <button class="like" @click="addLike">Лайк</button>
      <button class="dislike" @click="addDislike">Дизлайк</button>
    </div> -->
    
    <h1>Создание поста</h1>
    
    <div>
      <input
        v-model="title"
        type="text"
        placeholder="Название поста"
      >
    </div>
    
    <!-- <div>
    <button class="cp">Содержание поста</button>
    </div> -->
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
      <div
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
    
    </div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: '',
      text: '',
      // likes: 0,
      // dislikes: 0,
      posts: [
        
      ]
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
/* .like{
  background: green;
  color: white;
  cursor: pointer;
}
.dislike{
  background: red;
  color: white;
  cursor: pointer;
} */
</style>
