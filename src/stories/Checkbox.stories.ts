import type { Meta, StoryObj } from "@storybook/vue3";
import Checkbox from "../components/Checkbox.vue";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
    modelValue: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  args: {
    id: "basic",
    label: "Accept Terms and Conditions",
    modelValue: false,
  },
};

export const Checked: Story = {
  args: {
    id: "checked",
    label: "Subscribe to newsletter",
    modelValue: true,
  },
};

export const Disabled: Story = {
  args: {
    id: "disabled",
    label: "Disabled checkbox",
    modelValue: false,
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    id: "with-error",
    label: "Confirm Age",
    modelValue: false,
    error: "You must confirm your age",
  },
};
