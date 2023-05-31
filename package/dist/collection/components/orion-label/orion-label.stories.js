/**
 * This function creates a Storybook ArgsTable settings object.
 * The goal is to organize the Storybook only controls under
 * the same category in the ArgsTable
 * @param {string} slotName
 */
const getTableSettings = (slotName) => ({
  description: `**NOT PART OF COMPONENT API**. Toggle the \`${slotName}\` slot in this storybook story`,
  table: {
    category: 'Story Controls. Not component API',
  },
});

export default {
  title: 'Components/orion-label',
  component: 'orion-label',
  // Configuring the these Storybook only controls to appear under
  // the same category in the ArgsTable
  argTypes: {
    showConditionalSlot: getTableSettings('orion-label-conditional'),
    slotContentConditional: getTableSettings('orion-label-conditional'),
    slotContentDefault: getTableSettings('default'),
  },
};

/**
 * This function will remove empty lines from the template string
 * @param {string} text
 * @returns {string} text without empty lines
 */
const removeEmptyLines = (text = '') => text
  .split('\n')
  .filter((textPart) => Boolean(textPart.trim()))
  .join('\n');

const Template = (args) => removeEmptyLines(`
  <orion-label
    ${args.disabled ? 'disabled' : ''}
    ${args.error ? 'error' : ''}
  >
    ${args.slotContentDefault}
  ${
  args.showConditionalSlot
    ? `
      <span slot="orion-label-conditional">
        ${args.slotContentConditional}
      </span>
    `
    : ''
}
  </orion-label>
`);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  error: false,
  slotContentDefault: 'Label',
  showConditionalSlot: false,
};
Default.parameters = {
  docs: {
    description: {
      story: 'The default state',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
Disabled.parameters = {
  docs: {
    description: {
      story: 'The disabled state',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error: true,
};
Error.parameters = {
  docs: {
    description: {
      story: 'The error state',
    },
  },
};

export const Conditional = Template.bind({});
Conditional.args = {
  ...Default.args,
  showConditionalSlot: true,
  slotContentConditional: '(Conditional)',
};
Conditional.parameters = {
  docs: {
    description: {
      story: 'Conditional text displayed',
    },
  },
};
