<template>
    <div id="guess">
        <p>
            Word: <b>{{ selectedCard.word }}</b>
            <b-icon icon="x-circle" class="float-right" font-scale="0.5" shift-v="-16" title="delete this fishka"></b-icon>
        </p>
        <p>
            <b-form-input v-model="guess" placeholder="Enter translation"></b-form-input>
        </p>
        <p>
            <b-button-toolbar class="float-right">
                <b-button-group class="mr-1">
                    <b-button variant="outline-primary">Hint</b-button>
                    <b-button variant="outline-primary">Next</b-button>
                    <b-button variant="outline-primary" @click="selectItem">Check</b-button>
                </b-button-group>
            </b-button-toolbar>
        </p>
    </div>
</template>

<script>

export default {
    name: 'Guess',
    data () {
        return {
            guess: '',
            wordId: 0
        }
    },
    props: ['flashcards'],
    methods: {
        selectItem: function () {
            this.wordId = Math.floor(Math.random() * this.flashcards.length)
        }
    },
    computed: {
        selectedCard: function () {
            return this.flashcards[this.wordId]
        }
    },
    mounted () {
    }
}
</script>

<style scoped>
p {
    font-size: 20px;
}
</style>
