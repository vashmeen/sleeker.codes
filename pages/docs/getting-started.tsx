import Link from '../../component/uikit/Link';

const Page = () => {
  return (
    <div className='bl-gap'>
      <h1>Getting Started</h1>
      <h2>Installation</h2>
      <p>Currently you can only use Sleeker via npm. To install it run the command below.</p>
      <CodeBlock>
        npm i sleeker
      </CodeBlock>
      <p> Then in your root of your project, import variables and utility classes.
      </p>
      <CodeBlock>
        import &apos;sleeker/variables.css&apos;;
        <br />
        import &apos;sleeker/utility-classes.css&apos;
      </CodeBlock>
      <p>That&apos;it.</p>
      <h2>Usage</h2>
      <p>Here is a quick example how to style a button with red background, white text color, some padding , rounded corders.</p>
      <CodeBlock>
        &lt;button class=&ldquo;bg:red clr:white pd:xs pd-inl:xl rd:l&rdquo;&gt;my styled button&lt;/button&gt;
      </CodeBlock>
      <p>Here is the result:</p>
      <button className='bg:red clr:white pd:xs pd-inl:xl rd:l'>my styled button</button>
      <p>Sleeker has a utility class for (almost) each CSS rule.</p>
      <p>For example{" "}
        <CodeChip theCode="pd:s" />
        {" "}applies
        <CodeChip code="padding: var(--slk-padding--s);" />
      </p>
      <p>To adjust the padding size you could use one of these classes:</p>
      <div className='d:flex gap:xs wrap'>
        <CodeChip >pd:9xs</CodeChip>
        <CodeChip >pd:8xs</CodeChip>
        <span>...</span>
        <CodeChip >pd:2xs</CodeChip>
        <CodeChip >pd:xs</CodeChip>
        <CodeChip >pd:s</CodeChip>
        <CodeChip >pd</CodeChip>
        <CodeChip >pd:l</CodeChip>
        <CodeChip >pd:xl</CodeChip>
        <CodeChip >pd:2xl</CodeChip>
        <span>...</span>
        <CodeChip >pd:8xl</CodeChip>
        <CodeChip >pd:9xl</CodeChip>
      </div>
      <p>Also, you can only set padding in block direction with <CodeChip >pd-bl:xl</CodeChip> or <CodeChip >pd-bl-start:xs</CodeChip> </p>
      <p>To be explicit, each css-rule-like class has only one rule and no more. Everything is explicit.</p>
      <p>
        <Link href="/docs/classes">
          Click here, to see a full list of classes
        </Link>
      </p>
    </div >
  )
}
export default Page;


const CodeChip = ({ children }: any) => {
  return (
    <pre className='d:inl'>
      <code className='d:inl bg:gray12 pd:3xs pd-inl:2xs rd'>
        {children}
      </code>
    </pre>
  )
}

const CodeBlock = ({ children }: any) => {
  return (
    <pre>
      <code className="rd clr:gray12 bg:gray5 fs pd pd-inl:l pd-bl:xs">
        {children}
      </code>
    </pre>
  )
}