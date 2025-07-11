import type { Meta, StoryObj } from "@storybook/vue3-vite";

import { fn } from "storybook/test";

import Button from "../components/BaseButton.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Example/Button",
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["small", "medium", "large"] },
    variant: { control: "color" },
  },
  args: {
    variant: "primary",
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    label: "Button",
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    label: "Button",
    size: "sm",
  },
};
