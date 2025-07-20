import type { Meta, StoryObj } from "@storybook/vue3";
import TitleWithIcon from "../components/TitleWithIcon.vue";
import { Home } from "lucide-vue-next";

const meta: Meta<typeof TitleWithIcon> = {
  title: "Components/TitleWithIcon",
  component: TitleWithIcon,
  argTypes: {
    title: { control: "text" },
    icon: { control: false }, // Icons are components, no direct control
  },
};

export default meta;
type Story = StoryObj<typeof TitleWithIcon>;

export const Basic: Story = {
  args: {
    title: "Dashboard",
    icon: Home,
  },
};
