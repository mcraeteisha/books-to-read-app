<template>
    <div class="bookListContainer">
        <div class="heading">
            <h2 id="title">Books to Read</h2>
            <add-book-form 
                v-on:reloadlist="getList()"
            />
        </div>    
        <list-view :books="books" 
        v-on:reloadlist="getList()" />
    </div>
</template>

<script>

import addBookForm from "./addBookForm"
import listView from "./listView"

export default {
    name: 'app',
    components: {
        addBookForm,
        listView
    }

}

</script>

<style scoped>

</style>
