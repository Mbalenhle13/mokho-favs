<template>
  <div class="card mb-5 px-8">
    <Splitter class="mb-5 h-19rem border-noround">
      <SplitterPanel
        class="flex justify button-background-color-green about-us-background-image relative"
        :minSize="50"
      >
        <!-- This div does not work! -->
        <div class="about-us-background-1"></div>
      </SplitterPanel>
      <SplitterPanel
        class="flex justify button-background-color-green about-us-background-image2 relative"
        :minSize="50"
      >
        <div class="contact-us-background-image"></div>
      </SplitterPanel>
    </Splitter>
    <h1 class="font-light font-italic green-text text-center">Our story</h1>
    <p class="font-light font-italic green-text text-center pb-3">
      I'm a paragraph. Click here to add your own text and edit me. It’s easy.
      Just click “Edit Text” or double click me to add your own content and make
      changes to the font. Feel free to drag and drop me anywhere you like on
      your page. I’m a great place for you to tell a story and let your users
      know a little more about you.
    </p>

    <p class="font-light font-italic green-text text-center pb-3">
      This is a great space to write long text about your company and your
      services. You can use this space to go into a little more detail about
      your company. Talk about your team and what services you provide. Tell
      your visitors the story of how you came up with the idea for your business
      and what makes you different from your competitors. Make your company
      stand out and show your visitors who you are.
    </p>
    <p class="font-light font-italic green-text text-center pb-3">
      I'm a paragraph. Click here to add your own text and edit me. It’s easy.
      Just click “Edit Text” or double click me to add your own content and make
      changes to the font. Feel free to drag and drop me anywhere you like on
      your page. I’m a great place for you to tell a story and let your users
      know a little more about you.
    </p>

    <p class="font-light font-italic green-text text-center pb-3">
      This is a great space to write long text about your company and your
      services. You can use this space to go into a little more detail about
      your company. Talk about your team and what services you provide. Tell
      your visitors the story of how you came up with the idea for your business
      and what makes you different from your competitors. Make your company
      stand out and show your visitors who you are.
    </p>
  </div>
</template>
