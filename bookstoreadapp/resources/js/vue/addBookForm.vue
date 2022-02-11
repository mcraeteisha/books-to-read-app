<template>
    <div class="addBook">
        <input type="text" v-model="book.name"/>
        <font-awesome-icon
            icon="plust-square"
            @click="addBook()"
            :class="[ book.name ? 'active' : 'inactive', 'plus']"
        />
        Add a Book (Need to use Bootstrap to add button here)
    </div>
</template>

<script>import axios from "axios";


export default {
    data: function () {
        return {
            book: {
                name: "",
                description: ""
            }
        }
    },
    methods: {
        addBook() {
            if (this.addBook.name == '') {
                return;
            }

            axios.post('api/book/store', {
                book: this.book
            })
            .then( response => {
                if( response.status = 201 ){
                    this.book.name = "";
                    this.$emit('reloadlist');
                }
            })
            .catch( error => {
                console.log( error );
            })
        }
    }
}

</script>

<style scoped>
    .plus {
        font-size: 20px;
    }
    .active {
        color: teal;
    }
    .inactive {
        color: #999999;
    }

</style>