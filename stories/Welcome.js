// eslint-disable-next-line no-console
const log = () => console.log('Welcome to storybook!')

export default {
  name: 'welcome',
  props: {
    showApp: {
      type: Function,
      default: log
    }
  },
  data() {
    return {}
  },
  template: `
    <div>
      <h1 class="text-cloudinary text-3xl mx-3 mt-5 font-semibold">Welcome to Maya Shavin's Design Systems</h1>
      <p>
        We've added some basic stories inside the
        <br />
        <code>src/stories</code>
        <br />
        directory.
        <br />
        A story is a single state of one or more UI components. You can have as many stories as
        you want.
        <br />
        (Basically a story is like a visual test case.)
      </p>
      <p>
        See these sample
        <br />
        <a @click="onClick" role="button" tabIndex="0">stories</a>
        <br />
        for a component called
        <br />
        <code :style="code">Button</code>
        .
      </p>
      <p>
        Just like that, you can add your own components as stories.
        <br />
        You can also edit those components and see changes right away.
        <br />
        (Try editing the <code>Button</code> component
        located at <code>src/stories/Button.js</code>.)
      </p>
      <p>
        This is just one thing you can do with Storybook.
        <br />
        Have a look at the
        <br />
        <a
          href="https://github.com/storybookjs/storybook"
          target="_blank"
          rel="noopener noreferrer"
        >
          Storybook
        </a>
        <br />
        repo for more information.
      </p>
      <p>
        <b>NOTE:</b>
        <br />
        Have a look at the
        <br />
        <code>.storybook/webpack.config.js</code>
        <br />
        to add webpack
        loaders and plugins you are using in this project.
      </p>
    </div>
  `,

  methods: {
    onClick(event) {
      event.preventDefault()
      this.showApp()
    }
  }
}
