import type { Meta, StoryObj } from "@storybook/vue3";
import Tabs from "../components/Tabs.vue";
import { HomeIcon, UserIcon, SettingsIcon } from "lucide-vue-next";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    type: {
      control: { type: "select" },
      options: [1, 2, 3],
      description: "Style type of tabs",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const tabsData = [
  {
    name: "Home",
    content: "<p>Welcome to Home tab content.</p>",
    icon: HomeIcon,
  },
  {
    name: "Profile",
    content: "<p>This is your profile info.</p>",
    icon: UserIcon,
  },
  {
    name: "Settings",
    content: "<p>Adjust your preferences here.</p>",
    icon: SettingsIcon,
  },
];

export const Basic: Story = {
  args: {
    tabs: tabsData,
    type: 1,
  },
};

export const WithIconsType2: Story = {
  args: {
    tabs: tabsData,
    type: 2,
  },
};

export const PillsStyle: Story = {
  args: {
    tabs: tabsData,
    type: 3,
  },
};
