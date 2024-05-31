import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../../app/components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    color: "primary",
    rounded: "default",
    buttonType: "contained",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    rounded: "full",
    buttonType: "contained",
    children: "Button",
  },
};

export const Danger: Story = {
  args: {
    color: "danger",
    rounded: "full",
    buttonType: "contained",
    children: "Button",
  },
};
