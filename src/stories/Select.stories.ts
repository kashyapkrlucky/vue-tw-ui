import type { Meta, StoryObj } from "@storybook/vue3";
import Select from "../components/Select.vue";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
  { label: "Germany", value: "de" },
  { label: "United States", value: "us" },
  { label: "India", value: "in" },
];

export const Basic: Story = {
  args: {
    id: "basic",
    label: "Country",
    placeholder: "Select a country",
    modelValue: "",
    options,
  },
};

export const WithError: Story = {
  args: {
    id: "with-error",
    label: "Country",
    placeholder: "Select a country",
    modelValue: "",
    options,
    error: "Please select a country",
  },
};

export const Disabled: Story = {
  args: {
    id: "disabled",
    label: "Country",
    placeholder: "Cannot select",
    modelValue: "",
    options,
    disabled: true,
  },
};
