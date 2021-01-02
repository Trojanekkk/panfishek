<template>
    <div id="guess">
        <p>
            Word: <b>{{ selectedCard.word }}</b>
            <ButtonSwitch @click.native="$emit('remove-item', wordId)"/>
        </p>
        <p>
            <b-form-input v-model="guess" placeholder="Enter translation" :state="checkState"></b-form-input>
        </p>
        <p>
            <b-button-toolbar class="float-right">
                <b-button-group class="mr-1">
                    <b-button variant="outline-primary" @click="showHint">Hint</b-button>
                    <b-button variant="outline-primary" @click="selectItem">Next</b-button>
                    <b-button variant="outline-primary" @click="checkMyGuess">Check</b-button>
                </b-button-group>
            </b-button-toolbar>
        </p>
    </div>
</template>

<script>
import ButtonSwitch from '@/components/ButtonSwitch.vue'

export default {
    name: 'Guess',
    components: {
        ButtonSwitch
    },
    data () {
        return {
            guess: '',
            wordId: 0,
            checkState: null
        }
    },
    props: ['flashcards'],
    methods: {
        selectItem: function () {
            this.guess = ''
            this.checkState = null
            this.wordId = Math.floor(Math.random() * this.flashcards.length)
        },

        showHint: function () {
            if (this.guess.length > 0) {
                let guessArr = this.guess.split("")
                let translationArr = this.selectedCard.translation.split("")
                for (let i = 0; i < guessArr.length; i++) {
                    if (guessArr[i] === translationArr[i]) {
                        continue
                    } else
                        alert(guessArr[i])
                        alert(translationArr[i])
                        guessArr[i] = translationArr[i]
                        break
                }
                guessArr.join()
                this.guess = guessArr
            }
        },
        checkMyGuess: function () {
            if (this.checkState === null) {
                if (this.guess === this.selectedCard.translation)
                    this.checkState = true
                else
                    this.checkState = false
            } else {
                this.selectItem()
            }
        }
    },
    computed: {
        selectedCard: function () {
            return this.flashcards[this.wordId]
        }
    }
}
</script>

<style scoped>
p {
    font-size: 20px;
}
</style>
