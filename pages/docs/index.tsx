export default () => {


  return (
    <div className='layout:stack'>
      <h1>
        Sleeker Documentation
      </h1>
      <h2>Installation</h2>
      <h3>with NPM</h3>
      <code className="rd:s bg:gray5 fs pd:s pd-bl:xs">npm i sleeker</code>
      in your root do this:
      <code className="rd:s bg:gray5 fs pd:s pd-bl:xs">
        import 'sleeker/variables.css';
        <br />
        import 'sleeker/utility-classes.css'
      </code>

      <h3>with link</h3>
      <h3>with manual source download</h3>
      <h3>for WordPRess</h3>
      <h2>Usage</h2>
      <h3>Using utility classes</h3>
      <h3>Configuration</h3>
      <h3>Extending Sleeker</h3>
      <h4>manually</h4>
      <h4>with UnoCSS</h4>
      <h3>Reuse</h3>
      <h4>Define styles for UI atoms (elements and low-level UI components) | Most Recommended</h4>
      <h4>Add sleeker Elements library for elements | Recommended</h4>
      <h4>Use CSS vars to define more classes | Recommended</h4>
      <h4>keep a combination of classes and in javascript variables and reuse them | Recommended</h4>
      <h4>Define components that keep a keep classes in it and reuse the component | Not Recommended if reusing styles is the only reason that component exist.</h4>
      <h4>Define styles</h4>
      <h2>Best Practice</h2>
      <h3>Add your Reset to Project or use Sleek Reset</h3>
      <h3>Configure Sleeker css variables</h3>
      <h3>Define styles for UI atoms (elements and low-level UI components) </h3>
      <h3>Use Layout utility classes for lay-outing</h3>
      <h3>Use other utility classes for whatever left</h3>
      <h3>For complex layouts or styles, use whatever CSS tool you are easy with</h3>
      <h3>Reconfigure Sleeker for UI Redesigns</h3>
      <h3>Change utility classes as needed</h3>

      <ul>
        <li><a href="/docs/getting-started">Getting Started</a></li>
        <li><a href="/docs/classes">Sleeker Classes</a></li>
        <li><a href="/docs/variables">CSS Variables</a></li>
        <li><a href="/docs/variables">CSS Variables</a></li>
      </ul>
    </div>
  )
}