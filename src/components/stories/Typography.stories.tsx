import { Component } from "solid-js";
import { Text, View } from "@lightningtv/solid";
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import theme from "theme";

const TypographyStory: Component = (props: any) => {
  return (
    <View
      style={{
        height: 100,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        border: { color: 0xffffff66, width: 3 }
      }}
    >
      <Text
        style={{
          fontFamily: props.theme.fontFamily,
          fontSize: props.theme.fontSize,
          fontWeight: props.theme.fontWeight
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};

const meta: Meta<typeof TypographyStory> = {
  title: "Design System/Typography",
  component: TypographyStory,
  tags: ["!autodocs"]
};
export default meta;

type Story = StoryObj<typeof TypographyStory>;

export const Display1: Story = { args: { theme: theme.typography.display1, title: "Display 1" } };
export const Display2: Story = { args: { theme: theme.typography.display2, title: "Display 2" } };
export const Display3: Story = { args: { theme: theme.typography.display3, title: "Display 3" } };
export const Display4: Story = { args: { theme: theme.typography.display4, title: "Display 4" } };
export const Headline1: Story = { args: { theme: theme.typography.headline1, title: "Headline 1" } };
export const Headline2: Story = { args: { theme: theme.typography.headline2, title: "Headline 2" } };
export const Headline3: Story = { args: { theme: theme.typography.headline3, title: "Headline 3" } };
export const Body1: Story = { args: { theme: theme.typography.body1, title: "Body 1" } };
export const Body2: Story = { args: { theme: theme.typography.body2, title: "Body 2" } };
export const Body3: Story = { args: { theme: theme.typography.body3, title: "Body 3" } };
