<template>
    <div class="w-full flex justify-center items-center">
      <div class="bg-emerald-700 w-2/6 mt-16 mb-16 rounded-3xl">
        <h1 class="text-5xl flex justify-center mt-5 font-serif">Login</h1>
        <img
          width="96"
          height="96"
          class="ml-56 mt-5"
          src="https://img.icons8.com/fluency-systems-filled/96/user.png"
          alt="user"
        />
        <div class="flex justify-center">
          <form @submit.prevent="onSubmit" class="mt-10 ml-16">
            <input
              type="text"
              v-model="accountNo"
              placeholder="Account Number"
              class="p-3 w-5/6 bg-black mb-6 text-white text-xl"
            />
            <input
              v-model="pin"
              type = "text"
              :type="showPassword ? 'text' : 'password'"
              
              placeholder="Password"
              class="p-3 w-5/6 bg-black text-white text-xl"
            />
  
            <div class="flex items-center">
              <input
                id="showPassword"
                type="checkbox"
                v-model="showPassword"
                class="hidden"
              />
              <label
                for="showPassword"
                @click="togglePasswordVisibility"
                class="cursor-pointer"
              >
                <i class="fas fa-eye"></i>
              </label>
            </div>
  
            <button
              type="submit"
              class="border-2 border-solid border-black p-3 text-xl bg-black text-white mt-5 ml-3 mb-4 rounded-lg"
            >
              Login
            </button>
            <NuxtLink
              to="/pinChange"
              class="border-2 border-solid border-black p-3 text-xl bg-black text-white mt-5 ml-10 mb-4 rounded-lg"
            >
              PIN reset
            </NuxtLink>
            <NuxtLink
              to="/signup"
              class="border-2 border-solid border-black p-3 text-xl bg-black text-white mt-5 ml-8 mb-4 rounded-lg"
            >
              Open Account
            </NuxtLink>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { useJwtToken } from '../composables/useJwtToken.js';
  import { ref } from 'vue';
  
  const { storeToken } = useJwtToken();
  
  const accountNo = ref('');
  const pin = ref('');
  const showPassword = ref(false);
  
  const onSubmit = async () => {
    const credentials = {
      accNo: `${accountNo.value}`,
      pin: `${pin.value}`,
    };
  
    try {
      const jsonData = JSON.stringify(credentials);
      const response = await axios.post('http://localhost:4000/api/v1/auth/login', jsonData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // console.log(response.data)
      const customer = response.data.customer
  
      if (response.data) {
        storeToken(response.data.token);
        console.log(response.data.token)
        alert('LOGIN successful!');
        navigateTo(`/home/${response.data.customer._id}`);
      } else {
        alert('Error');
      }
    } catch (error) {
      alert('Error logging in', `${error}`);
    }
  };
  
  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
  };
  </script>
  
  <style scoped>
  @import "@fortawesome/fontawesome-free/css/all.css";
  .fa-eye {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
  </style>
  