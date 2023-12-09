<template>
    <div class="scroll-container bg-slate-200">
      <div class="scroll-wrapper">
        <div class="scroll-content">
          <div class="flex space-x-8 font-semibold">
            <h2>Rate of Interest -</h2>
            <p>SB -> 4.5%</p>
            <p>FD -> 7.2%</p>
            <p>CA -> NILL%</p>
            <p>RD -> 3.2%</p>
            <!-- Add other details as needed -->
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.scroll-container {
  overflow-x: hidden; /* Change to 'hidden' to hide the default scrollbar */
}

.scroll-wrapper {
  white-space: nowrap;
  animation: scrollAnimation 35s linear infinite; /* Adjust animation duration as needed */
}

.scroll-content {
  display: inline-flex;
  gap: 2rem; /* Adjust as needed */
  /* padding: 1rem;  */
}

/* .rate-card {
  min-width: 250px; 
  padding: 1rem;
  background-color: #f0f0f0; 
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
} */

@keyframes scrollAnimation {
  0% {
    transform: translateX(100vw); /* Start off-screen to the right */
  }
  100% {
    transform: translateX(-100%); /* Move off-screen to the left */
  }
}
</style>

