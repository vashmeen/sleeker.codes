const Page = () => {
  return (
    <div className='w:100% layout:stack '>
      <h1>Sizes</h1>
      <p>
        Sleeker by default provide 9 steps for sizes.
      </p>


      <h2>Margin</h2>
      <Table cls='mg' property="margin" />
      <h2>Padding</h2>
      <Table cls='mg' property="margin" />

      <h2>Gap</h2>
      <Table cls='mg' property="margin" />

      <h2>Border-Radius</h2>
      <Table cls='mg' property="margin" />

      <h2>Border-Size</h2>
      <Table cls='mg' property="margin" />




    </div>
  )
}

const smallSizes = ['s', 'xs', '2xs', '3xs', '4xs', '5xs', '6xs', '7xs', '8xs', '9xs']
const largeSizes = ['l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl']

const Table = ({ cls, property }) => {
  return <table>
    <thead>
      <th>class</th>
      <th>CSS rules</th>
    </thead>
    {smallSizes.map((sz, index) => <Trow key={index} cls={`${cls}:${sz}`} rule={`${property}:var(--${property}--${sz})`} />)}
    <Trow cls={`${cls}`} rule={`${property}:var(--${property})`} />
    {largeSizes.map((sz, index) => <Trow key={index} cls={`${cls}:${sz}`} rule={`${property}:var(--${property}--${sz})`} />)}
  </table>
}

export default Page;

const Trow = ({ cls = "", rule = "" }) => {
  return <tr>
    <td>{cls}</td>
    <td>{rule}</td>
  </tr>
}