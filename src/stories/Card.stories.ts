import type { Meta, StoryObj } from "@storybook/vue3";
import Card from "../components/Card.vue";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    noPadding: { control: "boolean" },
    noShadow: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    noPadding: false,
    noShadow: false,
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">
        <p>This is the card content with default padding and shadow.</p>
      </Card>
    `,
  }),
};

export const NoPadding: Story = {
  args: {
    noPadding: true,
    noShadow: false,
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">
        <p>This card has no padding but still has a shadow.</p>
      </Card>
    `,
  }),
};

export const NoShadow: Story = {
  args: {
    noPadding: false,
    noShadow: true,
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">
        <p>This card has padding but no shadow.</p>
      </Card>
    `,
  }),
};

export const NoPaddingNoShadow: Story = {
  args: {
    noPadding: true,
    noShadow: true,
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">
        <p>This card has neither padding nor shadow.</p>
      </Card>
    `,
  }),
};
