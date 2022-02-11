<template>
    <div>
        <div v-for="(book, index) in Books" :key="index" >
            <list-item
            :book="book"
            class="book"
            v-on:bookchanged="$emit('reloadlist')"
            />
        </div>
    </div>
</template>

<script>

import listItem from "./listItem"
import listItem from "./listItem.vue"

export default {
    props: ['books'],
    components: { 
        listItem 
    },
    data: function () {
        return {
            books: []
        }
    },
    methods: {
        getList () {
            axios.get('api/books')
            .then( response => {
                this.books = response.data
            })
            .catch( error => {
                console.log( error );
            })
        }
    },
    created() {
        this.getList();
    }

}
</script>