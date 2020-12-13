<template>
    <div id="guess">
        <p>Word: <b>{{ word }}</b><b-icon icon="x-circle" class="float-right" font-scale="0.5" shift-v="-8"></b-icon></p>
        <p>
            <b-form-input v-model="guess" placeholder="Enter translation"></b-form-input>
        </p>
        <p>
            <b-button-toolbar class="float-right">
                <b-button-group class="mr-1">
                    <b-button variant="outline-primary"><b-icon icon="arrow-right"></b-icon></b-button>
                    <b-button variant="outline-primary">Check</b-button>
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
            word: 'Naleśnik',
            translation: 'pancake',
            guess: ''
        }
    },
    methods: {
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
