<template>
    <div class="bookListContainer">
        <div class="heading">
            <h2 id="title">Books to Read</h2>
            <add-book-form />
        </div>    
        <list-view />
    </div>
</template>

<script>

import addBookForm from "./addBookForm"
import listView from "./listView"

export default {
    components: {
        addBookForm,
        listView
    }

}
</script>

<style scoped>

</style>
