<template>
    <div class="flex border-solid border-black border-4 p-4 w-2/4">
      <div class="font-semibold">
        <h1 class="text-2xl">
          Welcome to <span class="">ABSR Bank</span> <span class="ml-1 font-serif italic">{{ props ? props.user.name : ''}}</span>
        </h1>
        <h1 class="text-xl pt-5">Our services include Savings,Fixed Deposit,Loans etc</h1>
        <h1 class="text-xl pt-6">Your Account ID is : {{ props ? props.user._id : 'Loading...' }}</h1>
      </div>
      <div class="ml-20">
        <img width="150" height="100" src="https://img.icons8.com/ios-filled/50/user.png" alt="user"/>
      </div>
    </div>
  </template>
  
<script setup>
const {props} = defineProps(['props']);

console.log('card1.vue props:', props);
  
</script>
  