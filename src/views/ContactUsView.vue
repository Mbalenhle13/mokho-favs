<template>
  <div class="card mb-5 px-8">
    <h1 class="font-light font-italic green-text text-center">Contact</h1>
    <div class="flex justify-content-center gap-3">
      <div class="flex align-self-center">
        <p class="font-bold green-text">Mail:</p>
        <p class="font-light font-italic green-text text-center pb-3">
          mokhofavs@gmail.com
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
          <form class="form" ref="form" @submit.prevent="sendMail">
            <div class="form-group">
              <span class="p-float-label w-12 mb-5">
                <InputText
                  class="w-9 border-noround input-background-color-tan"
                  name="first_name"
                  id="firstName"
                  type="text"
                  v-model="firstName"
                />
                <label for="firstName">First Name</label>
              </span>
            </div>
            <div class="form-group">
              <span class="p-float-label w-12 mb-5">
                <InputText
                  class="w-9 border-noround input-background-color-tan"
                  name="last_name"
                  id="lastName"
                  type="text"
                  v-model="lastName"
                />
                <label for="lastName">Last Name</label>
              </span>
            </div>
            <div class="form-group">
              <span class="p-float-label w-12 mb-5">
                <InputText
                  class="w-9 border-noround input-background-color-tan"
                  name="from_email"
                  id="fromEmail"
                  type="text"
                  v-model="emailAddress"
                />
                <label for="email">Email Address</label>
              </span>
            </div>
            <div class="form-group">
              <span class="p-float-label w-12 mb-5">
                <Textarea
                  class="w-9 border-noround input-background-color-tan"
                  name="message"
                  id="message"
                  v-model="message"
                ></Textarea>
                <label for="message">Leave us a message...</label>
              </span>
            </div>
            <Button
              class="submit button-background-color-green border-noround"
              type="submit"
              >Submit</Button
            >
          </form>
        </div>
        <Toast position="top-right" group="br" />
      </SplitterPanel>
    </Splitter>
  </div>
</template>

<script>
import { ref } from "vue";
import emailjs from "emailjs-com";
import { useToast } from "primevue/usetoast";

export default {
  setup() {
    const form = ref(null);
    const firstName = ref(null);
    const lastName = ref(null);
    const emailAddress = ref(null);
    const message = ref(null);
    const toast = useToast();

    const sendMail = () => {
      try {
        emailjs.sendForm(
          "service_hc4n5b8",
          "template_gushlnx",
          form.value,
          "5Ya467GoV33yZjX0v"
        );
        toast.add({
          severity: "success",
          detail: "Message sucessfully sent!",
          group: "br",
          life: 3000,
        });
      } catch (err) {
        toast.add({
          severity: "error",
          detail: "Failed to send message. Try calling us instead.",
          group: "br",
          life: 3000,
        });
      }
    };

    return { form, firstName, lastName, emailAddress, message, sendMail };
  },
};
</script>
