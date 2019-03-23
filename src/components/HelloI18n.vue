<template>
  <div>
    <h1>{{ $t('title') }}</h1>
    <p>{{ $t('hello') }}</p>
    <p>{{ $d(new Date(), 'short') }}</p>
    <p>{{ $n(100, 'currency') }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloI18n"
};
</script>

<i18n>
{
  "en": {
    "title": "Switch language to see the effect",
    "hello": "Hello i18n in SFC!"
  },
  "fr": {
    "title": "Changez la langue pour observer l'effet",
    "hello": "Salut i18n in SFC!"
  }
}
</i18n>
