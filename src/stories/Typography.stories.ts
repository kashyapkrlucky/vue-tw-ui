import Typography from "../components/Typography.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "p",
        "span",
        "caption",
        "error",
        "label",
        "small",
      ],
    },
    align: {
      control: "select",
      options: ["left", "center", "right", "justify"],
    },
    color: { control: "text" },
    default: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Primary: Story = {
  args: {
    variant: "h1",
    align: "left",
    default: "Heading Level 1",
  },
};

export const Variants: Story = {
  render: () => ({
    components: { Typography },
    template: `
      <div class="space-y-2">
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="p">This is a paragraph text.</Typography>
        <Typography variant="span">This is a span text.</Typography>
        <Typography variant="caption">This is a caption text.</Typography>
        <Typography variant="label">This is a label text.</Typography>
        <Typography variant="error">This is an error message.</Typography>
        <Typography variant="small">This is a small text.</Typography>
      </div>
    `,
  }),
};
