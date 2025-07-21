# Vue TW UI

[![Storybook](https://img.shields.io/badge/Storybook-Live-orange?logo=storybook)](https://vue-tw-ui.onrender.com)

> A lightweight, customizable component library built with **Vue 3** and **TailwindCSS**.

---

## 📦 Installation

```bash
npm install vue-tw-ui
```

## 🚀 Usage

```ts
import {
  Button,
  Card,
  Modal,
  Input,
  Select,
  Checkbox,
  Toggle,
  Textarea,
  Tabs,
  TitleWithIcon,
} from "vue-tw-ui";
```

In your Vue components:

```vue
<template>
  <Button label="Click Me" @click="handleClick" />
</template>

<script setup lang="ts">
import { Button } from "vue-tw-ui";

const handleClick = () => {
  console.log("Button clicked");
};
</script>
```

## 📚 Components

- ✅ **Button**
- ✅ **Card**
- ✅ **Checkbox**
- ✅ **Input**
- ✅ **Modal**
- ✅ **Select**
- ✅ **Tabs**
- ✅ **Textarea**
- ✅ **TitleWithIcon**
- ✅ **Toggle**

See the full documentation and interactive examples here:
👉 **[Live Storybook](https://vue-tw-ui.onrender.com)**

---

## 🛠 Development

Clone the repo:

```bash
git clone https://github.com/kashyapkrlucky/vue-tw-ui.git
cd vue-tw-ui
npm install
```

### Run Storybook locally:

```bash
npm run storybook
```

### Build the library:

```bash
npm run build
```

---

## 📖 License

[MIT](LICENSE)
