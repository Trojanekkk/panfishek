<template>
    <div id="main">
            <b-tabs fill card>
                <b-tab title="Start">
                    <b-card-text>
                        <Guess />
                    </b-card-text>
                </b-tab>
                <b-tab title="New">
                    <b-card-text>
                        <New />
                    </b-card-text>
                </b-tab>
                <b-tab title="All">
                    <b-card-text>
                        <All />
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
