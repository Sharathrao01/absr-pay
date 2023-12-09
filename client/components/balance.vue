<template>
    <div class="border-solid border-black border-4 p-4 w-3/12 h-48">
      <div class="font-semibold text-center">
        <h1 class="text-2xl">Available Balance</h1>
        <h1 class="text-xl pt-3">Rs. {{ props ? props.accNo.balance : 'Loading...' }}</h1>
        <h1 class="text-xl pt-2 pb-3">Acc Type : savings</h1>
        <h1 class="font-semibold text-xl">Account Number : {{ props ? props.accNo.accNum : 'Loading...' }}</h1>
        <!-- <nuxt-link class="border-2 border-black rounded-md border-solid p-1 text-lg font-semibold bg-green-600" to="/checkbook">Check Balance</nuxt-link> -->
      </div>
    </div>
  </template>
  
  <script setup>
 const {props} = defineProps(['props']);

console.log('balance.vue props:', props);
  </script>
  