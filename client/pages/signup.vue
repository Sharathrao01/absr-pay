<script setup>

import axios from 'axios';
import { resolveTransitionHooks } from 'vue';

const fullName = ref('');
const phNo = ref();
const email = ref('');
const address = ref('');
const age = ref();


const onSubmit = async (e) => {
    e.preventDefault();
    
    const credentials = {
        "name" : `${fullName.value}`,
        "email" : `${email.value}`,
        "phno" : `${phNo.value}`,
        "address" : `${address.value}`,
        "age" : `${age.value}`
    };
    //console.log(fullName.value,phNo.value,email.value,address.value,age.value)

    try {
      const jsonData = JSON.stringify(credentials); // Stringify credentials object
      const response = await axios.post('http://localhost:4000/api/v1/auth/signup', jsonData, {
        headers: {
          'Content-Type': 'application/json'
      }
      });
      console.log(response.data.success)
    if (response.data.success) {
  // Format the createdAt date into a readable string
      const formattedCreatedAt = response.data.newAccount.createdAt.toLocaleString();
      

      alert(`User Created successfully! \n Account Number: ${response.data.newAccount.accNum}  \nPin: 1234\nCreated At: ${formattedCreatedAt}`);
      } else {
       alert("error");
      }
    }
    catch (error)
    {
        alert("Error while creating account", error);
    }

}
</script>
<template>
    <div class="flex flex-col min-h-screen justify-between items-center bg-gray-100">
      <div class="flex justify-center items-center h-full">
        <div class="bg-emerald-700 w-full p-10 mt-3 rounded-xl shadow-lg flex flex-col md:flex-row items-center">
          <div class="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h1 class="text-4xl font-semibold text-white mb-8">Create Account</h1>
            <form @submit="onSubmit" class="w-full">
              <div class="mb-4">
                <input type="text" v-model="fullName" placeholder="Full Name" class="input-field">
              </div>
              <div class="mb-4">
                <input type="number" v-model="phNo" placeholder="Contact Number" class="input-field">
              </div>
              <div class="mb-4">
                <input type="text" v-model="email" placeholder="Email" class="input-field">
              </div>
              <div class="mb-4">
                <input type="text" v-model="address" placeholder="City" class="input-field">
              </div>
              <div class="mb-4">
                <input type="number" v-model="age" placeholder="Age" class="input-field">
              </div>
              <div class="flex items-center gap-4">
                <button type="submit" class="btn-primary">Create</button>
                <nuxt-link to="/" class="btn-secondary">Login</nuxt-link>
              </div>
            </form>
          </div>
          <div class="hidden md:block ml-8 p-10">
            <img
              width="200"
              height="200"
              src="https://img.icons8.com/ios-filled/100/groups.png"
              alt="groups"
            />
          </div>
        </div>
      </div>
      <div class="bg-gray-800 w-full py-5 px-8">
        <!-- Footer content goes here -->
      </div>
    </div>
  </template>
  
  <style scoped>
    .input-field {
      width: 100%;
      padding: 10px;
      font-size: 1.6rem;
      border-radius: 5px;
      border: 1px solid black;
      background-color: darkslategray;
    }
  
    .btn-primary {
      background-color: maroon;
      color: #fff;
      padding: 10px 20px;
      border-radius: 5px;
      font-size: 1.6rem;
      cursor: pointer;
    }
  
    .btn-secondary {
      background-color: brown;
      color: #fff;
      padding: 10px 20px;
      border-radius: 5px;
      font-size: 1.6rem;
      cursor: pointer;
    }
  </style>
  
