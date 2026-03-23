import { Meta, StoryObj } from "storybook-solidjs-vite";
import { View, Text } from "@lightningtv/solid";
import { Row, Column } from "@lightningtv/solid/primitives";

const meta: Meta = {
  title: "Components/Flex",
  tags: ["!autodocs"]
};

export default meta;

type Story = StoryObj;

const Block = (props: any) => (
  <View
    {...props}
    style={{
      width: 80,
      height: 60,
      borderRadius: 4,
      ...props.style
    }}
  />
);

const Title = (props: any) => (
  <Text
    {...props}
    style={{
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 8,
      ...props.style
    }}
  >
    {props.children}
  </Text>
);

const Container = (props: any) => (
  <View
    {...props}
    style={{
      display: "flex",
      flexDirection: "column",
      marginBottom: 24,
      padding: 16,
      borderRadius: 4,
      color: 0x2a2a2aff,
      ...props.style
    }}
  >
    {props.children}
  </View>
);

// ROW JUSTIFY CONTENT VARIANTS
export const RowJustifyFlexStart: Story = {
  render: () => (
    <Container>
      <Title>Row - Justify Content: flexStart</Title>
      <Row gap={12} justifyContent="flexStart" width={400} height={100}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff }} />
        <Block style={{ color: 0xffd93dff }} />
      </Row>
    </Container>
  )
};

export const RowJustifyCenter: Story = {
  render: () => (
    <Container>
      <Title>Row - Justify Content: center</Title>
      <Row gap={12} justifyContent="center" width={400} height={100}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff }} />
        <Block style={{ color: 0xffd93dff }} />
      </Row>
    </Container>
  )
};

export const RowJustifyFlexEnd: Story = {
  render: () => (
    <Container>
      <Title>Row - Justify Content: flexEnd</Title>
      <Row gap={12} justifyContent="flexEnd" width={400} height={100}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff }} />
        <Block style={{ color: 0xffd93dff }} />
      </Row>
    </Container>
  )
};

export const RowJustifySpaceBetween: Story = {
  render: () => (
    <Container>
      <Title>Row - Justify Content: spaceBetween</Title>
      <Row gap={12} justifyContent="spaceBetween" width={400} height={100}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff }} />
        <Block style={{ color: 0xffd93dff }} />
      </Row>
    </Container>
  )
};

export const RowJustifySpaceAround: Story = {
  render: () => (
    <Container>
      <Title>Row - Justify Content: spaceAround</Title>
      <Row gap={12} justifyContent="spaceAround" width={400} height={100}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff }} />
        <Block style={{ color: 0xffd93dff }} />
      </Row>
    </Container>
  )
};

// ROW ALIGN ITEMS VARIANTS
export const RowAlignFlexStart: Story = {
  render: () => (
    <Container>
      <Title>Row - Align Items: flexStart</Title>
      <Row gap={12} alignItems="flexStart" width={400} height={150}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff, height: 100 }} />
        <Block style={{ color: 0xffd93dff, height: 80 }} />
      </Row>
    </Container>
  )
};

export const RowAlignCenter: Story = {
  render: () => (
    <Container>
      <Title>Row - Align Items: center</Title>
      <Row gap={12} alignItems="center" width={400} height={150}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff, height: 100 }} />
        <Block style={{ color: 0xffd93dff, height: 80 }} />
      </Row>
    </Container>
  )
};

export const RowAlignFlexEnd: Story = {
  render: () => (
    <Container>
      <Title>Row - Align Items: flexEnd</Title>
      <Row gap={12} alignItems="flexEnd" width={400} height={150}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff, height: 100 }} />
        <Block style={{ color: 0xffd93dff, height: 80 }} />
      </Row>
    </Container>
  )
};

// COLUMN JUSTIFY CONTENT VARIANTS
export const ColumnJustifyFlexStart: Story = {
  render: () => (
    <Container>
      <Title>Column - Justify Content: flexStart</Title>
      <Column gap={12} justifyContent="flexStart" width={150} height={250}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff }} />
        <Block style={{ color: 0xffd93dff }} />
      </Column>
    </Container>
  )
};

export const ColumnJustifyCenter: Story = {
  render: () => (
    <Container>
      <Title>Column - Justify Content: center</Title>
      <Column gap={12} justifyContent="center" width={150} height={250}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff }} />
        <Block style={{ color: 0xffd93dff }} />
      </Column>
    </Container>
  )
};

