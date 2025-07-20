import type { Meta, StoryObj } from "@storybook/vue3";
import Input from "../components/Input.vue";
import { Mail, Search } from "lucide-vue-next";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: { control: "text" },
    placeholder: { control: "text" },
    label: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
    iconPosition: {
      control: "select",
      options: ["left", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  args: {
    id: "basic",
    label: "Name",
    placeholder: "Enter your name",
    modelValue: "",
  },
};

export const WithIconLeft: Story = {
  args: {
    id: "email",
    label: "Email",
    placeholder: "Enter your email",
    icon: Mail,
    iconPosition: "left",
    modelValue: "",
  },
};

export const WithIconRight: Story = {
  args: {
    id: "search",
    label: "Search",
    placeholder: "Search...",
    icon: Search,
    iconPosition: "right",
    modelValue: "",
  },
};

export const ErrorState: Story = {
  args: {
    id: "error",
    label: "Username",
    placeholder: "Enter username",
    error: "This field is required",
    modelValue: "",
  },
};

export const Disabled: Story = {
  args: {
    id: "disabled",
    label: "Disabled Input",
    placeholder: "You cannot type here",
    disabled: true,
    modelValue: "",
  },
};
