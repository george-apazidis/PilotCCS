/**
 * This function creates a Storybook ArgsTable settings object.
 * The goal is to organize the Storybook only controls under
 * the same category in the ArgsTable
 * @param {string} slotName
 */
const getTableSettings = (slotName) => ({
  description: `**NOT PART OF COMPONENT API**. Modify the \`${slotName}\` slot content in this storybook story`,
  table: {
    category: 'Story Controls. Not component API',
  },
});

export default {
  title: 'Components/orion-accordion',
  component: 'orion-accordion',
  parameters: {
    docs: {
      description: {
        component:
          'Accordion is a component that allows users to expand and collapse sections of content. Additional documentation available at [orion.united.com](https://orion.united.com/)',
      },
    },
    actions: {
      handles: ['toggle'],
    },
  },
  // Configuring the these Storybook only controls to appear under
  // the same category in the ArgsTable
  argTypes: {
    // header slot content
    slotContentHeader: getTableSettings('header'),
    // panel slot content
    slotContentPanel: getTableSettings('panel'),
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
  <orion-accordion
    ${args.open ? 'open' : ''}
    ${args.chevronLeft ? 'chevron-left' : ''}
    ${args.hasContainer ? 'has-container' : ''}
  >
    <span slot="orion-accordion-header">
      ${args.slotContentHeader}
    </span>
    <div slot="orion-accordion-panel">
      ${args.slotContentPanel}
    </div>
  </orion-accordion>
`);

export const Default = Template.bind({});
Default.args = {
  chevronLeft: false,
  hasContainer: false,
  open: false,
  slotContentHeader: 'Title',
  slotContentPanel:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};
Default.parameters = {
  docs: {
    description: {
      story: 'The default state',
    },
  },
};

export const chevronLeft = Template.bind({});
chevronLeft.args = {
  ...Default.args,
  chevronLeft: true,
};
chevronLeft.parameters = {
  docs: {
    description: {
      story: 'The chevron left state (desktop only)',
    },
  },
};

export const openByDefault = Template.bind({});
openByDefault.args = {
  ...Default.args,
  open: true,
};
openByDefault.parameters = {
  docs: {
    description: {
      story: 'The open by default state',
    },
  },
};

export const Container = Template.bind({});
Container.args = {
  ...Default.args,
  hasContainer: true,
};
Container.parameters = {
  docs: {
    description: {
      story: 'The container state',
    },
  },
};

export const containerChevronLeft = Template.bind({});
containerChevronLeft.args = {
  ...Default.args,
  hasContainer: true,
  chevronLeft: true,
};
containerChevronLeft.parameters = {
  docs: {
    description: {
      story: 'The container state with chevron left (desktop only)',
    },
  },
};

export const containerOpenByDefault = Template.bind({});
containerOpenByDefault.args = {
  ...Default.args,
  hasContainer: true,
  open: true,
};
containerOpenByDefault.parameters = {
  docs: {
    description: {
      story: 'The container state open by default',
    },
  },
};
