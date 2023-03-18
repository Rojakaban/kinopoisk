<template>
<div>
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
    
</template>

<script>
import PostList from '@/components/PostList.vue'

export default {
    name: 'App',
    comments: {
        PostList,
    },
    props: {
        posts: {
            type: Array,
            default() {
                return []
            },
            required: true,
        },
    },
    
}
</script>

<style> 

</style>