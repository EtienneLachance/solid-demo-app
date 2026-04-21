import{I as l}from"./Input-DdRBu8gn.js";import{a as n,c as u}from"./iframe-BUOFS7RA.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Components/Input",component:l,tags:["!autodocs"]},e={args:{title:"Click Me"}},r={args:{...e.args,autofocus:!0}},a={args:{...r.args,placeholder:"Enter text here..."}},t={render:()=>{const o=n("Hello World"),c=n("");return u(l,{valueSignal:o,keyEvents:c,placeholder:"Enter text here..."})}},s={render:()=>{const o=n("Hello World"),c=n("");return u(l,{valueSignal:o,keyEvents:c,placeholder:"Enter text here...",mask:"x",password:!0})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Click Me"
  } as any
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    autofocus: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithFocus.args,
    placeholder: "Enter text here..."
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const valueSignal = createSignal("Hello World");
    const keyEvents = createSignal("");
    return <Input valueSignal={valueSignal} keyEvents={keyEvents} placeholder="Enter text here..." />;
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const valueSignal = createSignal("Hello World");
    const keyEvents = createSignal("");
    return <Input valueSignal={valueSignal} keyEvents={keyEvents} placeholder="Enter text here..." mask="x" password />;
  }
}`,...s.parameters?.docs?.source}}};const g=["Default","WithFocus","WithPlaceholder","WithValue","WithMask"];export{e as Default,r as WithFocus,s as WithMask,a as WithPlaceholder,t as WithValue,g as __namedExportsOrder,m as default};
