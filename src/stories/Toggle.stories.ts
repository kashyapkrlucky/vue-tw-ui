import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Toggle from "../components/Toggle.vue";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    label: { control: "text" },
    modelValue: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Basic: Story = {
  args: {
    label: "Enable notifications",
    modelValue: true,
  },
};

export const Controlled: Story = {
  render: () => ({
    components: { Toggle },
    setup() {
      const isOn = ref(false);
      return { isOn };
    },
    template: `
      <Toggle v-model="isOn" label="Controlled toggle switch" />
      <p>Toggle is: {{ isOn }}</p>
    `,
  }),
};
