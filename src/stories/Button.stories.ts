import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "../components/Button.vue";
import { Heart, ArrowRight, Save } from "lucide-vue-next";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "danger",
        "warning",
        "outline",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    iconPosition: {
      control: "select",
      options: ["left", "right"],
    },
    iconOnly: { control: "boolean" },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
    backgroundColor: { control: "color" },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary",
    variant: "primary",
  },
};

export const WithIconLeft: Story = {
  args: {
    label: "Save",
    icon: Save,
    iconPosition: "left",
    variant: "primary",
  },
};

export const WithIconRight: Story = {
  args: {
    label: "Next",
    icon: ArrowRight,
    iconPosition: "right",
    variant: "primary",
  },
};

export const IconOnly: Story = {
  args: {
    icon: Heart,
    iconOnly: true,
    variant: "ghost",
    size: "md",
  },
};

export const LoadingState: Story = {
  args: {
    label: "Processing",
    loading: true,
    variant: "primary",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
    variant: "secondary",
  },
};

export const FullWidth: Story = {
  args: {
    label: "Full Width",
    fullWidth: true,
    variant: "primary",
  },
};

export const CustomBackground: Story = {
  args: {
    label: "Custom BG",
    backgroundColor: "#16a085",
    variant: "primary",
  },
};
