<template>
  <div class="card mb-5 px-8">
    <Splitter class="mb-5 h-full border-noround">
      <SplitterPanel
        class="flex align-items-center justify-content-center button-background-color-green"
      >
        <Image imageClass="w-3 h-3" src="images/logo_transparent.png" />
      </SplitterPanel>
      <SplitterPanel
        class="align-items-center justify-content-center card-color-tan"
      >
        <div class="m-6">
          <p class="text-3xl">Write Us</p>
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
