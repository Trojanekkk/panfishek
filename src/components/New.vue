<template>
    <div id="new">
        <p>Word:</p>
        <p>
            <b-form-input ref="email" v-model="word" placeholder="Enter new"></b-form-input>
        </p>
        <p>Translation</p>
        <p>
            <b-form-input v-model="translation" @keyup.enter="$emit('add-item', {word, translation})" placeholder="Enter translation"></b-form-input>
        </p>
        <p>
            <b-button-toolbar class="float-right">
                <b-button-group class="mr-1">
                    <b-button variant="outline-primary" @click="$emit('add-item', {word, translation})">Add</b-button>
                </b-button-group>
            </b-button-toolbar>
        </p>
    </div>
</template>

<script>
export default {
    name: 'New',
    data () {
        return {
            word: '',
            translation: ''
        }
    },
    props: ['flashcards'],
    watch: {
        flashcards: function () {
            this.word = ''
            this.translation = ''
            this.$refs.email.focus()
        }
    }
}
</script>

<style scoped>
p {
    font-size: 17px;
}
</style>
