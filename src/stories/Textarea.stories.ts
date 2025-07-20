import type { Meta, StoryObj } from "@storybook/vue3";
import Textarea from "../components/Textarea.vue";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Basic: Story = {
  args: {
    id: "basic",
    label: "Description",
    placeholder: "Enter your description",
    modelValue: "",
  },
};

export const WithError: Story = {
  args: {
    id: "error",
    label: "Feedback",
    placeholder: "Provide your feedback",
    error: "Feedback is required",
    modelValue: "",
  },
};

export const Disabled: Story = {
  args: {
    id: "disabled",
    label: "Disabled Notes",
    placeholder: "Cannot edit this",
    disabled: true,
    modelValue: "This is a disabled textarea",
  },
};
