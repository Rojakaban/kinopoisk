<template>
<div>
    <div v-if="posts.length === 0">
        Добавленных постов нет
    </div>
<div
        v-for="(post, index) in posts"
        :key="index"
        class="post"
        style="cursor: pointer;"
        
      >
      <div style="display: flex; justify: space-between; align-items: center;">
      
      <div style="width: 90%;" @click="showDetails(post.id)">
        <h4>Название поста: {{ post.title }}</h4>   
        <h5><strong>Содержание поста:</strong> {{ post.body }}</h5>
      </div>
      
      <div>
        <button style="border: 1px solid red; colour: red;" @click="deletePost(index)">Удалить</button>
      </div>
    </div>
</div>
</div>
</template>

<script>
import PostList from '@/components/PostList.vue'

export default {
    name: 'PostList',
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
    methods: {
        deletePost(index) {
            this.$emit('delete-post', index, '123')
        },
        showDetails(postId) {
        this.$router.push({
            name: 'post',
            params: {
                id: postId,
            },
        })
    },
    },
    
}
</script>

<style> 

</style>