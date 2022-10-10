<template>
  <div class="card mb-5 px-8">
    <h1 class="font-light font-italic green-text text-center"> Contact</h1>
    <p class="font-light font-italic green-text text-center pb-3">I'm a paragraph. Click here to add your own text.</p>
    <Splitter class="mb-5 h-full border-noround">
      <SplitterPanel
        class="flex justify button-background-color-green contact-us-background-image relative"
        :size="40"
        :minSize="40"
      >
      <Image imageClass="absolute bottom-0 right-0 w-2 h-2" src="images/logo_transparent.png" />
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
