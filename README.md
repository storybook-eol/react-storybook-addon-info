# React Storybook Info Addon

A React Storybook addon to show additional information for your stories.

![React Storybook Screenshot](docs/home-screenshot.png)

## Usage

Install the following npm module:

```sh
npm i -D @kadira/react-storybook-addon-info
```

Then set the addon in the place you configure storybook like this:

```js
import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

configure(function () {
  ...
}, module);
```

Then create your stories with the `.addWithInfo` API.

```js
import React from 'react';
import Button from './Button';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Button')
  .addWithInfo(
    'simple usage',
    `
      This is the basic usage with the button with providing a label to show the text.
    `,
    () => (
      <div>
        <Button label="The Button" onClick={action('onClick')}/>
        <br />
        <p>
          Click the "?" mark at top-right to view the info.
        </p>
      </div>
    ),
  );
```

> Have a look at [this example](example/story.js) stories to learn more about the `addWithInfo` API.

## Use with Docgen
To add a prop description, we can use a single line or multiple lines comment as below example:
```js
Object.assign(Button, {
  displayName: 'Button',
  propTypes: {
    /** Single line comment: This is label description */
    label: React.PropTypes.string.isRequired,
    /*
     * Multiple lines comment: This is style description
     * Must be in object
     */
    style: React.PropTypes.object,
    disabled: React.PropTypes.bool,
    onClick: React.PropTypes.func,
  },
});
```

## The FAQ

**Components lose their names on static build**

Component names also get minified with other javascript code when building for production. When creating components, set the `displayName` static property to show the correct component name on static builds.
