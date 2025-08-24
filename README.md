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
// Important: import the library CSS
import "vue-tw-ui/dist/vue-tw-ui.css";
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

### Important notes about TailwindCSS when consuming this library

- This library ships a prebuilt CSS file at `dist/vue-tw-ui.css`. Import it in your app (see above). We also expose `"style": "dist/vue-tw-ui.css"` in `package.json` so some bundlers auto-include it, but with Vite you should import it explicitly.
- Components use Tailwind utilities internally and are compiled into that CSS file, so they work even if your app doesn't have Tailwind.
- Passing arbitrary Tailwind classes via props (e.g., `color="bg-red-500"`) requires those utilities to exist at runtime. Since our CSS is tree-shaken based on this repo's source, utilities not used here won't be included. If you need arbitrary Tailwind utilities, install and configure Tailwind in your host app and apply classes directly in your app.
- For color overrides on `Button`, prefer:
  - `outline` with `color="text-blue-600"` (outline border/text will use the blue shade)
  - or `color="bg-emerald-600"` for solid backgrounds. See `src/components/Button.vue` for details.

---

## 📖 License

[MIT](LICENSE)
