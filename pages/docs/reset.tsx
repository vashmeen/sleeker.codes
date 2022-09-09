const Page = () => {
  return (
    <div className='bl-gap'>
      <h1>Sleeker Reset</h1>
      <p>
        Sleeker comes with reset.css. While you could use any other reset for your project, but we recommend to use our aggressive css reset.
      </p>
      <p>Agressive Reset almost removes all default style by browsers.</p>
      <p>Less aggressive CSS resets like
        {" "}
        <a href="https://resetercss.github.io/reseter.css/">
          resetter.css
        </a>
        {" "}
        or
        {" "}
        <a href="https://necolas.github.io/normalize.css/">
          normalize.css
        </a>
        {" "}
        keep some of the browsers default styles, but match the default styles for all browsers.</p>
      <h2>Why aggressive CSS reset?</h2>
      <p>Aggressive css reset works very well with Sleeker since:</p>
      <ul>
        <li>All elements can be assumed simple unstyled rectangles (almost)</li>
        <li>There is no hidden style. You can see all the styles in the class attribute</li>
      </ul>
      <p>Also, we do not recommend having global typography styles for h1, h2, ..., h6 for the same reason.</p>
    </div>
  )
}
export default Page;