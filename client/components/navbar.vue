<template>
    <div class="h-24 bg-slate-500 ">
            <div class="flex ml-16 items-center">
                <div class="mt-2 flex ml-3">
                    <img width="82" height="64" src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/external-bank-currency-icongeek26-outline-icongeek26-9.png" alt="external-bank-currency-icongeek26-outline-icongeek26-9"/>
                    <h1 class="text-3xl mt-6 ml-4 font-serif">ABSR Bank</h1>
                </div>
                <div class="flex ml-96">
                    <div class="space-x-16">
                    <nuxt-link class="text-3xl font-sans" to="/about">About</nuxt-link>
                    <nuxt-link class="text-3xl font-sans" to="/branches">Branches</nuxt-link>
                    <nuxt-link class="text-3xl font-sans" to="/netAmount">Net Amount</nuxt-link>
                    <button class="text-3xl mb-1" @click="logout">Logout</button>
                    </div>
                <div class="flex ml-20 space-x-2">
                    <img width="40" height="30" src="https://img.icons8.com/ios-glyphs/30/user--v1.png" alt="user--v1"/>
                    <h2 class="text-3xl">{{ props ? props.user.name : 'Loading...'}}</h2>
                </div>
                <!-- <button class="text-3xl mb-1" @click="logout">Logout</button> -->
            </div>
        </div> 
        </div>
        <div class="bg-black h-1"></div>

        <infinite-hprizontal-scroll-bar></infinite-hprizontal-scroll-bar>

</template>

<script setup>
import axios from 'axios';

const {props} = defineProps(['props'])


const logout = async() => {
await axios.get('http://localhost:4000/api/v1/auth/logout');
alert('Logging out...\n Thank you\nVisit Again')
navigateTo('/')
}
</script>

