<template>
    <div class="book">
        <input
            type="checkbox"
            @change="updateCheck()"
            v-model="book.inactive"
            />
            <span :class="[book.inactive ? 'inactive' : '', 'bookText']"> {{ book.name }} </span>
            <button @click="removeBook()" class="trashCan" >
                <font-awesome-icon icon="trash" />
            </button>
    </div>
</template>

<script>

export default {
    props: ['book'],
    methods: {
        updateCheck() {
            axios.put('api/book' + this.book.id, {
                book: this.book
            })
            .then( response => {
                if ( response.status == 200){
                    this.$emit('bookchanged');
                }
            })
            .catch( error => {
                console.log( error );
            })
        },
        removeBook() {
            axios.delete('api/book/' + this.book.id )
            .then( response => {
                if ( response.status == 200 ) {
                    this.$emit('bookchanged');
                }
            })
            .catch ( error => {
                console.log( error );
            })
        }
    }

}
</script>

<style scoped>
.inactive {
    text-decoration: line-through;
    color: #999999;
}

.bookText {
    width: 100%;
    margin-left: 20px;
}
.book {
    display: flex;
    justify-content: center;
    align-items: center;
}
.trashCan {
    background: #e6e6e6;
    border: none;
    color: red;
    outline: none;
}
</style>