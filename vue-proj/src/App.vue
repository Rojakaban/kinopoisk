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
      <select
        v-model="sortType"
        
        style="margin-bottom: 20px">
        
        <option>
          Выберите тип сортировки
        </option>

        <option>
          По названию
        </option>

        <option>
          По содержанию
        </option>

      </select>

      <post-list 
      :posts="searchAndSortedPosts"
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
      sortType: 'Выберите тип сортировки',
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
    searchAndSortedPosts() {
      const searchedPostsCopy = [...this.searchedPosts]
      if (this.sortType === 'По названию') {
        return searchedPostsCopy.sort((post1, post2) => {
          return post1.title.localeCompare(post2.title)
        })
      }
      else if (this.sortType === 'По содержанию') {
        return searchedPostsCopy.sort((post1, post2) => {
          return post1.body.localeCompare(post2.body)
        })
      }
      else {
        return searchedPostsCopy
      }
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
  watch: {
    // sortType(newValue, oldValue) {
    //   console.log('Значение sortType изменилось')
    //   console.log(`Новое значение: ${newValue}`)
    //   console.log(`Старое значение: ${oldValue}`)
    //   if (newValue === 'По названию') {
    //     this.posts = this.posts.sort((post1, post2) => {
    //       return post1.title.localeCompare(post2.title)
    //     })
    //   }
    //   else if (newValue == 'По содеражнию') {
    //     this.posts = this.posts.sort((post1, post2) => {
    //       return post1.body.localeCompare(post2.body)
    //     })
    //   }
    // }
  },
  async created() {
    // То, что происходит при создание компонента
    console.log('created')
    await this.getPosts()
  },
  mounted(){
    // То, что происходит, когда компонент появляется на экране
    console.log('mounted')
  },
  beforeUpdate() {
    // То, что происходит перед тем, как компонент обновится
    console.log('beforeUpdate')
  },
  updated() {
    // То, что происходит после обновления компонента
    console.log('updated')
  },
  beforeDestroy() {
    // То, что происходит пред тем, как компонент умрет
    
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
