<template>
  <div class="card mb-5 px-8">
    <h1 class="font-light font-italic green-text text-center">Contact</h1>
    <div class="flex justify-content-center gap-3">
      <div class="flex align-self-center">
        <p class="font-bold green-text">Mail:</p>
        <p class="font-light font-italic green-text text-center pb-3">
          info@mokhofavs.co.za
        </p>
      </div>
      <br />
      <div class="flex align-self-center">
        <p class="font-bold green-text">Tel:</p>
        <p class="font-light font-italic green-text text-center pb-3">
          072 085 2692
        </p>
      </div>
    </div>
    <Splitter class="mb-5 h-full border-noround">
      <SplitterPanel
        class="flex justify footer-nav-color contact-us-background-image relative"
        :size="40"
        :minSize="40"
      >
        <div></div>
      </SplitterPanel>
      <SplitterPanel
        class="align-items-center justify-content-center card-color-tan"
        :size="60"
        :minSize="60"
      >
        <div class="m-6 justify-content-center">
          <p class="text-3xl font-light green-text font-italic">Write Us</p>
          <span class="p-float-label w-12 mb-5">
            <InputText
              class="w-9 border-noround input-background-color-tan"
              id="firstName"
              type="text"
              v-model="value2"
            />
            <label for="firstName">First Name</label>
          </span>
          <span class="p-float-label w-12 mb-5">
            <InputText
              class="w-9 border-noround input-background-color-tan"
              id="lastName"
              type="text"
              v-model="value2"
            />
            <label for="lastName">Last Name</label>
          </span>
          <span class="p-float-label w-12 mb-5">
            <InputText
              class="w-9 border-noround input-background-color-tan"
              id="email"
              type="text"
              v-model="value2"
            />
            <label for="email">Email</label>
          </span>
          <span class="p-float-label w-12 mb-5">
            <Textarea
              class="w-9 border-noround input-background-color-tan"
              id="message"
              v-model="value2"
            ></Textarea>
            <label for="message">Leave us a message...</label>
          </span>
          <Button class="button-background-color-green border-noround"
            >Submit</Button
          >
        </div>
      </SplitterPanel>
    </Splitter>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const value2 = ref();

    return { value2 };
  },
};
</script>
