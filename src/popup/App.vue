<template>
    <div id="main">
            <b-tabs fill card>
                <b-tab title="Start">
                    <b-card-text>
                        <Guess :flashcards="flashcards"/>
                    </b-card-text>
                </b-tab>
                <b-tab title="New">
                    <b-card-text>
                        <New />
                    </b-card-text>
                </b-tab>
                <b-tab title="All" @click="getItems">
                    <b-card-text>
                        <All :flashcards="flashcards" @remove-item="removeItem"/>
                    </b-card-text>
                </b-tab>
                <b-tab title="Panel">
                    <b-card-text>
                        <Panel />
                    </b-card-text>
                </b-tab>
            </b-tabs>
        <br>
    </div>
</template>

<script>
import Guess from '@/components/Guess.vue'
import New from '@/components/New.vue'
import All from '@/components/All.vue'
import Panel from '@/components/Panel.vue'

export default {
    name: 'App',
    components: { 
        Guess,
        New,
        All,
        Panel
    },
    data () {
        return {
            flashcards: [{
                word: '',
                translation: ''
            }]
        }
    },
    methods: {
        getItems: function () {
            this.flashcards = JSON.parse(localStorage.getItem('panfishek'))
        },
        removeItem: function (index) {
            this.flashcards.splice(index, 1)
            localStorage.setItem("panfishek", JSON.stringify(this.flashcards))
        }
    },
    mounted () {
        this.flashcards = JSON.parse(localStorage.getItem('panfishek'))
    }
}

</script>

<style>
html {
    min-width: 300px;
}

#main {
    padding-bottom: 1rem;
}
</style>
