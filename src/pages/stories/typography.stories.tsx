import { Component } from "solid-js";
import { Text, View } from "@lightningtv/solid";
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import theme from "theme";

const TypographyStory: Component = (props: any) => {
  return <Text color={"#000000"}>{props.title}</Text>;
};

const meta: Meta<typeof TypographyStory> = {
  title: "Design System/Typography",
  component: TypographyStory,
  tags: ["!autodocs"]
};
export default meta;

type Story = StoryObj<typeof TypographyStory>;

export const Title1: Story = { args: { theme: theme.typography.display1, title: "Title 1" } };
