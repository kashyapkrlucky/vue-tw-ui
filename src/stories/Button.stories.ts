import Button from "../components/Button.vue";
import { Plus, ArrowRight } from "lucide-vue-next";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "danger",
        "info",
        "success",
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
    color: { control: "text" },
    icon: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    label: "Danger Button",
    variant: "danger",
  },
};

export const Info: Story = {
  args: {
    label: "Info Button",
    variant: "info",
  },
};

export const Success: Story = {
  args: {
    label: "Success Button",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    label: "Warning Button",
    variant: "warning",
  },
};

export const OutlineWithColor: Story = {
  args: {
    label: "Outlined",
    variant: "primary",
    outline: true,
    color: "text-blue-600 border-blue-600",
  },
};

export const Ghost: Story = {
  args: {
    label: "Ghost Button",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    label: "Link Button",
    variant: "link",
  },
};

export const WithIconLeft: Story = {
  args: {
    label: "With Icon Left",
    icon: Plus,
    iconPosition: "left",
    variant: "info",
  },
};

export const WithIconRight: Story = {
  args: {
    label: "With Icon Right",
    icon: ArrowRight,
    iconPosition: "right",
    variant: "success",
  },
};

export const IconOnly: Story = {
  args: {
    icon: Plus,
    iconOnly: true,
    variant: "ghost",
  },
};

export const Loading: Story = {
  args: {
    label: "Loading...",
    loading: true,
    variant: "primary",
  },
};

export const CustomColor: Story = {
  args: {
    label: "Custom Color",
    color: "bg-fuchsia-600 text-white",
  },
};

export const FullWidth: Story = {
  args: {
    label: "Full Width",
    fullWidth: true,
    variant: "primary",
  },
};

export const Sizes: Story = {
  render: () => ({
    components: { Button, Plus },
    template: `
      <div class="space-y-2">
        <Button label="Small" size="sm" />
        <Button label="Medium" size="md" />
        <Button label="Large" size="lg" />
        <Button iconOnly :icon="Plus" size="sm" variant="primary" />
        <Button iconOnly :icon="Plus" size="md" variant="primary" />
        <Button iconOnly :icon="Plus" size="lg" variant="primary" />
      </div>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    components: { Button, Plus, ArrowRight },
    template: `
      <div class="space-y-2">
        <Button label="Primary" variant="primary" />
        <Button label="Secondary" variant="secondary" />
        <Button label="Danger" variant="danger" />
        <Button label="Info" variant="info" />
        <Button label="Success" variant="success" />
        <Button label="Warning" variant="warning" />
        <Button label="Outline Primary" variant="primary" outline color="text-blue-600 border-blue-600" />
        <Button label="Ghost" variant="ghost" />
        <Button label="Link" variant="link" />
        <Button label="Icon Left" :icon="Plus" variant="primary" />
        <Button label="Icon Right" :icon="ArrowRight" iconPosition="right" variant="primary" />
        <Button iconOnly :icon="Plus" variant="ghost" />
        <Button label="Loading" loading variant="primary" />
        <Button label="Full Width" fullWidth variant="primary" />
      </div>
    `,
  }),
};
