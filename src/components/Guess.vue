<template>
    <div id="guess">
        <p>Word: <b>{{ word }}</b><b-icon icon="x-circle" class="float-right" font-scale="0.5"></b-icon></p>
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
        <!-- <p @click="getTodo">insert todo manually</p>
        <p>{{ todo }}</p> -->
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Guess',
    data () {
        return {
            word: 'Naleśnik',
            translation: 'pancake',
            guess: '',
            todo: {},
            todoo: {}
        }
    },
    methods: {
        getTodo: function () {
            return axios.get(
                'https://jsonplaceholder.typicode.com/todos/1'
            ).then((res) => { this.todo = res.data })
        }
    },
    mounted () {
        axios.get(
            'https://jsonplaceholder.typicode.com/todos/1'
        ).then((res) => { this.todoo = res.data })
    }
}
</script>

<style scoped>
p {
    font-size: 20px;
}
</style>
