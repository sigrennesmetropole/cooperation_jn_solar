<template>
  <div class="flex flex-row items-start p-0 gap-[18px]">
    <div class="flex flex-col items-start p-0 gap-6">
      <div class="flex flex-row items-center p-0 gap-6">
        <slot name="image"></slot>
        <div class="flex flex-col justify-center items-start p-0 w-32">
          <slot name="text"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
