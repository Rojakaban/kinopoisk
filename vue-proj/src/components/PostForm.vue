<template>
    <div class="form">
    <h1>Создание поста</h1>
    
    <div>
      <input
        v-model="post.title"
        type="text"
        placeholder="Название поста"
      >
    </div>
    
    <div>
      <input
        v-model="post.body"
        type="text"
        placeholder="Содержание поста"
      >
    </div>
    
    <div>
      <button @click="addPost">Добавить пост</button>
    </div>
    </div>
</template>

<script>
export default {
    name: 'PostForm',
    data() {
        return {
            post: {
                title: '',
                body: '',
            },
        }
    },
    methods: {
        addPost() {
            this.$emit('add', this.post)
        },
    },
}
</script>

<style>

</style>