export const ColumnJustifyFlexEnd: Story = {
  render: () => (
    <Container>
      <Title>Column - Justify Content: flexEnd</Title>
      <Column gap={12} justifyContent="flexEnd" width={150} height={250}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff }} />
        <Block style={{ color: 0xffd93dff }} />
      </Column>
    </Container>
  )
};

export const ColumnJustifySpaceBetween: Story = {
  render: () => (
    <Container>
      <Title>Column - Justify Content: spaceBetween</Title>
      <Column gap={12} justifyContent="spaceBetween" width={150} height={250}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff }} />
        <Block style={{ color: 0xffd93dff }} />
      </Column>
    </Container>
  )
};

export const ColumnJustifySpaceAround: Story = {
  render: () => (
    <Container>
      <Title>Column - Justify Content: spaceAround</Title>
      <Column gap={12} justifyContent="spaceAround" width={150} height={250}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff }} />
        <Block style={{ color: 0xffd93dff }} />
      </Column>
    </Container>
  )
};

// COLUMN ALIGN ITEMS VARIANTS
export const ColumnAlignFlexStart: Story = {
  render: () => (
    <Container>
      <Title>Column - Align Items: flexStart</Title>
      <Column gap={12} alignItems="flexStart" width={200} height={250}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff, width: 100 }} />
        <Block style={{ color: 0xffd93dff, width: 80 }} />
      </Column>
    </Container>
  )
};

export const ColumnAlignCenter: Story = {
  render: () => (
    <Container>
      <Title>Column - Align Items: center</Title>
      <Column gap={12} alignItems="center" width={200} height={250}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff, width: 100 }} />
        <Block style={{ color: 0xffd93dff, width: 80 }} />
      </Column>
    </Container>
  )
};

export const ColumnAlignFlexEnd: Story = {
  render: () => (
    <Container>
      <Title>Column - Align Items: flexEnd</Title>
      <Column gap={12} alignItems="flexEnd" width={200} height={250}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff, width: 100 }} />
        <Block style={{ color: 0xffd93dff, width: 80 }} />
      </Column>
    </Container>
  )
};

// COMBINED VARIANTS
export const RowCenterBoth: Story = {
  render: () => (
    <Container>
      <Title>Row - Center (justify + align)</Title>
      <Row gap={12} justifyContent="center" alignItems="center" width={400} height={150}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff, height: 100 }} />
        <Block style={{ color: 0xffd93dff, height: 80 }} />
      </Row>
    </Container>
  )
};

export const ColumnCenterBoth: Story = {
  render: () => (
    <Container>
      <Title>Column - Center (justify + align)</Title>
      <Column gap={12} justifyContent="center" alignItems="center" width={200} height={250}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff, width: 100 }} />
        <Block style={{ color: 0xffd93dff, width: 80 }} />
      </Column>
    </Container>
  )
};

export const RowWithGap: Story = {
  render: () => (
    <Container>
      <Title>Row - Gap variations</Title>
      <Column gap={20}>
        <View>
          <Title style={{ fontSize: 14 }}>Gap: 8</Title>
          <Row gap={8} width={400} height={80}>
            <Block style={{ color: 0x4dabf5ff }} />
            <Block style={{ color: 0x51cf66ff }} />
            <Block style={{ color: 0xffd93dff }} />
          </Row>
        </View>
        <View>
          <Title style={{ fontSize: 14 }}>Gap: 20</Title>
          <Row gap={20} width={400} height={80}>
            <Block style={{ color: 0x4dabf5ff }} />
            <Block style={{ color: 0x51cf66ff }} />
            <Block style={{ color: 0xffd93dff }} />
          </Row>
        </View>
        <View>
          <Title style={{ fontSize: 14 }}>Gap: 40</Title>
          <Row gap={40} width={400} height={80}>
            <Block style={{ color: 0x4dabf5ff }} />
            <Block style={{ color: 0x51cf66ff }} />
            <Block style={{ color: 0xffd93dff }} />
          </Row>
        </View>
      </Column>
    </Container>
  )
};

export const WrapBehavior: Story = {
  render: () => (
    <Container>
      <Title>Row - Wrap (many items)</Title>
      <Row gap={12} wrap={true} width={300} height={200}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff }} />
        <Block style={{ color: 0xffd93dff }} />
        <Block style={{ color: 0xff6b6bff }} />
        <Block style={{ color: 0xfcc419ff }} />
        <Block style={{ color: 0x9c36b5ff }} />
      </Row>
    </Container>
  )
};
